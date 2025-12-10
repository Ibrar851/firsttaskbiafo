// MustWatchSection.jsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";

import img1 from "../assets/Video/img1.png";
import img2 from "../assets/Video/img2.png";
import img3 from "../assets/Video/img3.png";
import img4 from "../assets/Video/img4.png";
import img5 from "../assets/Video/img5.png";
import img6 from "../assets/Video/img6.png";
import img7 from "../assets/Video/img7.png";

export default function VideoPage() {
  // Each video now has a unique title
  const videos = [
    "BGaza Ceasefire Explained: What Happens Next? | Phase 1 Phase 2 | Israel | US",
    "Explained: Why IndiGo Cancelled Over 2,000 Flights? | Dawn News English",
    "Pakistan Awaits Crucial IMF Approval | What Happens Next? | Dawn News English",
    "Muslim Nations Reject Israeli Move at Rafah | Joint Statement on Gaza | Dawn News English",
    "UAE Conducts More Aid Airdrops Over Gaza | Dawn News English",
    "Trump Envoy Witkoff Heading to Gaza, White House Says | Dawn News English",
    "Breathe Pakistan: Experts Call For Urgent Adaptation Funding | Dawn News English",
    "10 Killed In Sweden’s Deadliest School Shooting | Dawn News English",
    "Current Affairs: Economic Developments in Pakistan | Dawn News English",
    "Finance Insights: Stock Market Trends Explained | Dawn News English",
    "Explainers: Climate Change Initiatives Around the Globe | Dawn News English",
    "Podcasts: Experts Discuss Local and Global Economy | Dawn News English",
  ];

  return (
    <Container className="my-5" style={{ fontFamily: "Times New Roman" }}>
      {/* ========== SECTION 1 ========== */}
      <h3 className="text-center fw-bold mb-4" style={{ color: "#560000ff" }}>
        MUST WATCH
      </h3>
      <p style={{ fontWeight: "bold", marginBottom: "40px" }}>
        WATCH ON{" "}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
          width="28"
          alt="YouTube"
        />{" "}
        YouTube
      </p>

      <Row className="g-3">
        {/* LEFT LARGE CARD */}
        <Col xs={12} md={8}>
          <Card className="h-100">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "300px", background: "#e6e4eaff" }}
            >
              <Button
                className="rounded-circle"
                style={{ width: "60px", height: "60px", background: "#3f3e42" }}
              >
                <FaPlay size={22} color="#fff" />
              </Button>
            </div>
            <Card.Body>
              <Card.Title>{videos[0]}</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        {/* RIGHT TWO SMALL CARDS */}
        <Col xs={12} md={4}>
          <Row className="g-3">
            <Col xs={12}>
              <Card className="h-100">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: "160px", background: "#e4e4e6ff" }}
                >
                  <Button
                    className="rounded-circle"
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "#3f3e42",
                    }}
                  >
                    <FaPlay size={22} color="#fff" />
                  </Button>
                </div>
                <Card.Body>
                  <Card.Title>{videos[1]}</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12}>
              <Card className="h-100">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: "160px", background: "#e6e4eaff" }}
                >
                  <Button
                    className="rounded-circle"
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "#3f3e42",
                    }}
                  >
                    <FaPlay size={22} color="#fff" />
                  </Button>
                </div>
                <Card.Body>
                  <Card.Title>{videos[2]}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* LINE */}
      <hr style={{ margin: "40px 0", borderTop: "2px solid #000000ff" }} />

      {/* ========== SECTION 2 ========== */}
      <Container className="my-5">
        <h3 className="fw-bold mb-4" style={{ color: "#560000ff" }}>
          NEWS AND HEADLINES
        </h3>
        <p
          className="text-center"
          style={{ fontWeight: "bold", marginBottom: "40px" }}
        >
          WATCH ON{" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
            width="28"
            alt="YouTube"
          />{" "}
          YouTube
        </p>

        {/* FIRST ROW — 4 CARDS */}
        <Row className="g-4">
          {[videos[4], videos[5], videos[6], videos[7]].map((title, index) => (
            <Col key={index} xs={12} sm={6} md={3}>
              <Card className="h-100">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    height: "170px",
                    background: "#e6e4ea",
                    borderRadius: "8px",
                  }}
                >
                  <div
                    className="rounded-circle d-flex justify-content-center align-items-center"
                    style={{
                      width: "55px",
                      height: "55px",
                      background: "#3f3e42",
                    }}
                  >
                    <FaPlay size={22} color="#fff" />
                  </div>
                </div>
                <Card.Body>
                  <Card.Title style={{ fontSize: "15px" }}>{title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* SECOND ROW — 1 CARD */}
        <Row className="g-4 mt-4">
          <Col xs={12} sm={8} md={4}>
            <Card className="h-100">
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  height: "170px",
                  background: "#e6e4ea",
                  borderRadius: "8px",
                }}
              >
                <div
                  className="rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: "55px",
                    height: "55px",
                    background: "#3f3e42",
                  }}
                >
                  <FaPlay size={22} color="#fff" />
                </div>
              </div>
              <Card.Body>
                <Card.Title style={{ fontSize: "15px" }}>
                  {videos[8]}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* LINE */}
      <hr style={{ margin: "40px 0", borderTop: "2px solid #000000ff" }} />

      {/* ========== SECTION 3 to 6 — Each with unique titles ========== */}
      {["CURRENT AFFAIRS", "ECONOMY", "EXPLAINERS", "PODCASTS"].map(
        (section, secIdx) => (
          <Container key={secIdx} className="my-5">
            <h2 style={{ color: "#7b2e2e", fontWeight: "bold" }}>{section}</h2>
            <p style={{ fontSize: "18px", maxWidth: "900px" }}>
              {section === "CURRENT AFFAIRS"
                ? "Dawn News English sheds spotlight on the latest and important news developments from across the globe, giving you perspectives from a vantage point."
                : section === "ECONOMY"
                ? "Dawn News English takes a deep dive into local and global economy and finance. We bring you latest economic news, expert analysis, opinions, and brief explainers."
                : section === "EXPLAINERS"
                ? "Too long didn't read? We've got you! We bring you a summary of what, where, why & who.."
                : "Dawn News English takes a deep dive into local and global economy."}
            </p>

            <p style={{ fontWeight: "bold", marginBottom: "40px" }}>
              WATCH ON{" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
                width="28"
                alt="YouTube"
              />{" "}
              YouTube
            </p>

            <Row className="g-3">
              {/* LEFT BIG VIDEO */}
              <Col xs={12} md={6}>
                <Card className="h-100">
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ height: "300px", background: "#e6e4eaff" }}
                  >
                    <Button
                      className="rounded-circle"
                      style={{
                        width: "60px",
                        height: "60px",
                        background: "#3f3e42",
                      }}
                    >
                      <FaPlay size={22} color="#fff" />
                    </Button>
                  </div>
                  <Card.Body>
                    <Card.Title>{videos[secIdx]}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>

              {/* 4 SMALL CARDS */}
              <Col xs={12} md={6}>
                <Row className="g-3">
                  {[1, 2, 3, 4].map((i, idx) => (
                    <Col xs={6} key={idx}>
                      <Card className="h-100">
                        <div
                          className="d-flex justify-content-center align-items-center"
                          style={{
                            height: "160px",
                            background:
                              idx % 2 === 0 ? "#e4e4e6ff" : "#e6e4eaff",
                          }}
                        >
                          <Button
                            className="rounded-circle"
                            style={{
                              width: "40px",
                              height: "40px",
                              background: "#3f3e42",
                            }}
                          >
                            <FaPlay size={22} color="#fff" />
                          </Button>
                        </div>
                        <Card.Body>
                          <Card.Title>{videos[idx + secIdx + 1]}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>

            {/* Section Divider */}
            <hr
              style={{ margin: "40px 0", borderTop: "2px solid #000000ff" }}
            />
          </Container>
        )
      )}

      {/* ========== SECTION 7 — DAWN CHANNELS ========== */}
      <Container style={{ marginTop: "70px", marginBottom: "80px" }}>
        <h2
          style={{ color: "#7b2e2e", fontWeight: "bold", marginBottom: "40px" }}
        >
          DAWN CHANNELS
        </h2>

        <Row className="text-center g-4">
          {[img1, img2, img3, img4, img5, img6].map((img, idx) => (
            <Col xs={6} md={2} key={idx}>
              <img
                src={img}
                alt={`Channel ${idx}`}
                style={{ width: "100%", borderRadius: "0px" }}
              />
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  marginTop: "10px",
                }}
              >
                {
                  [
                    "DawnNews",
                    "dawndotcom",
                    "DawnNews Instagram",
                    "Teeli",
                    "We Love Food",
                    "DN Sport",
                  ][idx]
                }
              </p>
            </Col>
          ))}

          {/* CityFM89 Circle */}
          <Col xs={12} md={2} style={{ marginTop: "40px" }}>
            <img
              src={img7}
              alt="CityFM89"
              style={{
                width: "100%",
                borderRadius: "50%",
                marginBottom: "10px",
              }}
            />
            <p style={{ fontSize: "18px", fontWeight: "600" }}>CityFM89</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
