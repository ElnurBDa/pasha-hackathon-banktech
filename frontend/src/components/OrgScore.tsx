import React from "react";
import mockData from "../mock.json";
import { Organization } from "../types";
import ScoreCircle from "./ScoreCircle";
import { useNavigate } from "react-router-dom";

const OrgScore: React.FC = () => {
    const organizations = mockData as Organization[];
    const navigate = useNavigate();

    return (
        <div style={{ maxWidth: 600, margin: "2rem auto", fontFamily: "Arial, sans-serif" }}>
            <h2 style={{ marginBottom: "1.5rem", color: "#0B3D2E" }}>Organizations & Scores</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {organizations.map((org) => (
                    <li
                        key={org.voen_id}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "2rem",
                            padding: "1rem 1.5rem",
                            marginBottom: "1rem",
                            background: "#F8FFF8",
                            borderRadius: "12px",
                            border: "1px solid #15724B", // darker border
                            boxShadow: "0 2px 8px rgba(26,127,90,0.08)",
                            cursor: "pointer",
                            transition: "background 0.2s",
                        }}
                        onClick={() => navigate(`/results/${org.voen_id}`)}
                        tabIndex={0}
                        onKeyDown={e => {
                            if (e.key === "Enter" || e.key === " ") {
                                navigate(`/results/${org.voen_id}`);
                            }
                        }}
                        aria-label={`View details for ${org.main_info.name}`}
                    >
                        <span style={{
                            fontWeight: 600,
                            fontSize: "1.1rem",
                            color: "#1A7F5A",
                            flex: "1 1 0",
                            minWidth: 0,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                        }}>
                            {org.main_info.name}
                        </span>
                        <div style={{ flexShrink: 0 }}>
                            <ScoreCircle score={org.score} size={56} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrgScore;