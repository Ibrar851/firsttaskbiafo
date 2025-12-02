import React from "react";
import { Card, Row, Col } from "react-bootstrap";

export default function VideosSection({ items }) {
  return (
    <section className="mb-4">
      <h5 className="mb-3" style={{ fontWeight: 700, fontSize: 18 }}>Videos</h5>
      <Row>
        {items.map((v) => (
          <Col md={4} sm={6} key={v.id} className="mb-3">
            <Card className="border-0 h-100">
              <div
                style={{
                  background: "#eee",
                  height: 160,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 28,
                  color: "#333",
                }}
              >
                ▶
              </div>
              <Card.Body>
                <Card.Title style={{ fontSize: 14, fontWeight: 600 }}>{v.title}</Card.Title>
                <div style={{ pointerEvents: "none", fontSize: 14, color: "#000" }}>Watch →</div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}
