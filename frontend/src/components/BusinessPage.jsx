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
    <h3
      className="mb-3 fw-bold"
      style={{ fontSize: "20px", fontWeight: "500" }}
    >
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
// Dummy Image Imports
// ===============================
import HeadlineImg from "../assets/business/headline.webp";
import Slide1 from "../assets/business/slide1.jpg";
import Slide2 from "../assets/business/slide2.jpg";
import Slide3 from "../assets/business/slide3.jpg";
import Slide4 from "../assets/business/slide4.jpg";
import Slide5 from "../assets/business/slide5.jpg";
import Slide6 from "../assets/business/slide6.jpg";
import LogoImg from "../assets/business/logo.jpg";
import HighlightImg1 from "../assets/business/highlight1.jpg";
import HighlightImg2 from "../assets/business/highlight2.jpg";
import HighlightImg3 from "../assets/business/highlight3.jpg";
import HighlightImg4 from "../assets/business/highlight4.jpg";
import HighlightImg5 from "../assets/business/highlight5.jpg";
import HighlightImg6 from "../assets/business/highlight6.jpg";

// Column 1 headlines
import column1Headlines1 from "../assets/business/headline1.webp";
import column1Headlines2 from "../assets/business/headline2.webp";
import column1Headlines3 from "../assets/business/headline3.webp";
import column1Headlines4 from "../assets/business/headline4.webp";
import column1Headlines5 from "../assets/business/headline5.webp";
import column1Headlines6 from "../assets/business/headline6.webp";
import column1Headlines7 from "../assets/business/headline7.webp";
import column1Headlines8 from "../assets/business/headline8.webp";
import column1Headlines9 from "../assets/business/headline9.webp";

// Column 2 headlines
import column2Headlines10 from "../assets/business/headline10.webp";
import column2Headlines11 from "../assets/business/headline11.webp";
import column2Headlines12 from "../assets/business/headline12.webp";

