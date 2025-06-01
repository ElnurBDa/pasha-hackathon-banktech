import React from "react";

interface ScoreCircleProps {
  score: number; // between 0 and 1
  size?: number; // diameter in px, default 100
}

const ScoreCircle: React.FC<ScoreCircleProps> = ({ score, size = 100 }) => {
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference * (1 - score);

  // Color gradient or fixed color
  const strokeColor = score >= 0.8 ? "#D4AF37" /* golden yellow */ : "#6B4226" /* burgundy */;

  return (
    <svg width={size} height={size} style={{ display: "block", margin: "auto" }}>
      <circle
        stroke="#e6e6e6"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        stroke={strokeColor}
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={progress}
        r={radius}
        cx={size / 2}
        cy={size / 2}
        style={{ transition: "stroke-dashoffset 0.6s ease" }}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize={size / 4}
        fill="#0B3D2E" // dark green
        fontWeight="600"
        fontFamily="Arial, sans-serif"
      >
        {(score * 100).toFixed(0)}%
      </text>
    </svg>
  );
};

export default ScoreCircle;
