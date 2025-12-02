import React from "react";
import { Row, Col, Card } from "react-bootstrap";

export default function SectionGrid({ title, items }) {
  return (
    <section className="mb-4">
      <h5 className="mb-3" style={{ fontWeight: 700, fontSize: 18 }}>{title}</h5>
      <Row>
        {items.map((it) => (
          <Col md={4} sm={6} key={it.id} className="mb-3">
            <Card className="h-100 border-0">
              <Card.Img
                variant="top"
                src={it.image}
                style={{ height: 140, objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title style={{ fontSize: 15, fontWeight: 700 }}>{it.title}</Card.Title>
                <Card.Text style={{ fontSize: 13, color: "#555" }}>{it.description}</Card.Text>
                <div style={{ pointerEvents: "none", color: "#000", fontSize: 14 }}>Read →</div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}