// ===============================
// Main Business Page
// ===============================
export default function BusinessPage() {
  const [date, setDate] = useState(new Date());
  const [authorStories, setAuthorStories] = useState([]);

  // ===============================
  // Slider Settings
  // ===============================
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // ===============================
  // Sliders
  // ===============================
  const slidesTop = [
    { id: 7, title: "The Voice of the Advertising Industry.", img: Slide4 },
    {
      id: 8,
      title: "Pakistan’s industry must prepare to deal with its",
      img: Slide5,
    },
    {
      id: 9,
      title: "The journey from the first to the last over the past 27 years",
      img: Slide6,
    },
  ];

  const slides = [
    {
      id: 1,
      title:
        "Rigid and impractical tariff regime undermines benefits of solar revolution",
      img: Slide1,
    },
    {
      id: 2,
      title: "Preserving essence of NFC: Why govt needs to faithfully",
      img: Slide2,
    },
    {
      id: 3,
      title: "Has ‘managing’ exchange rate backfired for Pakistan?",
      img: Slide3,
    },
  ];

  const slides2 = [
    { id: 4, title: "The Voice of the Advertising Industry.", img: Slide4 },
    { id: 5, title: "Pakistan’s industry must prepare to deal", img: Slide5 },
    {
      id: 6,
      title: "The journey from the first to the last over the past 27 years",
      img: Slide6,
    },
  ];

  const highlights = [
    {
      id: 1,
      title: "Agriculture: Another year, another cane crisis",
      img: HighlightImg1,
    },
    { id: 2, title: "Empowering local bodies", img: HighlightImg2 },
    { id: 3, title: "An attempt at managing expectations", img: HighlightImg3 },
    { id: 4, title: "A complex investment puzzle", img: HighlightImg4 },
    { id: 5, title: "Why FDI bypasses Pakistan", img: HighlightImg5 },
    { id: 6, title: "Encouraging female entrepreneurs", img: HighlightImg6 },
  ];

  // ===============================
  // PSX Data
  // ===============================
  const psxData = [
    {
      company: "SMCPL",
      price: 45.18,
      change: 4.11,
      changePercent: "10.01 ▲",
      volume: "310,510",
    },
    {
      company: "ATBA",
      price: 255.81,
      change: 23.26,
      changePercent: "10.00 ▲",
      volume: "113,969",
    },
    {
      company: "BBFL",
      price: 52.81,
      change: 4.8,
      changePercent: "10.00 ▲",
      volume: "1,754,336",
    },
    {
      company: "DNCC",
      price: 25.52,
      change: 2.32,
      changePercent: "10.00 ▲",
      volume: "364,692",
    },
    {
      company: "DSIL",
      price: 15.4,
      change: 1.4,
      changePercent: "10.00 ▲",
      volume: "952,154",
    },
  ];

  // ===============================
  // Authors & Stories
  // ===============================
  const authors = [
    "Hamid Mir",
    "Asma Shirazi",
    "Mazhar Abbas",
    "Saleem Safi",
    "Fahd Hussain",
    "Babar Sattar",
  ];
  const stories24 = [
    {
      title: "South Asian states weigh prospects as US, India mull trade deal",
      image: Slide1,
    },
    {
      title: "Saudi oil giant’s operations in Islamabad challenged",
      image: Slide2,
    },
    {
      title: "Tejas crash dampens export hopes for Indian fighter jet",
      image: Slide3,
    },
  ];
  const stories3day = [
    {
      title:
        "3 FC men martyred in suicide attack on force’s headquarters in Peshawar",
      image: Slide1,
    },
    {
      title:
        "3 FC men martyred in suicide attack on force’s headquarters in Peshawar",
      image: Slide2,
    },
    {
      title: "$600m lost to illegal crypto transactions in Pakistan",
      image: Slide3,
    },
  ];

  // ===============================
  // Column Headlines
  // ===============================
  const column1Headlines = [
    {
      title: "IMF slams Pakistan’s fiscal mismanagement",
      img: column1Headlines1,
      description:
        "Fiscal and economic governance vulnerabilities reflect persistent gaps between policy and practice.",
      time: "Published about 3 hours ago",
    },
    {
      title: "Rupee stabilises as SBP tightens market",
      img: column1Headlines2,
      description:
        "Currency fluctuations ease as authorities adopt stricter monitoring measures.",
      time: "Published about 5 hours ago",
    },
    {
      title: "Mobile phone production plunges 34pc",
      img: column1Headlines3,
      description:
        "Experts call for a simplified tax framework to boost international competitiveness.",
      time: "Published 2 hours ago",
    },
    {
      title: "Government striving to cut power tariffs",
      img: column1Headlines4,
      description:
        "Fiscal and economic governance vulnerabilities reflect persistent gaps between policy and practice.",
      time: "Published about 3 hours ago",
    },
    {
      title: "Equities drift lower in directionless trade",
      img: column1Headlines5,
      description:
        "Food security minister calls for digitalisation of Pakistan's agriculture sector.",
      time: "Published about 3 hours ago",
    },
    {
      title: "Barrick committed to Reko Diq copper project",
      img: column1Headlines6,
      description:
        "Trading volume rises by 20.43pc to 589m shares; traded value falls by 6.4pc.",
      time: "Published about 3 hours ago",
    },
    {
      title: "Google, Accel partner to invest millions",
      img: column1Headlines7,
      description:
        "Barrick’s board had raised the possibility of splitting the company’s assets.",
      time: "Published about 3 hours ago",
    },
    {
      title: "Shipping framework with Bangladesh proposed",
      img: column1Headlines8,
      description:
        "To co-invest up to $2m in each startup; Google plans to invest $15bn over five years.",
      time: "Published about 3 hours ago",
    },
    {
      title: "PM Shehbaz eliminates 0.25pc export surcharge",
      img: column1Headlines9,
      description:
        "Maritime minister says closer port-to-port collaboration could ease logistics challenges.",
      time: "Published about 3 hours ago",
    },
  ];

  const column2Headlines = [
    {
      title: "How to hunt a duck curve",
      img: column2Headlines10,
      description:
        "New proposals indicate rising interest from Gulf investors.",
      time: "Published 1 hour ago",
    },
    {
      title: "Why FDI bypasses Pakistan",
      img: column2Headlines11,
      description: "Market sentiment improves as foreign buying rises sharply.",
      time: "Published 4 hours ago",
    },
    {
      title: "Coddling exchange rate backfires",
      img: column2Headlines12,
      description: "Industry remains cautious despite marginal recovery.",
      time: "Published 6 hours ago",
    },
  ];

  // ===============================
  // Render
  // ===============================
  return (
    <div style={{fontFamily: "Times New Roman" }}>
    <Container 
      fluid
      className="p-3"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Row className="g-3">
        {/* Column 1 */}
        <Col md={5}>
          <Card className="border-0 mb-3">
            <h2 className="fw-bold mb-2">
              PM Shehbaz eliminates 0.25pc export surcharge
            </h2>
            <Card.Img
              variant="top"
              src={HeadlineImg}
              style={{
                height: "250px",
                objectFit: "cover",
                marginBottom: "10px",
              }}
            />
            <Card.Body className="p-0 mb-3">
              <p style={{ fontSize: "16px" }}>
                The premier has directed the immediate abolition of the Export
                Development Surcharge imposed on domestic exports.
              </p>
            </Card.Body>

            {/* PSX Table */}
            <Card className="p-3 mb-3">
              <div
                style={{
                  backgroundColor: "#8CC63F",
                  padding: "10px",
                  color: "#fff",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "18px",
                  marginBottom: "10px",
                }}
              >
                PSX Highlights of the Day
              </div>
              <table className="table table-striped table-bordered mb-2">
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Price</th>
                    <th>Change</th>
                    <th>Change %</th>
                    <th>Volume</th>
                  </tr>
                </thead>
                <tbody>
                  {psxData.map((row, index) => (
                    <tr key={index}>
                      <td>{row.company}</td>
                      <td>{row.price}</td>
                      <td>{row.change}</td>
                      <td style={{ color: "green", fontWeight: "600" }}>
                        {row.changePercent}
                      </td>
                      <td>{row.volume}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="text-end text-muted" style={{ fontSize: "12px" }}>
                Source: PSX | Updated Nov 24, 2025
              </div>
            </Card>

            {/* News with Logo */}
            <Card className="mb-3 p-3">
              <div className="d-flex gap-3 align-items-start">
                <img
                  src={LogoImg}
                  alt="Logo"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "contain",
                  }}
                />
                <div>
                  <h5 className="mb-1">
                    <strong>Ogra determines 7pc increase in gas prices</strong>
                  </h5>
                  <p className="text-muted mb-1">
                    Semi-annual adjustments committed to IMF.
                  </p>
                  <small className="text-muted">
                    UPDATED ABOUT 4 HOURS AGO
                  </small>
                </div>
              </div>
            </Card>
          </Card>

          {/* Column 1 bottom slider */}
          <div className="mt-4 p-3" style={{ backgroundColor: "#f5e5e5" }}>
            <Slider {...sliderSettings}>
              {slidesTop.map((item) => (
                <div key={item.id}>
                  <Row className="align-items-center">
                    <Col md={6}>
                      <img
                        src={item.img}
                        className="img-fluid"
                        style={{
                          width: "100%",
                          height: "150px",
                          objectFit: "cover",
                        }}
                        alt={item.title}
                      />
                    </Col>
                    <Col md={6}>
                      <h4 className="fw-bold">{item.title}</h4>
                      <p>
                        {item.description ||
                          "Pakistan’s industry must prepare to deal with it."}
                      </p>
                    </Col>
                  </Row>
                </div>
              ))}
            </Slider>
          </div>

          {/* Column 1 Headlines */}
          <div className="mt-3" style={{fontFamily: "Times New Roman" }}>
            {column1Headlines.map((h, i) => (
              <DawnStyleHeadline
                key={i}
                title={h.title}
                img={h.img}
                description={h.description}
                time={h.time}
              />
            ))}
          </div>
        </Col>

        {/* Column 2 */}
        <Col md={4}>
          <Slider {...sliderSettings}>
            {slides.map((slide) => (
              <Card key={slide.id} className="mb-4"style={{fontFamily: "Times New Roman" }}>
                <Card.Img
                  variant="top"
                  src={slide.img}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">{slide.title}</Card.Title>
                </Card.Body>
              </Card>
            ))}
          </Slider>

          <Row className="mt-3 g-2" style={{fontFamily: "Times New Roman" }}>
            {highlights.map((h) => (
              <Col md={6} key={h.id}>
                <Card className="mb-2">
                  <Card.Img
                    variant="top"
                    src={h.img}
                    style={{ height: "120px", objectFit: "cover" }}
                  />
                  <Card.Body className="p-2">
                    <Card.Title style={{ fontSize: "14px" }}>
                      {h.title}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <Slider {...sliderSettings}>
            {slides2.map((slide) => (
              <Card key={"s2-" + slide.id} className="mb-4">
                <Card.Img
                  variant="top"
                  src={slide.img}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">{slide.title}</Card.Title>
                </Card.Body>
              </Card>
            ))}
          </Slider>

          <div className="mt-4">
            {column2Headlines.map((h, i) => (
              <DawnStyleHeadline
                key={"col2-" + i}
                title={h.title}
                img={h.img}
                description={h.description}
                time={h.time}
              />
            ))}
          </div>
        </Col>

        {/* Column 3 */}
        <Col md={3}>
          <Card className="p-3 mb-3">
            <h5 className="fw-bold text-center mb-3">Calendar</h5>
            <Calendar onChange={setDate} value={date} />
          </Card>

          <div className="mt-3">
            <h5 className="fw-bold mb-3">TOP Authors</h5>
            <ul className="list-group mb-3">
              {authors.slice(0, 6).map((a, i) => (
                <li key={i} className="list-group-item border-0 px-0 fw-bold">
                  {i + 1}. {a}
                </li>
              ))}
            </ul>

            <div className="d-flex gap-2 mb-3">
              <button
                className="btn btn-dark btn-sm"
                onClick={() => setAuthorStories(stories24)}
              >
                24 Hours
              </button>
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => setAuthorStories(stories3day)}
              >
                3 Days
              </button>
            </div>

            <div className="border-top pt-3">
              {authorStories.map((s, i) => (
                <div key={i} className="mb-3 d-flex gap-2 align-items-start">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="img-fluid rounded"
                    style={{ width: 60, height: 60, objectFit: "cover" }}
                  />
                  <div>
                    <h6 className="mb-1">{s.title}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}
