import React from "react";
import { Row, Col } from "react-bootstrap";

export default function NewsListItem({ article }) {
  return (
    <Row className="mb-3 g-0 align-items-center" style={{fontFamily: "Times New Roman" }}>
      {/* Image Left */}
      <Col xs={4}>
        <img
          src={article.image}
          alt={article.title}
          onError={(e) => (e.target.src = "/fallback.webp")}
          className="img-fluid"
          style={{
            height: 80,
            width: "100%",
            objectFit: "cover",
            borderRadius: 4,
          }}
        />
      </Col>

      {/* Text Right */}
      <Col xs={8} style={{ paddingLeft: 12 }}>
        <div style={{ pointerEvents: "none" }}>
          <h6
            className="mb-1"
            style={{
              fontWeight: 700,
              fontSize: 14,
              fontFamily: "Times New Roman",
            }}
          >
            {article.title}
          </h6>
        </div>

        <p
          className="mb-0 text-muted"
          style={{ fontSize: 13, fontFamily: "Times New Roman", }}
        >
          {article.description}
        </p>
      </Col>
    </Row>
  );
}
