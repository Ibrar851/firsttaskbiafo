// src/components/LatestPage.jsx
import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import MostRead from "./MostRead";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// ----- IMPORT HEADLINES & MOST READ -----
import h1 from "../assets/Newsheadline/headline1.webp";
import h2 from "../assets/Newsheadline/headline2.webp";
import h3 from "../assets/Newsheadline/headline3.webp";
import h4 from "../assets/Newsheadline/headline4.webp";
import h5 from "../assets/Newsheadline/headline5.webp";
import h6 from "../assets/Newsheadline/headline6.webp";
import h7 from "../assets/Newsheadline/headline7.webp";
import h8 from "../assets/Newsheadline/headline8.webp";
import h9 from "../assets/Newsheadline/headline9.webp";
import h10 from "../assets/Newsheadline/headline10.webp";
import h11 from "../assets/Newsheadline/headline11.webp";
import h12 from "../assets/Newsheadline/headline12.webp";

import r1 from "../assets/MostRead/readstory1.webp";
import r2 from "../assets/MostRead/readstory2.webp";
import r3 from "../assets/MostRead/readstory3.webp";
import r4 from "../assets/MostRead/readstory4.webp";
import r5 from "../assets/MostRead/readstory5.webp";
import r6 from "../assets/MostRead/readstory6.webp";
import r7 from "../assets/MostRead/readstory7.webp";
import r8 from "../assets/MostRead/readstory8.webp";

const SAMPLE = {
  articles: [
    {
      id: 1,
      title: "Trump designates Saudi Arabia as ‘major, non-Nato ally’",
      description: "“I’m just telling you now for the first time…”",
      image: h1,
    },
    {
      id: 2,
      title: "National Assembly committee reprimands PTA over slow internet",
      description: "Telecom sector regulator ordered…",
      image: h2,
    },
    {
      id: 3,
      title: "PTI says Imran Khan’s sisters manhandled…",
      description: "Imran’s sisters say…",
      image: h3,
    },
    {
      id: 4,
      title: "Pakistan enters bunkering market…",
      description: "Refuelling facility established…",
      image: h4,
    },
    {
      id: 5,
      title: "Govt says rooftop solar ‘not hurting’ grid",
      description: "Net metering jumped…",
      image: h5,
    },
    {
      id: 6,
      title: "Pakistan enters bunkering market…",
      description: "Refuelling facility established…",
      image: h6,
    },
    {
      id: 7,
      title: "Rejection of contempt plea…",
      description: "Petition sought enforcement…",
      image: h7,
    },
    {
      id: 8,
      title: "Punjab prosecutor general seeks mechanism…",
      description: "Meets Russian FM…",
      image: h8,
    },
    {
      id: 9,
      title: "MILITANCY: THE NEW FACE OF AL QAEDA",
      description: "Al Qaeda hasn’t vanished…",
      image: h9,
    },
    {
      id: 10,
      title: "Trump designates Saudi Arabia…",
      description: "Sale of National Advanced…",
      image: h10,
    },
    {
      id: 11,
      title: "Europe looks to catch up with US in AI race",
      description: "Concerns about US…",
      image: h11,
    },
    {
      id: 12,
      title: "ENVIRONMENT: WHY CAN’T DELHI BREATHE?",
      description: "To hold the govt accountable…",
      image: h12,
    },
  ],
  mostRead: [
    {
      id: 1,
      title:
        "Football superstar Cristiano Ronaldo, billionaire Elon Musk among attendees of Trump’s dinner with Saudi prince",
      image: r1,
    },
    {
      id: 2,
      title:
        "Crime and punishment: Sheikh Hasina’s conviction comes as lesson for all authoritarian rulers",
      image: r2,
    },
    {
      id: 3,
      title:
        "Football superstar Cristiano Ronaldo, billionaire Elon Musk among attendees of Trump’s dinner with Saudi prince",
      image: r3,
    },
    {
      id: 4,
      title:
        "Why ignoring issue of governance in GB may squander Pakistan’s strategic and economic future",
      image: r4,
    },
    {
      id: 5,
      title:
        "Explainer: Why did a Cloudflare outage cause websites to go down?",
      image: r5,
    },
    {
      id: 6,
      title: "What are the pitfalls for UK’s asylum system overhaul",
      image: r6,
    },
    {
      id: 7,
      title:
        "Book Review: Arundhati Roy’s ‘Mother Mary Comes to Me’ confronts the complicated reality of motherhood",
      image: r7,
    },
    {
      id: 8,
      title:
        "2026 FIFA World Cup draw picture gets clearer after dramatic night of action",
      image: r8,
    },
  ],
};

export default function LatestPage() {
  const { articles, mostRead } = SAMPLE;
  const [value, setValue] = useState(new Date());

  return (
    <Container fluid className="mt-3" style={{ fontFamily: "Times New Roman", }}>
      <Container>
        <Row>
          {/* LEFT: HEADLINES */}
          <Col lg={8}>
            {articles.map((a) => (
              <Card key={a.id} className="mb-4 border-0 shadow-sm">
                <Row className="g-0 align-items-center">
                  <Col md={4}>
                    <img
                      src={a.image}
                      alt={a.title}
                      style={{
                        width: "100%",
                        height: 140,
                        objectFit: "cover",
                        borderRadius: 6,
                      }}
                    />
                  </Col>

                  <Col md={8}>
                    <Card.Body>
                      <h4
                        style={{
                          fontWeight: 700,
                          fontFamily: "Georgia, serif",
                        }}
                      >
                        {a.title}
                      </h4>
                      <p
                        className="text-muted"
                        style={{ fontSize: 15, fontFamily: "Times New Roman", }}
                      >
                        {a.description}
                      </p>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            ))}
          </Col>

          {/* RIGHT: CALENDAR TOP + MOST READ */}
          <Col lg={4} className="mt-4 mt-lg-0">
            {/* Calendar on Top */}
            <div
              style={{
                marginBottom: 30,
                padding: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                borderRadius: 6,
              }}
            >
              <Calendar onChange={setValue} value={value} />
            </div>

            {/* Most Read Section */}
            <MostRead items={mostRead} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
