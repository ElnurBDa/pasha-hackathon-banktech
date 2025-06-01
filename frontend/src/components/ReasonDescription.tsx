import React from "react";

interface ReasonDescriptionProps {
  reason: string;
}

const ReasonDescription: React.FC<ReasonDescriptionProps> = ({ reason }) => {
  return (
    <section
      aria-label="Reason for Approval or Decline"
      style={{
        marginTop: "2rem",
        padding: "1.5rem 2rem",
        backgroundColor: "#F9F6F1",
        borderLeft: "6px solid #D4AF37", // golden yellow accent
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#3B3B3B",
        fontSize: "1.1rem",
        lineHeight: 1.6,
        maxWidth: "800px",
        marginLeft: "auto",
        marginRight: "auto",
        userSelect: "text",
      }}
    >
      <h3
        style={{
          color: "#0B3D2E",
          fontWeight: 700,
          marginBottom: "0.75rem",
          fontSize: "1.3rem",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          fontFamily: "'Segoe UI Semibold', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        Reason for Evaluation
      </h3>
      <p>{reason}</p>
    </section>
  );
};

export default ReasonDescription;
