import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import {
  FaLinkedin,
  FaInstagram,
  FaPlay,
  FaHome,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

import Logo from "../assets/Breathe/logo.png";
import Hed1 from "../assets/Breathe/hed1.webp";
import Hed2 from "../assets/Breathe/hed2.webp";
import Hed3 from "../assets/Breathe/hed3.webp";
import Hed4 from "../assets/Breathe/hed4.webp";
import Dawn from "../assets/Breathe/dawn.png";

// ======= Countdown Component =======
function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ d: 0, h: 0, m: 0, s: 0 });
        return;
      }

      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ d, h, m, s });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <h3 style={{ color: "red", marginTop: 10 }}>
      {timeLeft.d}d {timeLeft.h}h {timeLeft.m}m {timeLeft.s}s
    </h3>
  );
}

// ======= Main Page =======
export default function BreathePage() {
  const sentences = [
    "Act now.",
    "Our world is changing.",
    "Our future is in our hands.",
    "Let’s choose a cooler, cleaner path.",
  ];

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let charIndex = 0;
    const currentSentence = sentences[currentSentenceIndex];

    const typeInterval = setInterval(() => {
      if (charIndex < currentSentence.length) {
        setDisplayedText((prev) => prev + currentSentence.charAt(charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentSentenceIndex((prev) =>
            prev === sentences.length - 1 ? 0 : prev + 1
          );
          setDisplayedText("");
        }, 1500);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentSentenceIndex]);

  const videos = [
    {
      title:
        "Clearing The Air | Episode 02 |  A Breathe Pakistan Docu-Series | Dawn Media",
      logo: Dawn,
    },
    {
      title:
        "GENERAL SESSION 01: “Federal-Provincial Air Plan & Governance” | Air We Breathe Conference | DawnMedia",
      logo: Dawn,
    },
    {
      title:
        "Clearing The Air | Episode 03 | A Breathe Pakistan Docu-Series | Dawn Media",
      logo: Dawn,
    },
    {
      title:
        "SESSION 02 | Episode 04 | A Health Crisis in the Smog | Air We Breathe Conference | Dawn Media",
      logo: Dawn,
    },
    {
      title:
        "SESSION 03 | Episode 05 |Federal-Provincial Air Plan & Governance | Air We Breathe Conference | DawnMedia",
      logo: Dawn,
    },
    {
      title:
        "SESSION 04 | Episode 06 |Developing a National Air Quality Management Framework for Pakistan | Air We Breathe",
      logo: Dawn,
    },
    {
      title:
        "SESSION 05 | Episode 07 | Turn Trash into Treasure: The Magic of Composting | Aware89 X Breathe Pakistan",
      logo: Dawn,
    },
    {
      title:
        "SESSION 06 | Episode 08 | Tides of Change: Combating Plastic Pollution on Our Beaches | Aware89 X Breathe Pakistan",
      logo: Dawn,
    },
    {
      title:
        "SESSION 07 | Episode 09 |Karachi, Delhi, Lahore, Dhaka: Nazifa Butt Spotlights Climate Perils | Dawn News English",
      logo: Dawn,
    },
    {
      title:
        "SESSION 08 | Episode 10 | Tackling Trans-Boundary Air Pollution in South Asia | Air We Breathe",
      logo: Dawn,
    },
    {
      title:
        "SESSION 09 | Episode 11 |Her Earth Advocates - Filmmakers Vs Climate Change // Freestyling #13",
      logo: Dawn,
    },
  ];

  return (
    <div style={{ fontFamily: "Times New Roman" }}>
      {/* ===================== TOP HEADER ===================== */}
      <div
        style={{
          textAlign: "center",
          padding: "20px 0",
          background: "linear-gradient(to right, #efe6ff, #fcecef)",
        }}
      >
        <h1 style={{ fontWeight: 400 }}>
          International Climate Change Conference 2026
        </h1>
        <Countdown targetDate={new Date("2026-04-01T00:00:00")} />
      </div>

      {/* ===================== TOP MENU ===================== */}
      <Container fluid className="text-center mt-3">
        <Row
          className="justify-content-center"
          style={{ fontSize: 18, color: "green" }}
        >
          <Col xs="auto">Projects</Col>
          <Col xs="auto">Journalism</Col>
          <Col xs="auto">Partners</Col>
          <Col xs="auto">Contact</Col>
          <Col xs="auto" style={{ fontSize: 22 }}>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0077b5" }}
            >
              <FaLinkedin />
            </a>
          </Col>
          <Col xs="auto" style={{ fontSize: 22 }}>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#c70f77ff" }}
            >
              <FaInstagram />
            </a>
          </Col>
        </Row>
      </Container>

      {/* ===================== LOGO SECTION ===================== */}
      <Container className="text-center mt-5">
        <Image src={Logo} width="260" alt="Logo" />
      </Container>

      {/* ===================== LOOPING TYPEWRITER HEADLINE ===================== */}
      <h1
        style={{
          textAlign: "center",
          marginTop: 40,
          fontWeight: 300,
          letterSpacing: 3,
          minHeight: 50,
        }}
      >
        {displayedText}
        <span style={{ opacity: 0.5 }}>|</span>
      </h1>

      {/* ===================== EVENTS SECTION ===================== */}
      <Container style={{ width: "90%", marginTop: 60 }}>
        <Row>
          <Col md={4} className="mb-5">
            <p style={{ color: "#a00000", fontWeight: "bold" }}>
              • February 2025
            </p>
            <hr />
            <h4 style={{ fontWeight: "bold" }}>
              International Climate Change Conference 2025
            </h4>
            <p>
              <i>Jinnah Convention Centre, Islamabad</i> <br />
              <i>February 6 & 7, 2025</i>
            </p>
            <p style={{ lineHeight: "1.6" }}>
              A two-day climate change conference featuring over 90
              international and local speakers, engaging approximately 1000+
              participants from around the world.
            </p>
          </Col>
          <Col md={4} className="mb-5">
            <p style={{ color: "#a00000", fontWeight: "bold" }}>
              • October 2025
            </p>
            <hr />
            <h4 style={{ fontWeight: "bold" }}>The Air We Breathe</h4>
            <p>
              <i>Expo Centre, Lahore</i> <br />
              <i>October 11, 2025</i>
            </p>
            <p style={{ lineHeight: "1.6" }}>
              A focussed conference on Air Pollution.
            </p>
          </Col>
          <Col md={4} className="mb-5">
            <p style={{ color: "#a00000", fontWeight: "bold" }}>• April 2026</p>
            <hr />
            <h4 style={{ fontWeight: "bold" }}>
              International Climate Change Conference 2026
            </h4>
            <p style={{ lineHeight: "1.6" }}>
              Following the inaugural Breathe Pakistan International Climate
              Change Conference 2025, Dawn Media reaffirms its commitment to
              engaging stakeholders globally.
            </p>
          </Col>
        </Row>
      </Container>

      {/* ===================== CLIMATE PROJECTS SECTION ===================== */}
      <Container
        style={{
          width: "85%",
          marginTop: 80,
          background: "white",
          padding: 40,
          borderRadius: 30,
          border: "1px solid #d6e4ff",
          boxShadow: "0 0 20px rgba(0,0,0,0.05)",
        }}
      >
        <div className="text-center mb-4">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/4151/4151060.png"
            width={90}
          />
          <h1 style={{ color: "green", marginTop: 15, fontWeight: "bold" }}>
            Climate Projects
          </h1>
          <p style={{ fontSize: 20 }}>Explore our initiatives.</p>
        </div>

        <Row className="mt-5">
          <Col md={6}>
            <Row className="mb-5">
              <Col xs={3}>
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/1087/1087927.png"
                  width={70}
                />
              </Col>
              <Col xs={9}>
                <h5 style={{ fontWeight: "bold" }}>
                  Carbon Footprint Calculator
                </h5>
                <p>Track and understand your carbon emissions</p>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col xs={3}>
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/2913/2913465.png"
                  width={70}
                />
              </Col>
              <Col xs={9}>
                <h5 style={{ fontWeight: "bold" }}>Sign the Declaration</h5>
                <p>Raise your voice. Pledge your support for Climate Action.</p>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col xs={3}>
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/3448/3448610.png"
                  width={70}
                />
              </Col>
              <Col xs={9}>
                <h5 style={{ fontWeight: "bold" }}>Events</h5>
                <p>
                  Stay informed about upcoming speakers, sessions, and how to
                  register
                </p>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row className="mb-5">
              <Col xs={3}>
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/4080/4080034.png"
                  width={70}
                />
              </Col>
              <Col xs={9}>
                <h5 style={{ fontWeight: "bold" }}>
                  Declaration on Rights of Nature & Climate Justice
                </h5>
                <p>
                  Champion climate democracy — because an inclusive, sustainable
                  future is possible
                </p>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col xs={3}>
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
                  width={70}
                />
              </Col>
              <Col xs={9}>
                <h5 style={{ fontWeight: "bold" }}>
                  Register Now! Be a Mycelium Warrior
                </h5>
                <p>
                  Together with Oxford University Press, Breathe Pakistan
                  invites your school to help fight climate change.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* ===================== IMAGE CARDS SECTION ===================== */}
      <Container className="mt-5">
        <Row className="g-3" style={{ fontFamily: "Times New Roman" }}>
          {[Hed1, Hed2, Hed3, Hed4].map((img, i) => (
            <Col md={3} key={i}>
              <Card className="border-0 shadow-sm">
                <Card.Img
                  src={img}
                  style={{ width: "100%", height: "180px", objectFit: "cover" }}
                />
                <Card.Body className="p-2">
                  <Card.Title style={{ fontSize: "15px" }}>
                    {
                      [
                        "Starvation fears as flood toll passes 900 in Indonesia",
                        "The rise and ruin of Keti Bunder Breathe Pakistan Docu-Series",
                        "The crisis no one sees: How climate change is rewriting childhood in Pakistan",
                        "Musadik warns of climate-driven devastation facing Pakistan",
                      ][i]
                    }
                  </Card.Title>
                  <Card.Text style={{ fontSize: "13px", fontWeight: "bolder" }}>
                    {
                      [
                        "Dr Saima Bint-e-Saif",
                        "AFP",
                        "Jamal Shahid",
                        "Mohammad Hussain Khan",
                      ][i]
                    }
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* ===================== VIDEO SECTION ===================== */}
      <Container style={{ marginTop: "40px" }}>
        {/* ======= FIRST ROW: 3 VIDEOS ======= */}
        {/* Header */}
        <div className="text-center mb-4">
          <h2 style={{ fontWeight: "bold", color: "green" }}>
            Climate Journalism
          </h2>
        </div>
        <Row className="g-4 mb-3">
          {videos.slice(0, 3).map((video, idx) => {
            const isMiddle = idx === 1;
            return (
              <Col md={isMiddle ? 6 : 3} key={idx}>
                <Card
                  style={{
                    borderRadius: "20px",
                    boxShadow: "0 0 15px rgba(0,0,0,0.1)",
                    padding: "15px",
                    height: "100%",
                  }}
                >
                  {isMiddle ? (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "16px",
                          marginTop: "10px",
                          textAlign: "left",
                          flex: 1,
                        }}
                      >
                        {video.title}
                      </p>
                      <div
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          background: "#e8e8e8",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginLeft: "20px",
                        }}
                      >
                        <FaPlay size={22} color="#333" />
                      </div>
                    </div>
                  ) : (
                    <>
                      <div
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          background: "#e8e8e8",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          margin: "20px auto",
                        }}
                      >
                        <FaPlay size={22} color="#333" />
                      </div>
                      <p style={{ fontSize: "16px", marginTop: "10px" }}>
                        {video.title}
                      </p>
                    </>
                  )}
                  <div
                    style={{
                      textAlign: "right",
                      marginTop: isMiddle ? "130px" : "10px",
                    }}
                  >
                    <img src={video.logo} width="40px" alt="logo" />
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>

        {/* ======= SECOND ROW: 4 VIDEOS ======= */}
        <Row className="g-3 mb-3">
          {videos.slice(3, 7).map((video, idx) => (
            <Col md={3} key={idx}>
              <Card
                style={{
                  borderRadius: "20px",
                  boxShadow: "0 0 15px rgba(0,0,0,0.1)",
                  padding: "15px",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "#e8e8e8",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "20px auto",
                  }}
                >
                  <FaPlay size={22} color="#333" />
                </div>
                <p style={{ fontSize: "16px", marginTop: "10px" }}>
                  {video.title}
                </p>
                <div style={{ textAlign: "right", marginTop: "10px" }}>
                  <img src={video.logo} width="40px" alt="logo" />
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* ======= THIRD ROW: 4 VIDEOS ======= */}
        <Row className="g-3 mb-3">
          {videos.slice(7, 11).map((video, idx) => (
            <Col md={3} key={idx}>
              <Card
                style={{
                  borderRadius: "20px",
                  boxShadow: "0 0 15px rgba(0,0,0,0.1)",
                  padding: "15px",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "#e8e8e8",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "20px auto",
                  }}
                >
                  <FaPlay size={22} color="#333" />
                </div>
                <p style={{ fontSize: "16px", marginTop: "10px" }}>
                  {video.title}
                </p>
                <div style={{ textAlign: "right", marginTop: "10px" }}>
                  <img src={video.logo} width="40px" alt="logo" />
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      {/* ===================== Read More Coverage Link ===================== */}
      <div
        style={{ textAlign: "center", margin: "40px 0", fontWeight: "bold" }}
      >
        <a
          href="/coverage"
          style={{ textDecoration: "none", fontSize: "18px", color: "green" }}
        >
          Read More Coverage →
        </a>
      </div>
      {/* ===================== CONTACT / FOOTER SECTION ===================== */}
      <Container
        fluid
        style={{
          background: "#f5f5f5",
          padding: "40px 20px",
          marginTop: "60px",
          borderTop: "1px solid #ddd",
        }}
      >
        <Row className="align-items-center">
          {/* LEFT SIDE: Address with Icons */}
          <Col
            md={6}
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <p
              style={{
                margin: 0,
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <FaHome /> Haroon House, Dr Ziauddin Ahmed Road, Karachi 74200,
              Pakistan
            </p>
            <p
              style={{
                margin: 0,
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <FaPhone /> +92 111-444-777
            </p>
            <p
              style={{
                margin: 0,
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <FaEnvelope /> breathepakistan@dawn.com
            </p>
          </Col>

          {/* RIGHT SIDE: Social Icons */}
          <Col md={6} style={{ textAlign: "right" }}>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "24px",
                marginRight: "20px",
                color: "#0077b5",
              }}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "24px",
                color: "#c70f77ff",
              }}
            >
              <FaInstagram />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
