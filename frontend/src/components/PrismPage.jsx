import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";

// Assets
import Mainpic from "../assets/Prism/main-pic.webp";
import Card1 from "../assets/Prism/card1.webp";
import Card2 from "../assets/Prism/card2.webp";
import Card3 from "../assets/Prism/card3.webp";
import Card4 from "../assets/Prism/card4.webp";
import Logo from "../assets/Prism/logo.webp";
import Hed1 from "../assets/Prism/hed1.webp";
import Hed2 from "../assets/Prism/hed2.webp";
import Hed3 from "../assets/Prism/hed3.webp";
import Hed4 from "../assets/Prism/hed4.webp";
import Hed5 from "../assets/Prism/hed5.webp";
import Hed6 from "../assets/Prism/hed6.webp";
import Hed7 from "../assets/Prism/hed7.webp";
import Hed8 from "../assets/Prism/hed8.webp";
import Hed9 from "../assets/Prism/hed9.webp";
 import Hed10 from "../assets/Prism/hed10.webp";
import Hed11 from "../assets/Prism/hed11.webp";
import Hed12 from "../assets/Prism/hed12.webp";

// Data
const articles = [
  {
    img: Card1,
    title:
      "The age of surveillance: George Orwell’s 1984, now streaming in Pakistan",
    authors:
      "Faazla Qazi | Arturo Carrillo | Philip Paik | Yessica Chong | Farieha Aziz",
  },
  {
    img: Card2,
    title:
      "Hara-kiri in Perth: Can Stokes reincarnate Test cricket from the ashes",
    authors: "Junaid Aziz",
  },
  {
    img: Card3,
    title: "Jinnah’s federal court was a bridge. The 27th Amendment burns it",
    authors: "Mian Sami ud-Din",
  },
  {
    img: Card4,
    title: "AI deepfakes: The latest weapon in Pakistan’s disinfo wars",
    authors: "Sheraz Khan Rajput",
  },
];

const heds = [
  {
    img: Hed1,
    title:
      "Dubai chocolate, expensive tomatoes, and Pakistan Idol: A taste of late-stage capitalism",
    author: "Amna Bakhtiar",
  },
  {
    img: Hed2,
    title: "All that glitters: The rise and rise of gold",
    author: "Fatima S Attarwala",
  },
  {
    img: Hed3,
    title: "Pakistan and the Paris promise: On the wrong side of 1.5°C",
    author: "Mariam Saleh Khan",
  },
    {
    img: Hed4,
    title:
      "She never got her period, and no one told her why",
    author: "Muzhira Amin",
  },
  {
    img: Hed5,
    title: "Rewarding size, not effort, has hurt Pakistan’s fiscal health. Can the 11th NFC Award rewrite the script?",
    author: "Sajid Amin Javed | Vaqar Ahmed",
  },
  {
    img: Hed6,
    title: "Justices Shah and Minallah — Guardians of the Constitution",
    author: "Umer A. Ranjha",
  },
    {
    img: Hed7,
    title:
      "27th Amendment: The end of an era",
    author: "Zainab Shahid",
  },
  {
    img: Hed8,
    title: "‘Lutf ata hai’: Dr Arfa Sayeda Zehra’s living legacy",
    author: "Mashal Rizvi",
  },
  {
    img: Hed9,
    title: "Underdogs, take notes: Zohran Mamdani just broke the system (and won)",
    author: "Mannal Ejaz",
  },
    {
    img: Hed10,
    title:
      "CJP Yahya Afridi — a year in review, or not",
    author: "Abdul Moiz Jaferii",
  },
  {
    img: Hed11,
    title: "Silence or surrender: The 27th Amendment and the unmaking of justice",
    author: "Waqas Ahmad",
  },
  {
    img: Hed12,
    title: "Move over, status quo — New York has a new story to tell",
    author: "Shanze Hasan",
  },
];

