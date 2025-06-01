// src/pages/Results.tsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ScoreCircle from "../components/ScoreCircle";
import StateIndicator from "../components/StateIndicator";
import MainInfo from "../components/MainInfo";
import { fetchOrganizationByVoen } from "../utils/dataFetcher";
import ReasonDescription from "../components/ReasonDescription";

const Results: React.FC = () => {
  const { voen } = useParams<{ voen: string }>();
  const navigate = useNavigate();

  if (!voen) {
    navigate("/");
    return null;
  }

  const organization = fetchOrganizationByVoen(voen);

  if (!organization) {
    return (
      <div
        style={{
          padding: "2rem",
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
          color: "#6B4226",
        }}
      >
        <h2>Organization with VOEN ID "{voen}" not found.</h2>
        <button
          onClick={() => navigate("/")}
          style={{
            marginTop: "1rem",
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            backgroundColor: "#D4AF37",
            border: "none",
            color: "#0B3D2E",
            fontWeight: "700",
            cursor: "pointer",
          }}
        >
          Back to Search
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#F5F3EF",
        minHeight: "100vh",
        padding: "2rem 0",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "2rem auto",
          padding: "2.5rem 2rem",
          fontFamily: "Arial, sans-serif",
          color: "#0B3D2E",
          position: "relative",
          minHeight: "80vh",
          background: "rgba(255,255,255,0.96)",
          borderRadius: "24px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 1.5px 6px rgba(212,175,55,0.08)",
          border: "1.5px solid #E5D7B8",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1.5rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <StateIndicator score={organization.score} />
          <ScoreCircle score={organization.score} />
        </div>

        <MainInfo mainInfo={organization.main_info} voenId={organization.voen_id} owner={organization.owner} />

        {/* <TransactionsTable transactions={organization.transactions} /> */}
        <ReasonDescription reason={organization.reason} />

        {/* Home Icon Button */}
        <button
          onClick={() => navigate("/")}
          aria-label="Return to Home"
          style={{
            position: "fixed",
            left: "2rem",
            bottom: "2rem",
            background: "#fff",
            border: "none",
            borderRadius: "50%",
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 1000,
            transition: "background 0.2s",
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0B3D2E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 12L12 3l9 9" />
            <path d="M9 21V12h6v9" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Results;
