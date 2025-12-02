// src/components/HeadlineBlock.jsx
import React from "react";
import { Row, Col } from "react-bootstrap";

export default function HeadlineBlock({ title, image, description, time }) {
  return (
    <div className="border-bottom pb-3 mb-3">
      {/* Title on Top */}
      <h4 className="fw-bold mb-3" style={{ lineHeight: "1.3" }}>
        {title}
      </h4>

      {/* Image Left — Text Right */}
      <Row className="g-3">
        <Col xs={4} md={3}>
          <img
            src={image}
            alt={title}
            className="rounded"
            style={{
              width: "100%",
              height: "100px",
              objectFit: "cover",
            }}
          />
        </Col>

        <Col xs={8} md={9}>
          <p className="mb-1" style={{ fontSize: "15px" }}>
            {description}
          </p>

          <small className="text-muted">{time}</small>
        </Col>
      </Row>
    </div>
  );
}
