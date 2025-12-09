// src/components/FeaturedHero.jsx
import React from "react";
import { Card } from "react-bootstrap";

export default function FeaturedHero({ article }) {
  if (!article) return null;

  return (
    <div style={{fontFamily: "Times New Roman" }}>
    <Card className="mb-4 border-0">
      <div style={{ position: "relative" }}>
        <Card.Img
          src={article.image}
          alt={article.title}
          style={{
            width: "100%",
            height: "420px",
            objectFit: "cover",
            maxHeight: "calc(100vh - 150px)",
          }}
        />

        {/* Overlay for text */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            padding: "24px",
            background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
            color: "white",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              marginBottom: "10px",
              fontFamily: "Times New Roman",
              lineHeight: 1.2,
            }}
          >
            {article.title}
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.4,
              opacity: 0.9,
              marginBottom: "12px",
              fontFamily: "Georgia, serif",
            }}
          >
            {article.description}
          </p>

          <div
            style={{
              display: "inline-block",
              padding: "6px 14px",
              backgroundColor: "rgba(255,255,255,0.9)",
              color: "#000",
              fontWeight: 600,
              fontSize: 14,
              borderRadius: 2,
              pointerEvents: "none", // disables link
              fontFamily: "Times New Roman",
            }}
          >
            Read on Dawn.com →
          </div>
        </div>
      </div>
    </Card>
    </div>
  );
}
