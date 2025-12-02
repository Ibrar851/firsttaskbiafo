import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Slider from "react-slick";
import Calendar from "react-calendar";

// --- Images ---
import Opinion1 from "../assets/Opinion/Opinion1.png";
import OpinionAC from "../assets/Opinion/OpinionAC.png";

import OpinionCard1 from "../assets/Opinion/opinionCard1.png";
import OpinionCard2 from "../assets/Opinion/opinionCard2.png";
import OpinionCard3 from "../assets/Opinion/opinionCard3.png";

import OpinionSlide1 from "../assets/Opinion/OpinionSlide1.png";
import OpinionSlide2 from "../assets/Opinion/OpinionSlide2.png";
import OpinionSlide3 from "../assets/Opinion/OpinionSlide3.png";

import OpinionAnalysis1 from "../assets/Opinion/OpinionAnalysis1.png";
import OpinionAnalysis2 from "../assets/Opinion/OpinionAnalysis2.png";
import OpinionAnalysis3 from "../assets/Opinion/OpinionAnalysis3.png";

import Cartoon1 from "../assets/Opinion/Cartoon1.png";
import Cartoon2 from "../assets/Opinion/Cartoon2.png";
import Cartoon3 from "../assets/Opinion/Cartoon3.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function OpinionPageStructure() {

  const [value, setValue] = useState(new Date());

    // ---------------- DATA ---------------- //
  const featured = {
    title: "Going back in time",
    text: "Nepra’s surprise tariff cut may ripple far beyond Karachi’s power grid as KE’s profits sink and investors threaten arbitration. — Nasir Jamal",
    image: Opinion1,
  };

  const analysis = {
    title: "A jolt that may trip K-Electric",
    text: "The current configuration of governance is not too different from what the British envisioned in the early 20th century. — Umair Javed",
    image: OpinionAC,
  };

  const cardsSection2 = [
    { id: 1, title: "Obstacles to Gaza plan", description: "It would be a mistake for Pakistan to send troops for the stabilisation force in Gaza. — Maleeha Lodhi", image: OpinionCard1 },
    { id: 2, title: "Empowered teachers", description: "Great schools are built by great teachers. — Neda Mulji", image: OpinionCard2 },
    { id: 3, title: "COP-out", description: "What is Islamabad to do when it comes to COP? — Huma Yusuf", image: OpinionCard3 }
  ];

  const editorialCards = [
    { id: 1, title: "Perils of overuse", description: "Theme for this year’s Antimicrobial Awareness Week is ‘Act now: protect our future’..." },
    { id: 2, title: "Harsher monsoon", description: "Alarm bells are ringing as NDMA warns about shifting monsoon behaviour..." },
    { id: 3, title: "Pending justice", description: "Pakistan’s prosecutors have the power to obstruct, but not enough to resolve..." }
  ];

  const sliderItems = [
    { id: 1, image: OpinionSlide1, title: "Allied Bank promotes warehouse facility", description: "Helping agricultural businesses by enabling financing against stored commodities." },
    { id: 2, image: OpinionSlide2, title: "How NDRMF is responding", description: "Pakistan is shifting from disaster relief to proactive climate resilience." },
    { id: 3, image: OpinionSlide3, title: "LemFi introduces new savings account for UK immigrant community", description: "The new savings product offers daily interest and FSCS protection as part of the company’s wider push to build a financial ecosystem for immigrants." },
  ];
  const lettersData = [
  { id: 1, title: "Public Transport Issues", description: "Karachi’s public transport system continues to disappoint citizens as buses remain overcrowded and mismanaged." },
  { id: 2, title: "Education Crisis", description: "The declining quality of education in public schools is alarming and requires urgent reforms from the authorities." },
  { id: 3, title: "Clean Water Shortage", description: "Access to clean drinking water is still a challenge for many households across Pakistan." },
  { id: 4, title: "Inflation Concerns", description: "With rising inflation, basic necessities are becoming unaffordable for the average Pakistani family." },
  { id: 5, title: "Traffic Violations", description: "Reckless driving and lack of traffic discipline continue to cause frequent accidents in major cities." },
  { id: 6, title: "Healthcare Gaps", description: "Patients suffer as hospitals face shortages of essential medicines and proper medical facilities." }
];

const fiftyYearsData = [
  
  {title: "Karachi’s civic issues worsen",description: "The metropolitan city faces severe water shortages and infrastructure failures..."},
  {title: "Talks begin on regional trade",description: "Delegates from neighbouring countries met to reopen stalled economic dialogues..."},
  {title: "Historic agreement signed",description: "Leaders from multiple nations came together to sign a landmark cooperation treaty..."}
];

