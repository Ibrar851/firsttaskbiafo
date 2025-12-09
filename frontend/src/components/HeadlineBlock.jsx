// src/components/HeadlineBlock.jsx
import React from "react";
import { Row, Col } from "react-bootstrap";

export default function HeadlineBlock({ title, image, description, time }) {
  return (
    <div className="border-bottom pb-2 mb-3" style={{fontFamily: "Times New Roman" }}>
      {/* Title on Top */}
      <h4 className="fw-bold mb-2" style={{ lineHeight: "1.2", fontFamily: "Times New Roman", }}>
        {title}
      </h4>

      {/* Image Left — Text Right */}
      <Row className="g-2 align-items-center">
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
          <p className="mb-1" style={{ fontSize: "14px", lineHeight: "1.4", fontFamily: "Times New Roman", }}>
            {description}
          </p>
          <small className="text-muted">{time}</small>
        </Col>
      </Row>
    </div>
  );
}
