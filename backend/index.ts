import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: Bun.env.GEMINI_API });
const modelUrl = Bun.env.MODEL_URL || "";

interface FraudAnalysis {
  score: number;
  reasons: string[];
}

async function evaluateFraudRisk(
  url: string,
  input: any
): Promise<FraudAnalysis> {
  console.log("[MODEL INPUT]", input, "=> Model URL:", url);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });

    if (!response.ok) {
      console.error("[MODEL ERROR]", response.status, response.statusText);
      throw new Error(`Failed to fetch fraud analysis: ${response.statusText}`);
    }

    const result = await response.json();

    if (
      typeof result.score !== "number" ||
      !Array.isArray(result.reasons) ||
      result.reasons.some((reason) => typeof reason !== "string")
    ) {
      throw new Error("Invalid response format from fraud analysis model.");
    }

    console.log("[MODEL OUTPUT]", result);
    return result as FraudAnalysis;
  } catch (error) {
    console.error("[EVALUATION ERROR]", error);
    throw new Error("Error evaluating fraud risk.");
  }
}

function createLLMPrompt(data: FraudAnalysis): string {
  return `Analyze cannot approve the credit request based on a fraud score of ${
    data.score
  } out of 10 and the following reasons: ${data.reasons.join(
    ", "
  )}. Explain clearly to a bank creditor why the credit request is denied. Do not give advice or suggest alternatives.`;
}

async function generateLLMExplanation(prompt: string): Promise<string> {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });
  return response.text || "No explanation generated.";
}

async function processFraudAnalysis(input: any): Promise<string> {
  const modelResult = await evaluateFraudRisk(modelUrl, input);
  const prompt = createLLMPrompt(modelResult);
  return await generateLLMExplanation(prompt);
}

console.log("[SERVER STARTED] at", new Date());

Bun.serve({
  port: 3001,
  fetch: async (req) => {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (req.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    if (req.method !== "POST") {
      return new Response("Only POST requests are supported.", {
        status: 405,
        headers: corsHeaders,
      });
    }

    try {
      const input = await req.json();
      const explanation = await processFraudAnalysis(input);
      console.log("[LLM OUTPUT]", explanation);
      return new Response(JSON.stringify({ result: explanation }), {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("[SERVER ERROR]", error);
      return new Response("Internal Server Error", {
        status: 500,
        headers: corsHeaders,
      });
    }
  },
});

