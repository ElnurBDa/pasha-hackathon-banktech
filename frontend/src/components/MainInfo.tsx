import React from "react";
import { MainInfo as MainInfoType } from "../types";
import { JSX } from "react/jsx-runtime";

const iconsMap: Record<string, JSX.Element> = {
  name: (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="22" height="22" fill="#1A7F5A" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  ),
  address: (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="22" height="22" fill="#1A7F5A" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.71-2.71 6.84-5 9.88C9.65 15.84 7 11.71 7 9z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
  phone: (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="22" height="22" fill="#1A7F5A" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.62 10.79a15.09 15.09 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.2.48 2.5.74 3.85.74a1 1 0 011 1v3.5a1 1 0 01-1 1C9.37 21.5 2.5 14.63 2.5 6a1 1 0 011-1H7a1 1 0 011 1c0 1.35.26 2.65.74 3.85a1 1 0 01-.21 1.11z" />
    </svg>
  ),
  email: (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="22" height="22" fill="#1A7F5A" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5z" />
    </svg>
  ),
  registration_date: (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="22" height="22" fill="#1A7F5A" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 10h5v5H7z" opacity=".3" />
      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v16a2 2 0 002 2h14a2 2 0 002-2V5c0-1.1-.9-2-2-2zM5 21V8h14v13H5z" />
    </svg>
  ),
  voen_id: (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="22" height="22" fill="#1A7F5A" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#1A7F5A" fontFamily="Arial">ID</text>
    </svg>
  ),
  owner: (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="22" height="22" fill="#1A7F5A" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
      <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  ),
};

interface MainInfoProps {
  mainInfo: MainInfoType;
  voenId?: string;
  owner?: string;
}

const MainInfo: React.FC<MainInfoProps> = ({ mainInfo, voenId, owner }) => {
  const entries = [
    ...(voenId ? [["voen_id", voenId]] : []),
    ...(owner ? [["owner", owner]] : []),
    ...Object.entries(mainInfo),
  ];

  const formatKey = (key: string) =>
    key
      .replace(/_/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <section
      aria-label="Organization main information"
      lang="en"
      style={{
        background: "linear-gradient(135deg, #F8FFF8 0%, #E6F4EA 100%)",
        padding: "2rem 1.5rem",
        borderRadius: "22px",
        boxShadow: "0 8px 32px rgba(26,127,90,0.10), 0 1.5px 4px rgba(0,0,0,0.04)",
        marginTop: "2rem",
        fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#1A7F5A",
        maxWidth: "900px",
        marginLeft: "auto",
        marginRight: "auto",
        border: "1.5px solid #E0F2E9",
      }}
    >
      <h2
        style={{
          marginBottom: "1.5rem",
          fontWeight: 800,
          fontSize: "2rem",
          letterSpacing: "0.01em",
          borderBottom: "2.5px solid #1A7F5A",
          paddingBottom: "0.4rem",
          textAlign: "center",
          background: "linear-gradient(90deg, #1A7F5A 40%, #D4AF37 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Organization Info
      </h2>

      <dl
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
          gap: "1.5rem 2rem",
        }}
      >
        {entries.map(([key, value]) => (
          <div
            key={key}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "0.8rem 1rem",
              borderRadius: "16px",
              background: "rgba(255,255,255,0.85)",
              boxShadow: "0 2px 12px rgba(26,127,90,0.07)",
              border: "1.5px solid #E0F2E9",
              transition: "box-shadow 0.3s, border-color 0.3s, background 0.3s",
              cursor: "default",
              minHeight: "54px",
              position: "relative",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = "0 4px 24px rgba(26,127,90,0.16)";
              e.currentTarget.style.borderColor = "#B6E2CF";
              e.currentTarget.style.background = "#F3FBF6";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = "0 2px 12px rgba(26,127,90,0.07)";
              e.currentTarget.style.borderColor = "#E0F2E9";
              e.currentTarget.style.background = "rgba(255,255,255,0.85)";
            }}
          >
            <dt
              style={{
                flexShrink: 0,
                color: "#1A7F5A",
                fontWeight: 700,
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                userSelect: "none",
                minWidth: "90px",
                letterSpacing: "0.01em",
                lineHeight: 1.2,
                fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              }}
            >
              {iconsMap[key.toLowerCase()] ?? (
                <span
                  style={{
                    display: "inline-block",
                    width: "22px",
                    height: "22px",
                  }}
                />
              )}
              <span style={{ whiteSpace: "nowrap" }}>{formatKey(key)}</span>
            </dt>
            <dd
              style={{
                margin: 0,
                fontWeight: 500,
                fontSize: "1rem",
                color: "#2A4A3F",
                wordBreak: "break-word",
                flexGrow: 1,
                lineHeight: 1.4,
                paddingLeft: "0.15rem",
                display: "flex",
                alignItems: "center",
                fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              }}
            >
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default MainInfo;
