import React from "react";

interface StateIndicatorProps {
  score: number;
  reason?: string; // optionally show reason summary or tooltip
}

const StateIndicator: React.FC<StateIndicatorProps> = ({ score, reason }) => {
  const approved = score >= 0.8;

  return (
    <div
      style={{
        padding: "0.75rem 1.25rem",
        borderRadius: "24px",
        fontWeight: "700",
        color: approved ? "#D4AF37" : "#6B4226", // gold or burgundy
        backgroundColor: approved ? "rgba(212, 175, 55, 0.15)" : "rgba(107, 66, 38, 0.15)",
        border: `2px solid ${approved ? "#D4AF37" : "#6B4226"}`,
        minWidth: "160px",
        textAlign: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        position: "relative",
        cursor: reason ? "help" : "default",
        userSelect: "none",
      }}
      title={reason ? reason : undefined} // native tooltip for reason
      aria-label={approved ? "Organization approved based on score" : "Organization declined based on score"}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          fontSize: "1.1rem",
        }}
      >
        <span
          aria-hidden="true"
          style={{
            display: "inline-block",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: approved ? "#D4AF37" : "#6B4226",
            color: "white",
            lineHeight: "20px",
            textAlign: "center",
            fontWeight: "900",
            fontSize: "16px",
            userSelect: "none",
          }}
        >
          {approved ? "✓" : "✕"}
        </span>
        <span>{approved ? "Approved" : "Declined"}</span>
      </div>
      <small
        style={{
          display: "block",
          marginTop: "0.25rem",
          fontWeight: "400",
          fontSize: "0.85rem",
          color: approved ? "#7A6B32" : "#7A3B3B",
          userSelect: "text",
        }}
      >
        {approved
          ? "Compliant with financial and regulatory standards."
          : "Potential risks or issues detected."}
      </small>
    </div>
  );
};

export default StateIndicator;
