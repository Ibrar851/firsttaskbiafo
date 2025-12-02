import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Slider from "react-slick";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ===============================
// Headline Component
// ===============================
const DawnStyleHeadline = ({ title, img, description, time }) => (
  <div className="mb-4 pb-3" style={{ borderBottom: "1px solid #ddd" }}>
    <h3 className="mb-3" style={{ fontSize: "16px", fontWeight: "500" }}>
      {title}
    </h3>
    <div className="d-flex gap-3">
      <img
        src={img}
        alt={title}
        style={{ width: "180px", height: "120px", objectFit: "cover" }}
      />
      <div>
        <p className="mb-1" style={{ fontSize: "14px" }}>
          {description}
        </p>
        <small className="text-muted">{time}</small>
      </div>
    </div>
  </div>
);

// ===============================
// Images
// ===============================
import HeadlineImg from "../assets/world/headline.webp";
import Slide1 from "../assets/world/slide1.webp";
import Slide2 from "../assets/world/slide2.webp";
import Slide3 from "../assets/world/slide3.webp";
import Slide4 from "../assets/world/slide4.webp";
import Slide5 from "../assets/world/slide5.webp";
import Slide6 from "../assets/world/slide6.webp";

import HighlightImg1 from "../assets/world/highlight1.webp";
import HighlightImg2 from "../assets/world/highlight2.webp";
import HighlightImg3 from "../assets/world/highlight3.webp";
import HighlightImg4 from "../assets/world/highlight4.webp";
import HighlightImg5 from "../assets/world/highlight5.webp";
import HighlightImg6 from "../assets/world/highlight6.webp";

import SAImg1 from "../assets/world/southasia1.webp";
import SAImg2 from "../assets/world/southasia2.webp";
import SAImg3 from "../assets/world/southasia3.webp";
import SAImg4 from "../assets/world/southasia4.webp";
import SAImg5 from "../assets/world/southasia5.webp";
import SAImg6 from "../assets/world/southasia6.webp";

import ME1 from "../assets/world/middleeast1.webp";
import ME2 from "../assets/world/middleeast2.webp";
import ME3 from "../assets/world/middleeast3.webp";
import ME4 from "../assets/world/middleeast4.webp";

import col1_1 from "../assets/world/headline1.webp";
import col1_2 from "../assets/world/headline2.webp";
import col1_3 from "../assets/world/headline3.webp";
import col1_4 from "../assets/world/headline4.webp";
import col1_5 from "../assets/world/headline5.webp";
import col1_6 from "../assets/world/headline6.webp";
import col1_7 from "../assets/world/headline7.webp";
import col1_8 from "../assets/world/headline8.webp";
import col1_9 from "../assets/world/headline9.webp";

// Column 3 top stories (1–15)
import ReadStory1 from "../assets/world/readstory1.webp";
import ReadStory2 from "../assets/world/readstory2.webp";
import ReadStory3 from "../assets/world/readstory3.webp";
import ReadStory4 from "../assets/world/readstory4.webp";
import ReadStory5 from "../assets/world/readstory5.webp";
import ReadStory6 from "../assets/world/readstory6.webp";
import ReadStory7 from "../assets/world/readstory7.webp";
import ReadStory8 from "../assets/world/readstory8.webp";
import ReadStory9 from "../assets/world/readstory9.webp";
import ReadStory10 from "../assets/world/readstory10.webp";
import ReadStory11 from "../assets/world/readstory11.webp";
import ReadStory12 from "../assets/world/readstory12.webp";
import ReadStory13 from "../assets/world/readstory13.webp";
import ReadStory14 from "../assets/world/readstory14.webp";
import ReadStory15 from "../assets/world/readstory15.webp";

// Column 3 slider images
import Cl3Slide1 from "../assets/world/cl3slide1.webp";
import Cl3Slide2 from "../assets/world/cl3slide2.webp";
import Cl3Slide3 from "../assets/world/cl3slide3.webp";
import Cl3Slide4 from "../assets/world/cl3slide4.webp";
import Cl3Slide5 from "../assets/world/cl3slide5.webp";

