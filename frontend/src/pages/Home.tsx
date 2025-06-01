// src/pages/Home.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OrgScore from "../components/OrgScore";

const Home: React.FC = () => {
  const [fin, setFin] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fin.trim()) return;
    navigate(`/results-by-fin?fin=${encodeURIComponent(fin.trim())}`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F8F9FA",
        padding: "1rem",
      }}
    >
      {/* Header Section with Visuals */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        {/* Example SVG visual */}
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginBottom: "1rem" }}
        >
          <circle cx="40" cy="40" r="38" stroke="#0B3D2E" strokeWidth="4" fill="#E6F4EA" />
          <rect x="25" y="35" width="30" height="20" rx="4" fill="#0B3D2E" />
          <rect x="33" y="40" width="14" height="6" rx="2" fill="#fff" />
        </svg>
        <h1 style={{ color: "#0B3D2E", fontSize: "2.2rem", fontWeight: 800, margin: 0 }}>
          Welcome to Fraud Detection System
        </h1>
        <p style={{ color: "#333", fontSize: "1.1rem", marginTop: "0.7rem", textAlign: "center", maxWidth: 480 }}>
          Instantly check organization’s score by entering its FIN below.
          <br />
          Get insights and analytics to help your business grow.
        </p>
      </div>
      <form
        onSubmit={onSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "400px",
          gap: "1.5rem",
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <input
          type="text"
          placeholder="Enter FIN"
          value={fin}
          onChange={(e) => setFin(e.target.value)}
          style={{
            padding: "1rem",
            fontSize: "1.2rem",
            borderRadius: "8px",
            border: "2px solid #0B3D2E",
            outline: "none",
            fontFamily: "Arial, sans-serif",
          }}
          autoFocus
        />
        <button
          type="submit"
          style={{
            padding: "1rem",
            fontSize: "1.2rem",
            borderRadius: "8px",
            backgroundColor: "#0B3D2E",
            color: "white",
            fontWeight: "700",
            cursor: "pointer",
            border: "none",
            fontFamily: "Arial, sans-serif",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#083021")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#0B3D2E")
          }
        >
          Search
        </button>
      </form>
      {/* OrgScore below the search bar */}
      <div style={{ width: "100%", marginTop: "2rem" }}>
        <OrgScore />
      </div>
    </div>
  );
};

export default Home;
