import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Slider from "react-slick";
import Calendar from "react-calendar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-calendar/dist/Calendar.css";

// ---------- Images ----------
import Opinion1 from "../assets/opinion/opinion1.png";
import OpinionAC from "../assets/opinion/opinionac.png";
import OpinionCard1 from "../assets/opinion/opinioncard1.png";
import OpinionCard2 from "../assets/opinion/opinioncard2.png";
import OpinionCard3 from "../assets/opinion/opinioncard3.png";
import OpinionSlide1 from "../assets/opinion/opinionslide1.png";
import OpinionSlide2 from "../assets/opinion/opinionslide2.png";
import OpinionSlide3 from "../assets/opinion/opinionslide3.png";
import OpinionAnalysis1 from "../assets/opinion/opinionanalysis1.png";
import OpinionAnalysis2 from "../assets/opinion/opinionanalysis2.png";
import OpinionAnalysis3 from "../assets/opinion/opinionanalysis3.png";
import Cartoon1 from "../assets/opinion/cartoon1.png";
import Cartoon2 from "../assets/opinion/cartoon2.png";
import Cartoon3 from "../assets/opinion/cartoon3.png";

// ---------- Reusable Data ----------
const cardsSection2 = [
  {
    id: 1,
    title: "Obstacles to Gaza plan",
    description:
      "It would be a mistake for Pakistan to send troops for the stabilisation force in Gaza. — Maleeha Lodhi",
    image: OpinionCard1,
  },
  {
    id: 2,
    title: "Empowered teachers",
    description: "Great schools are built by great teachers. — Neda Mulji",
    image: OpinionCard2,
  },
  {
    id: 3,
    title: "COP-out",
    description: "What is Islamabad to do when it comes to COP? — Huma Yusuf",
    image: OpinionCard3,
  },
];

const editorialCards = [
  {
    id: 1,
    title: "Perils of overuse",
    description:
      "Theme for this year’s Antimicrobial Awareness Week is ‘Act now: protect our future’...",
  },
  {
    id: 2,
    title: "Harsher monsoon",
    description:
      "Alarm bells are ringing as NDMA warns about shifting monsoon behaviour...",
  },
  {
    id: 3,
    title: "Pending justice",
    description:
      "Pakistan’s prosecutors have the power to obstruct, but not enough to resolve...",
  },
];

const sliderItems = [
  {
    id: 1,
    image: OpinionSlide1,
    title: "Allied Bank promotes warehouse facility",
    description:
      "Helping agricultural businesses by enabling financing against stored commodities.",
  },
  {
    id: 2,
    image: OpinionSlide2,
    title: "How NDRMF is responding",
    description:
      "Pakistan is shifting from disaster relief to proactive climate resilience.",
  },
  {
    id: 3,
    image: OpinionSlide3,
    title: "LemFi introduces new savings account",
    description:
      "The new savings product offers daily interest and FSCS protection for UK immigrants.",
  },
];

const lettersData = [
  {
    id: 1,
    title: "Public Transport Issues",
    description:
      "Karachi’s public transport system continues to disappoint citizens as buses remain overcrowded and mismanaged.",
  },
  {
    id: 2,
    title: "Education Crisis",
    description:
      "The declining quality of education in public schools is alarming and requires urgent reforms.",
  },
  {
    id: 3,
    title: "Clean Water Shortage",
    description:
      "Access to clean drinking water is still a challenge for many households.",
  },
  {
    id: 4,
    title: "Inflation Concerns",
    description:
      "With rising inflation, basic necessities are becoming unaffordable.",
  },
  {
    id: 5,
    title: "Traffic Violations",
    description:
      "Reckless driving and lack of traffic discipline cause frequent accidents.",
  },
  {
    id: 6,
    title: "Healthcare Gaps",
    description:
      "Patients suffer as hospitals face shortages of essential medicines and proper facilities.",
  },
];