// ===============================
// World Page Component
// ===============================
export default function WorldPage() {
  const [date, setDate] = useState(new Date());
  const [authorStories, setAuthorStories] = useState([]);

  // Column 3 top stories
  const column3Stories = [
    { id: 1, title: "FO denounces Indian defence minister’s ‘delusional, ", img: ReadStory1 },
    { id: 2, title: "Ali Tareen bows out as Multan Sultans owner after franchise ", img: ReadStory2 },
    { id: 3, title: "South Asian states weigh prospects as US, India mull trade deal", img: ReadStory3 },
    { id: 4, title: "Chicken rates fall significantly in Karachi amid border closure ", img: ReadStory4 },
    { id: 5, title: "Chicken rates fall significantly in Karachi amid border closure with Afghanistan", img: ReadStory5 },
    { id: 6, title: "3 FC men martyred in suicide attack on force’s headquarters in Peshawar", img: ReadStory6 },
    { id: 7, title: "Ash cloud from Ethiopian volcano eruption to have no significant impac", img: ReadStory7 },
    { id: 8, title: "Ash cloud from Ethiopian volcano eruption to have no significant impact on southern Pakistan, says PMD", img: ReadStory8 },
    { id: 9, title: "‘Justice has been served’, says Arshad Nadeem’s coach Salman Butt after PSB declares lifetime ban ‘illegal’", img: ReadStory9 },
    { id: 10, title: "Pakistan seeks to buy 100,000 tonnes of rice for supply to Bangladesh", img: ReadStory10 },
    { id: 11, title: "Pakistan carried out strikes in Afghanistan, claims Taliban spokesman", img: ReadStory11 },
    { id: 12, title: "Pakistan’s population crisis: Nation expanding faster than survival capacity", img: ReadStory12 },
    { id: 13, title: "The age of surveillance: George Orwell’s 1984, now streaming in Pakistan", img: ReadStory13 },
    { id: 14, title: "Weak state pillars", img: ReadStory14 },
    { id: 15, title: "IMF slams fiscal mismanagement", img: ReadStory15 },
  ];
// Column 3 slider images with titles
  const column3Slider = [
    { img: Cl3Slide1, title: "Flying coffins: It took courage for IAF Wing Commander Namansh " },
    { img: Cl3Slide2, title: "Flying coffins: It took courageThe age of surveillance: George Orwell’s 1984" },
    { img: Cl3Slide3, title: "Flying coffins: It took courage for IAF population crossroads: dividend or trap?" },
    { img: Cl3Slide4, title: "The age of surveillance: George Orwell’s 1984, now streaming in Pakistan" },
    { img: Cl3Slide5, title: "Implementation COP’ fails to live up to its name" },
  ];

  const slidesTop = [
    { id: 7, title: "The Voice of the Advertising Industry.", img: Slide4 },
    { id: 8, title: "Pakistan’s industry must prepare to deal with it", img: Slide5 },
    { id: 9, title: "The journey from the first to the last over the past 27 years", img: Slide6 },
  ];

  const slides = [
    { id: 1, title: "Rigid tariff regime undermines benefits of solar revolution", img: Slide1 },
    { id: 2, title: "Preserving essence of NFC", img: Slide2 },
    { id: 3, title: "Has ‘managing’ exchange rate backfired for Pakistan?", img: Slide3 },
  ];

  const highlights = [
    { id: 1, title: "Agriculture: Another year, another cane crisis", img: HighlightImg1 },
    { id: 2, title: "Empowering local bodies", img: HighlightImg2 },
    { id: 3, title: "Managing expectations", img: HighlightImg3 },
    { id: 4, title: "A complex investment puzzle", img: HighlightImg4 },
    { id: 5, title: "Why FDI bypasses Pakistan", img: HighlightImg5 },
    { id: 6, title: "Encouraging female entrepreneurs", img: HighlightImg6 },
  ];

  const southAsiaHighlights = [
    { id: 1, title: "India elections update", img: SAImg1 },
    { id: 2, title: "Nepal economic growth rises", img: SAImg2 },
    { id: 3, title: "Sri Lanka debt restructuring", img: SAImg3 },
    { id: 4, title: "Bangladesh exports boost", img: SAImg4 },
    { id: 5, title: "Afghanistan peace talks", img: SAImg5 },
    { id: 6, title: "Bhutan tourism recovers", img: SAImg6 },
  ];

  const middleEastHighlights = [
    { id: 1, title: "Israel–Gaza border tension rises", img: ME1 },
    { id: 2, title: "Saudi Arabia launches new reforms", img: ME2 },
    { id: 3, title: "UAE expands trade deals", img: ME3 },
    { id: 4, title: "Iran nuclear talks progress", img: ME4 },
  ];

  const column1Headlines = [
    { title: "IMF slams Pakistan’s fiscal mismanagement", img: col1_1, description: "Governance vulnerabilities reflect gaps between policy & practice.", time: "3 hours ago" },
    { title: "Rupee stabilises as SBP tightens market", img: col1_2, description: "Currency fluctuations ease.", time: "5 hours ago" },
    { title: "Mobile phone production plunges 34pc", img: col1_3, description: "Experts call for a simplified tax framework.", time: "2 hours ago" },
    { title: "Govt striving to cut power tariffs", img: col1_4, description: "New reforms expected.", time: "3 hours ago" },
    { title: "Equities drift lower in dull trade", img: col1_5, description: "Market shows weak momentum.", time: "3 hours ago" },
    { title: "Barrick committed to Reko Diq", img: col1_6, description: "Project sees new plans.", time: "3 hours ago" },
    { title: "Google & Accel partner to invest", img: col1_7, description: "Investment push in Asia.", time: "3 hours ago" },
    { title: "Shipping framework with Bangladesh", img: col1_8, description: "Improving logistics.", time: "3 hours ago" },
    { title: "PM ends export surcharge", img: col1_9, description: "Big relief for exporters.", time: "3 hours ago" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Container fluid className="p-5">
      <Row className="g-3">
        {/* Column 1 */}
        <Col md={5}>
          <Card className="border-0 mb-3">
            <h2 className="fw-bold">PM Shehbaz eliminates 0.25pc export surcharge</h2>
            <Card.Img src={HeadlineImg} style={{ height: "250px", objectFit: "cover" }} />
            <Card.Body className="p-0 mt-2">
              <p style={{ fontSize: "16px" }}>
                The premier has ordered the immediate abolition of the Export Development Surcharge.
              </p>
            </Card.Body>
          </Card>

          <div className="mt-4 p-3" style={{ backgroundColor: "#f5e5e5" }}>
            <Slider {...sliderSettings}>
              {slidesTop.map((item) => (
                <div key={item.id}>
                  <Row className="align-items-center">
                    <Col md={6}>
                      <img src={item.img} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
                    </Col>
                    <Col md={6}>
                      <h4 className="fw-bold">{item.title}</h4>
                    </Col>
                  </Row>
                </div>
              ))}
            </Slider>
          </div>

          <br />
          {column1Headlines.map((h, i) => (
            <DawnStyleHeadline key={i} {...h} />
          ))}
        </Col>

        {/* Column 2 */}
        <Col md={4}>
          <h5 className="fw-bold mb-3">Highlights</h5>
          <Slider {...sliderSettings}>
            {slides.map((slide) => (
              <Card key={slide.id} className="mb-4">
                <Card.Img src={slide.img} style={{ height: "200px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title className="fw-bold">{slide.title}</Card.Title>
                </Card.Body>
              </Card>
            ))}
          </Slider>

          <Row className="mt-3 g-2">
            {highlights.map((h) => (
              <Col md={6} key={h.id}>
                <Card className="mb-2">
                  <Card.Img src={h.img} style={{ height: "120px", objectFit: "cover" }} />
                  <Card.Body className="p-2">
                    <Card.Title style={{ fontSize: "14px" }}>{h.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <h5 className="fw-bold mt-4 mb-3">South Asia</h5>
          <Row className="g-2">
            {southAsiaHighlights.map((h) => (
              <Col md={6} key={h.id}>
                <Card className="mb-2">
                  <Card.Img src={h.img} style={{ height: "120px", objectFit: "cover" }} />
                  <Card.Body className="p-2">
                    <Card.Title style={{ fontSize: "14px" }}>{h.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>

        {/* Column 3 */}
        <Col md={3}>
          {/* Calendar */}
          <Card className="p-3 mb-3">
            <h5 className="fw-bold text-center mb-3">Calendar</h5>
            <Calendar onChange={setDate} value={date} />
          </Card>

          {/* Top Authors */}
          <h5 className="fw-bold mb-3">Top Authors</h5>
          <ul className="list-group mb-3">
            {["Hamid Mir", "Asma Shirazi", "Mazhar Abbas", "Saleem Safi", "Fahd Hussain", "Babar Sattar"].map(
              (a, i) => (
                <li key={i} className="list-group-item border-0 px-0 fw-bold">
                  {i + 1}. {a}
                </li>
              )
            )}
          </ul>

           {/* 24 Hours / 3 Days Buttons */}
          <div className="d-flex gap-2 mb-3">
            <button
              className="btn btn-dark btn-sm"
              onClick={() => setAuthorStories(column3Stories.slice(0,15))}
            >
              24 Hours
            </button>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => setAuthorStories(column3Stories.slice(10, 15))}
            >
              3 Days
            </button>
          </div>

          {/* Top Stories List */}
          <div className="border-top pt-3 mb-3">
            {authorStories.map((s) => (
              <div key={s.id} className="mb-3 d-flex gap-2">
                <img
                  src={s.img}
                  style={{ width: 60, height: 60, objectFit: "cover", borderRadius: "5px" }}
                />
                <div>
                  <h6 className="mb-1">{s.title}</h6>
                </div>
              </div>
            ))}
          </div>

          {/* Slider at Bottom with Titles */}
          <Slider {...sliderSettings}>
            {column3Slider.map((s, i) => (
              <div key={i}>
                <img
                  src={s.img}
                  style={{ width: "100%", height: "150px", objectFit: "cover" }}
                />
                <h6 className="mt-2 text-center">{s.title}</h6>
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
       {/* ================= Full-width Middle East Section ================= */}
      <Row className="mt-5 g-2">
        <Col xs={12}>
          <h5 className="fw-bold mb-3">Middle East</h5>
        </Col>

        {middleEastHighlights.map((h, i) => (
          <Col md={3} sm={6} xs={12} key={i}>
            <Card className="mb-2">
              <Card.Img src={h.img} style={{ height: "120px", objectFit: "cover" }} />
              <Card.Body className="p-2">
                <Card.Title style={{ fontSize: "14px" }}>{h.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    
  );
}