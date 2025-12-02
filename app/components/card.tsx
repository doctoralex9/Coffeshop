import React from "react";

export const Card = ({ children }: { children: React.ReactNode }) => {
  const cardStyle = {
    padding: "clamp(0.75rem, 2.5vw, 2rem)", // scales between ~12px and 32px,
    margin: "0.625rem", // 10px
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.12)",
    border: "1px solid #ddd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "100%", // keeps card responsive
  };

  return <div style={cardStyle}>{children}</div>;
};