const otherVoices = [
  
  {title: "Rising inflation concerns",description: "People across the country are facing soaring prices as essential commodities become harder to afford..."},
  {title: "Climate challenges ahead",description: "Environmental experts warn that immediate measures are needed to counter severe climate impact..."},
  {title: "Education reforms needed",description: "Educators stress the importance of modernising the curriculum to meet global standards..."}
];




  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div>

      {/* ---------------------------------------------------
          CONTAINER 1 — OPINION (HEADER + FEATURED ARTICLE)
      ----------------------------------------------------- */}
      <Container className="my-4">
        <div className="my-3 ">
          <h3 className="fw-bold" style={{ fontSize: "35px" }}>Opinion</h3>
          <div style={{ height: "0.5px", backgroundColor: "#000" }}></div>
        </div>

        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="fw-bold">{featured.title}</h2>
            <p>{featured.text}</p>
          </Col>
          <Col md={6}>
            <img src={featured.image} className="img-fluid"
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
              alt="featured" />
          </Col>
        </Row>
      </Container>

      {/* ---------------------------------------------------
          CONTAINER 2 — 3 OPINION CARDS
      ----------------------------------------------------- */}
      <Container className="my-4">
        <div style={{ height: "0.5px", backgroundColor: "#000" }}></div>
        <br />
        <Row className="g-4">
          {cardsSection2.map(card => (
            <Col md={4} key={card.id}>
              <Card className="h-100">
                <Card.Img variant="top" src={card.image} style={{ height: "200px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* ---------------------------------------------------
          CONTAINER 3 — EDITORIAL + SLIDER
      ----------------------------------------------------- */}
      <Container className="my-5">

        <div className="my-3 ">
          <div style={{ height: "0.5px", backgroundColor: "#000" }}></div>
          <h3 className="fw-bold" style={{ fontSize: "35px" }}>Editorial</h3>
          <div style={{ height: "0.5px", backgroundColor: "#000" }}></div>
        </div>

        <Row className="g-4">
          {editorialCards.map(card => (
            <Col md={4} key={card.id}>
              <Card className="h-100">
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
            {sliderItems.map(item => (
              <div key={item.id}>
                <Row className="align-items-center">
                  <Col md={6}>
                    <img src={item.image} className="img-fluid"
                      style={{ width: "100%", height: "300px", objectFit: "cover" }} alt="" />
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

      {/* ---------------------------------------------------
          CONTAINER 4 — ANALYSIS & COMMENT
      ----------------------------------------------------- */}
      <Container className="my-5">

        <div className="my-3 ">
          <div style={{ height: "0.5px", backgroundColor: "#000" }}></div>
          <h3 className="fw-bold" style={{ fontSize: "35px" }}>Analysis & Comment</h3>
          <div style={{ height: "0.5px", backgroundColor: "#000" }}></div>
        </div>

        {/* Featured Analysis */}
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="fw-bold">{analysis.title}</h2>
            <p>{analysis.text}</p>
          </Col>
          <Col md={6}>
            <img src={analysis.image} className="img-fluid"
              style={{ width: "100%", height: "400px", objectFit: "cover" }} alt="" />
          </Col>
        </Row>

        <br />
        <div style={{ height: "0.5px", backgroundColor: "#000" }}></div>
        <br />

        {/* 3 Analysis Cards */}
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100">
              <Card.Img variant="top" src={OpinionAnalysis1}
                style={{ height: "200px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title>Taliban seek quid pro quo from US</Card.Title>
                <Card.Text>Unlike previous occasions, Kabul now seeks concessions before compliance.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100">
              <Card.Img variant="top" src={OpinionAnalysis2}
                style={{ height: "200px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title>Sindh & Punjab at odds</Card.Title>
                <Card.Text>Data discrepancies spark disagreements over water flow management.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100">
              <Card.Img variant="top" src={OpinionAnalysis3}
                style={{ height: "200px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title>Why breaching is not an option</Card.Title>
                <Card.Text>Sindh's topography makes Punjab’s strategy impossible downstream.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

   {/*---------------------------------------------------
    CONTAINER — CARTOON SECTION (WITH VERTICAL LINES)
----------------------------------------------------*/}
<Container className="my-5">

  {/* Cartoon Header */}
  <div className="my-3 ">
    <div style={{ height: "0.5px", backgroundColor: "#000" }}></div>
    <h3 className="fw-bold" style={{ fontSize: "35px" }}>Cartoon</h3>
    <div style={{ height: "0.5px", backgroundColor: "#000" }}></div>
  </div>

  {/* 3 Cartoon Images With Divider Lines */}
  <Row className="g-4">

    {[Cartoon1, Cartoon2, Cartoon3].map((img, index) => (
      <Col md={4} sm={6} xs={12} key={index} className="position-relative">

        {/* Vertical Divider (except last column) */}
        {index !== 2 && (
          <div 
            className="d-none d-md-block"
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              width: "1px",
              height: "100%",
              backgroundColor: "#cfcfcf"
            }}
          />
        )}

        <img 
          src={img}
          alt={`Cartoon ${index + 1}`} 
          className="img-fluid w-100"
          style={{ 
            height: "350px", 
            objectFit: "contain",
            backgroundColor: "#f9f9f9", 
            padding: "10px"
          }}
        />
      </Col>
    ))}

  </Row>
</Container>

{/* Letters Section */}
<Container className="my-5">

  {/* Header */}
  <div className="my-3">
    <div style={{ height: "0.7px", backgroundColor: "#000", marginBottom: "8px" }}></div>
    <h2 className="fw-bold" style={{ fontSize: "35px" }}>Letters</h2>
    <div style={{ height: "0.7px", backgroundColor: "#000", marginTop: "8px" }}></div>
  </div>

  {/* 6 Letters in One Row */}
  <Row className="text-start">

    {lettersData.map((item, index) => (
      <Col md={2} key={index} className="px-4 position-relative">

        {/* Vertical Divider Except Last */}
        {index !== lettersData.length - 1 && (
          <div 
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "1px",
              height: "100%",
              backgroundColor: "#d0d0d0"
            }}
          ></div>
        )}

        <h5 className="fw-bold">{item.title}</h5>
        <p style={{ fontSize: "15px", lineHeight: "1.4" }}>
          {item.description}
        </p>
      </Col>
    ))}
  </Row>
</Container>

{/* 50 Years Ago Section */}
<Container className="my-5">

  {/* Header */}
  <div className="my-3">
    <div style={{ height: "0.7px", backgroundColor: "#000", marginBottom: "8px" }}></div>
    <h2 className="fw-bold" style={{ fontSize: "35px" }}>50 Years Ago</h2>
    <div style={{ height: "0.7px", backgroundColor: "#000", marginTop: "8px" }}></div>
  </div>

  {/* 3 Cards Row */}
  <Row className="text-start">

    {fiftyYearsData.map((item, index) => (
      <Col md={4} key={index} className="px-4 position-relative">

        {/* Vertical line except last column */}
        {index !== fiftyYearsData.length - 1 && (
          <div 
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "1px",
              height: "100%",
              backgroundColor: "#d0d0d0"
            }}
          />
        )}

        <h4 className="fw-bold">{item.title}</h4>
        <p style={{ fontSize: "16px", lineHeight: "1.5" }}>
          {item.description}
        </p>

      </Col>
    ))}
  </Row>
</Container>

{/* Other Voices Section */}
<Container className="my-5">

  {/* Header */}
  <div className="my-3">
    <div style={{ height: "0.7px", backgroundColor: "#000", marginBottom: "8px" }}></div>
    <h2 className="fw-bold" style={{ fontSize: "35px" }}>Other Voices</h2>
    <div style={{ height: "0.7px", backgroundColor: "#000", marginTop: "8px" }}></div>
  </div>

  {/* 3 Cards Row */}
  <Row className="text-start">

    {otherVoices.map((item, index) => (
      <Col md={4} key={index} className="px-4 position-relative">

        {/* Vertical line except last column */}
        {index !== otherVoices.length - 1 && (
          <div 
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "1px",
              height: "100%",
              backgroundColor: "#d0d0d0"
            }}
          />
        )}

        <h4 className="fw-bold">{item.title}</h4>
        <p style={{ fontSize: "16px", lineHeight: "1.5" }}>
          {item.description}
        </p>

      </Col>
    ))}

  </Row>
  

</Container>
{/* ---------------------------------------------------
    CONTAINER — CALENDAR SECTION
----------------------------------------------------*/}
<Container className="my-5">

  <div className="d-flex justify-content-center">
    <Calendar 
      onChange={(value) => console.log(value)} // agar aapko date select karna ho
      value={new Date()} 
      className="shadow-sm p-3 bg-white"
    />
  </div>
</Container>
    </div>
  );
}