const fiftyYearsData = [
  {
    title: "Karachi’s civic issues worsen",
    description:
      "The metropolitan city faces severe water shortages and infrastructure failures...",
  },
  {
    title: "Talks begin on regional trade",
    description:
      "Delegates from neighbouring countries met to reopen stalled economic dialogues...",
  },
  {
    title: "Historic agreement signed",
    description:
      "Leaders from multiple nations came together to sign a landmark cooperation treaty...",
  },
];

const otherVoices = [
  {
    title: "Rising inflation concerns",
    description:
      "People across the country are facing soaring prices as essential commodities become harder to afford...",
  },
  {
    title: "Climate challenges ahead",
    description:
      "Environmental experts warn that immediate measures are needed to counter severe climate impact...",
  },
  {
    title: "Education reforms needed",
    description:
      "Educators stress the importance of modernising the curriculum to meet global standards...",
  },
];

// ---------- Slider Settings ----------
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

// ---------- Main Component ----------
export default function OpinionPageStructure() {
  const [value, setValue] = useState(new Date());

  return (
    <div style={{fontFamily: "Times New Roman" }}>
      {/* FEATURED OPINION */}
      <Container className="my-5">
        <h3 className="fw-bold mb-3" style={{ fontSize: "35px" }}>
          Opinion
        </h3>
        <div
          style={{
            height: "2px",
            backgroundColor: "#000",
            marginBottom: "30px",
          }}
        ></div>
        <Row className="align-items-center flex-column flex-md-row">
          <Col md={6}>
            <h2 className="fw-bold">Going back in time</h2>
            <p>
              Nepra’s surprise tariff cut may ripple far beyond Karachi’s power
              grid as KE’s profits sink and investors threaten arbitration. —
              Nasir Jamal
            </p>
          </Col>
          <Col md={6}>
            <img
              src={Opinion1}
              alt="featured"
              className="img-fluid rounded"
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>

      {/* 3 OPINION CARDS */}
      <Container className="my-5">
        <Row className="g-4">
          {cardsSection2.map((card) => (
            <Col md={4} key={card.id}>
              <Card className="h-100 shadow-sm hover-card">
                <Card.Img
                  variant="top"
                  src={card.image}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* EDITORIAL + SLIDER */}
      <Container className="my-5">
        <h3 className="fw-bold mb-3" style={{ fontSize: "35px" }}>
          Editorial
        </h3>
        <div
          style={{
            height: "2px",
            backgroundColor: "#000",
            marginBottom: "30px",
          }}
        ></div>

        <Row className="g-4">
          {editorialCards.map((card) => (
            <Col md={4} key={card.id}>
              <Card className="h-100 shadow-sm hover-card">
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="mt-4 p-3" style={{ backgroundColor: "#f5e5e5" }}>
          <Slider {...sliderSettings}>
            {sliderItems.map((item) => (
              <div key={item.id}>
                <Row className="align-items-center flex-column flex-md-row">
                  <Col md={6}>
                    <img
                      src={item.image}
                      alt=""
                      className="img-fluid rounded"
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </Col>
                  <Col md={6}>
                    <h4 className="fw-bold">{item.title}</h4>
                    <p>{item.description}</p>
                  </Col>
                </Row>
              </div>
            ))}
          </Slider>
        </div>
      </Container>

      {/* ANALYSIS & COMMENT */}
      <Container className="my-5">
        <h3 className="fw-bold mb-3" style={{ fontSize: "35px" }}>
          Analysis & Comment
        </h3>
        <div
          style={{
            height: "2px",
            backgroundColor: "#000",
            marginBottom: "30px",
          }}
        ></div>
        <Row className="align-items-center flex-column flex-md-row mb-4">
          <Col md={6}>
            <h2 className="fw-bold">A jolt that may trip K-Electric</h2>
            <p>
              The current configuration of governance is not too different from
              what the British envisioned in the early 20th century. — Umair
              Javed
            </p>
          </Col>
          <Col md={6}>
            <img
              src={OpinionAC}
              alt=""
              className="img-fluid rounded"
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
          </Col>
        </Row>

        <Row className="g-4">
          {[OpinionAnalysis1, OpinionAnalysis2, OpinionAnalysis3].map(
            (img, i) => (
              <Col md={4} key={i}>
                <Card className="h-100 shadow-sm hover-card">
                  <Card.Img
                    variant="top"
                    src={img}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title>Analysis Title {i + 1}</Card.Title>
                    <Card.Text>Analysis description goes here...</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )
          )}
        </Row>
      </Container>

      {/* CARTOON SECTION */}
      <Container className="my-5">
        <h3 className="fw-bold mb-3" style={{ fontSize: "35px" }}>
          Cartoon
        </h3>
        <div
          style={{
            height: "2px",
            backgroundColor: "#000",
            marginBottom: "30px",
          }}
        ></div>
        <Row className="g-4">
          {[Cartoon1, Cartoon2, Cartoon3].map((img, index) => (
            <Col
              md={4}
              sm={6}
              xs={12}
              key={index}
              className="position-relative"
            >
              {index !== 2 && <div className="divider-vertical"></div>}
              <img
                src={img}
                alt={`Cartoon ${index + 1}`}
                className="img-fluid w-100 rounded"
                style={{
                  height: "350px",
                  objectFit: "contain",
                  backgroundColor: "#f9f9f9",
                  padding: "10px",
                }}
              />
            </Col>
          ))}
        </Row>
      </Container>

      {/* LETTERS */}
      <Container className="my-5">
        <h2 className="fw-bold mb-3" style={{ fontSize: "35px" }}>
          Letters
        </h2>
        <div
          style={{
            height: "2px",
            backgroundColor: "#000",
            marginBottom: "30px",
          }}
        ></div>
        <Row className="text-start">
          {lettersData.map((item, index) => (
            <Col md={2} key={index} className="px-3 position-relative">
              {index !== lettersData.length - 1 && (
                <div className="divider-vertical"></div>
              )}
              <h5 className="fw-bold">{item.title}</h5>
              <p style={{ fontSize: "15px", lineHeight: 1.4 }}>
                {item.description}
              </p>
            </Col>
          ))}
        </Row>
      </Container>

      {/* 50 YEARS AGO */}
      <Container className="my-5">
        <h2 className="fw-bold mb-3" style={{ fontSize: "35px" }}>
          50 Years Ago
        </h2>
        <div
          style={{
            height: "2px",
            backgroundColor: "#000",
            marginBottom: "30px",
          }}
        ></div>
        <Row className="text-start">
          {fiftyYearsData.map((item, index) => (
            <Col md={4} key={index} className="px-3 position-relative">
              {index !== fiftyYearsData.length - 1 && (
                <div className="divider-vertical"></div>
              )}
              <h4 className="fw-bold">{item.title}</h4>
              <p style={{ fontSize: "16px", lineHeight: 1.5 }}>
                {item.description}
              </p>
            </Col>
          ))}
        </Row>
      </Container>

      {/* OTHER VOICES */}
      <Container className="my-5">
        <h2 className="fw-bold mb-3" style={{ fontSize: "35px" }}>
          Other Voices
        </h2>
        <div
          style={{
            height: "2px",
            backgroundColor: "#000",
            marginBottom: "30px",
          }}
        ></div>
        <Row className="text-start">
          {otherVoices.map((item, index) => (
            <Col md={4} key={index} className="px-3 position-relative">
              {index !== otherVoices.length - 1 && (
                <div className="divider-vertical"></div>
              )}
              <h4 className="fw-bold">{item.title}</h4>
              <p style={{ fontSize: "16px", lineHeight: 1.5 }}>
                {item.description}
              </p>
            </Col>
          ))}
        </Row>
      </Container>

      {/* CALENDAR */}
      <Container className="my-5 d-flex justify-content-center">
        <Calendar
          value={value}
          onChange={setValue}
          className="shadow-sm p-3 bg-white"
        />
      </Container>

      {/* ---------- CSS Inline ---------- */}
      <style jsx>{`
        .divider-vertical {
          position: absolute;
          top: 0;
          right: 0;
          width: 1px;
          height: 100%;
          background-color: #d0d0d0;
        }
        .hover-card:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
}
