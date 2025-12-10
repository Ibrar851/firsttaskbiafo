// src/components/MostRead.jsx
import React from "react";
import { ListGroup, Row, Col, Image } from "react-bootstrap";

// ----- IMPORT MOST READ IMAGES -----
import r1 from "../assets/Mostread/readstory1.webp";
import r2 from "../assets/Mostread/readstory2.webp";
import r3 from "../assets/Mostread/readstory3.webp";
import r4 from "../assets/Mostread/readstory4.webp";
import r5 from "../assets/Mostread/readstory5.webp";
import r6 from "../assets/Mostread/readstory6.webp";
import r7 from "../assets/Mostread/readstory7.webp";
import r8 from "../assets/Mostread/readstory8.webp";
import r9 from "../assets/Mostread/readstory9.webp";
import r10 from "../assets/Mostread/readstory10.webp";
import r11 from "../assets/Mostread/readstory11.webp";
import r12 from "../assets/Mostread/readstory12.webp";
import r13 from "../assets/Mostread/readstory13.webp";
import r14 from "../assets/Mostread/readstory14.webp";
import r15 from "../assets/Mostread/readstory15.webp";
import r16 from "../assets/Mostread/readstory16.webp";
import r17 from "../assets/Mostread/readstory17.webp";
import r18 from "../assets/Mostread/readstory18.webp";

const IMAGES = [
  r1, r2, r3, r4, r5, r6, r7, r8,
  r9, r10, r11, r12, r13, r14, r15, r16, r17, r18
];

export default function MostRead({ items }) {
  return (
    <div style={{fontFamily: "Times New Roman" }}>
      <h5 className="mb-3" style={{ fontWeight: 700, fontSize: 18, fontFamily: "Times New Roman", }}>
        Most Read
      </h5>

      <ListGroup variant="flush">
        {items.map((it, idx) => (
          <ListGroup.Item
            key={it.id || idx}
            className="px-0 border-0"
            style={{ padding: "6px 0" }}
          >
            <Row className="align-items-center g-2">
              <Col xs={3} sm={2}>
                <Image
                  src={IMAGES[idx]}
                  alt={`Most read ${idx + 1}`}
                  fluid
                  rounded
                  style={{ height: 40, width: 40, objectFit: "cover" }}
                />
              </Col>

              <Col xs={9} sm={10}>
                <span style={{ fontWeight: 700, marginRight: 6, fontFamily: "Times New Roman", }}>
                  {idx + 1}.
                </span>
                <span style={{ color: "#000", pointerEvents: "none", fontFamily: "Times New Roman", }}>
                  {it.title}
                </span>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