export default function PrismPage() {
  return (
    <div style={{fontFamily: "Times New Roman" }}>
      {/* Top Navbar */}
      <Container
        fluid
        className="py-3 px-4 d-flex justify-content-between align-items-center"
      >
        <h2 className="mb-0 fw-bold" style={{ fontFamily: "Times New Roman", }}>
          DAWN
        </h2>
        <h3
          className="fw-normal text-center mb-0"
          style={{ letterSpacing: "10px" }}
        >
          P R I S M
        </h3>
        <div className="d-flex gap-3 fs-4">
          <FaFacebookF />
          <FaXTwitter />
          <FaInstagram />
        </div>
      </Container>

      {/* Black Tagline */}
      <div
        style={{
          background: "black",
          color: "white",
          padding: "1px 0",
          textAlign: "center",
          fontSize: "1.1rem",
          boxShadow: "0px 3px 8px rgba(0,0,0,1)",
        }}
      >
        Illuminating experiences and expertise
      </div>

      {/* Main Featured Article */}
      <Container className="py-5">
        <Row className="align-items-start">
          <Col lg={6} className="text-center text-lg-start">
            <h1
              className="fw-normal"
              style={{
                fontSize: "2.4rem",
                lineHeight: 1.3,
                fontFamily: "Times New Roman",
              }}
            >
              The crisis no one sees: How climate <br /> change is rewriting
              childhood in <br /> Pakistan
            </h1>
            <p
              className="mt-4"
              style={{ fontSize: "1.2rem", lineHeight: 1.6, maxWidth: "600px" }}
            >
              Protecting children is not just limited to the provision of food,
              shelter, and education; it is also about ensuring their mental and
              emotional well-being.
            </p>
            <p className="fw-semibold mt-3" style={{ fontSize: "1.1rem" }}>
              Dr Saima Bint-e-Saif
            </p>
          </Col>
          <Col lg={6} className="text-center mt-4 mt-lg-0">
            <img
              src={Mainpic}
              alt="main-pic"
              className="img-fluid"
              style={{ width: "100%", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>

      {/* 4 Small Article Cards */}
      <Container className="py-5">
        <Row className="gy-4">
          {articles.map((item, idx) => (
            <Col key={idx} md={6} lg={3}>
              <img
                src={item.img}
                alt={`card-${idx + 1}`}
                className="img-fluid mb-3"
                style={{ width: "100%", height: "180px", objectFit: "cover" }}
              />
              <h5
                className="fw-normal"
                style={{ fontFamily: "Georgia, serif", fontSize: "1rem" }}
              >
                {item.title}
              </h5>
              <p className="text-muted mt-2" style={{ fontSize: "0.85rem" }}>
                {item.authors}
              </p>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Center Logo Section */}
      <Container className="py-5">
        <Row className="align-items-start">
          <Col
            lg={6}
            className="text-start d-flex flex-column justify-content-start"
          >
            <p
              className="fw-normal"
              style={{
                fontSize: "1.4rem",
                lineHeight: 1.6,
                maxWidth: "600px",
               fontFamily: "Times New Roman",
              }}
            >
              We bring you thoughtful, persuasive articles anchored in
              experiences and expertise.
            </p>
            <h2 style={{ fontFamily: "Georgia, serif" }}>What is Prism?</h2>
          </Col>
          <Col lg={6} className="text-end">
            <img
              src={Logo}
              alt="PRISM logo"
              className="img-fluid"
              style={{ maxWidth: "450px" }}
            />
          </Col>
        </Row>
      </Container>

      {/* 3 Large Heds */}
      <Container className="py-5">
        {heds.map((item, idx) => (
          <React.Fragment key={idx}>
            <Row className="align-items-start g-0 py-3">
              <Col lg={6} className="text-start pe-3">
                <h3
                  style={{
                    fontFamily: "Times New Roman",
                    fontSize: "1.2rem",
                    marginBottom: "5px",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontFamily: "Times New Roman", marginTop: "5px" }}>
                  {item.author}
                </p>
              </Col>
              <Col lg={6} className="text-center">
                <img
                  src={item.img}
                  alt={`hed${idx + 1}`}
                  className="img-fluid"
                  style={{ width: "300px", objectFit: "cover" }}
                />
              </Col>
            </Row>

            {/* Gray line except after last */}
            {idx < heds.length - 1 && (
              <div
                style={{
                  width: "99%",
                  maxWidth: "1400px",
                  height: "0.5px",
                  backgroundColor: "gray",
                  margin: "10px auto",
                }}
              ></div>
            )}
          </React.Fragment>
        ))}
      </Container>
    </div>
  );
}
