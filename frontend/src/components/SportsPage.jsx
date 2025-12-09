import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Slider from "react-slick";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// ================================
// Import Images
// ================================
import HeroImage from "../assets/sports/hero-image.webp";

import Img2_1 from "../assets/sports/img2_1.webp";
import Img2_2 from "../assets/sports/img2_2.webp";
import Img2_3 from "../assets/sports/img2_3.webp";
import Img2_4 from "../assets/sports/img2_4.webp";
import Img2_5 from "../assets/sports/img2_5.webp";
import Img2_6 from "../assets/sports/img2_6.webp";
import Img2_7 from "../assets/sports/img2_7.webp";

import Slide1 from "../assets/sports/slide1.webp";
import Slide2 from "../assets/sports/slide2.webp";
import Slide3 from "../assets/sports/slide3.webp";

// ===== Container 3 Images (12 images) =====
import Mp1 from "../assets/sports/mp1.webp";
import Mp2 from "../assets/sports/mp2.webp";
import Mp3 from "../assets/sports/mp3.webp";
import Mp4 from "../assets/sports/mp4.webp";
import Mp5 from "../assets/sports/mp5.webp";
import Mp6 from "../assets/sports/mp6.webp";
import Mp7 from "../assets/sports/mp7.webp";
import Mp8 from "../assets/sports/mp8.webp";
import Mp9 from "../assets/sports/mp9.webp";
import Mp10 from "../assets/sports/mp10.webp";
import Mp11 from "../assets/sports/mp11.webp";
import Mp12 from "../assets/sports/mp12.webp";

export default function SportsPage() {
  const [date, setDate] = useState(new Date());

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <Container className="py-5" style={{fontFamily: "Times New Roman" }}>
      {/* =====================================================
          CONTAINER 1: HERO
      ===================================================== */}
      <Card className="mb-4 border-0 shadow-sm">
        <Row className="g-3" style={{ alignItems: "stretch" }}>
          <Col md={6}>
            <Card.Img
              src={HeroImage}
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
          </Col>

          <Col md={6} className="d-flex flex-column justify-content-center">
            <Card.Body>
              <Card.Title className="fw-bold" style={{ fontSize: "24px",fontFamily: "Times New Roman", }}>
                Ashes pitch rated ‘very good’ after two-day Test in Perth
              </Card.Title>

              <Card.Text style={{ fontSize: "16px",fontFamily: "Times New Roman", }}>
                Rating denotes good carry, limited seam movement and consistent
                early bounce.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>

      {/* =====================================================
          CONTAINER 2: TOP STORIES
      ===================================================== */}
      <Card className="mb-4 border-0 shadow-sm p-3">
        <h5 className="fw-bold mb-3">Top Stories</h5>

        {/* ROW 1 */}
        <Row className="g-3 align-items-center">
          {/* Image 1 */}
          <Col md={3}>
            <Card className="border-0 shadow-sm">
              <Card.Img
                src={Img2_1}
                style={{ width: "100%", height: "180px", objectFit: "cover" }}
              />
              <Card.Body className="p-2">
                <Card.Title style={{ fontSize: "15px",fontFamily: "Times New Roman", }}>
                  Batting great Sunil Gavaskar calls for ‘post-mortem’ after
                  India’s Test debacle
                </Card.Title>
                <Card.Text style={{ fontSize: "13px",fontFamily: "Times New Roman", }}>
                  Laos struck first when Palindeth Phettakounh drifted to the
                  back post in the ninth minute to nod home Anoulak.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Image 2 */}
          <Col md={3}>
            <Card className="border-0 shadow-sm">
              <Card.Img
                src={Img2_2}
                style={{ width: "100%", height: "180px", objectFit: "cover" }}
              />
              <Card.Body className="p-2">
                <Card.Title style={{ fontSize: "15px",fontFamily: "Times New Roman", }}>
                  Ashes pitch rated ‘very good’ after two-day Test in Perth
                </Card.Title>
                <Card.Text style={{ fontSize: "13px",fontFamily: "Times New Roman", }}>
                  The games will feature 15 to 17 sports, marking an increase
                  from the 10 scheduled for next year’s pared-down version in
                  Glasgow.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Slider */}
          <Col md={3}>
            <Slider {...sliderSettings}>
              {[Slide1, Slide2, Slide3].map((img, i) => (
                <div key={i}>
                  <Card className="border-0 shadow-sm">
                    <Card.Img
                      src={img}
                      style={{
                        width: "100%",
                        height: "180px",
                        objectFit: "cover",
                      }}
                    />
                    <Card.Body className="p-2">
                      <Card.Title style={{ fontSize: "15px",fontFamily: "Times New Roman", }}>
                        {i + 1}Ahmedabad to host 2030 Centenary Commonwealth
                        Games
                      </Card.Title>
                      <Card.Text style={{ fontSize: "13px",fontFamily: "Times New Roman", }}>
                        The games will feature 15 to 17 sports, marking an
                        increase from the 10 scheduled for next year’s
                        pared-down version in Glasgow.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Slider>
          </Col>

          {/* Image 3 */}
          <Col md={3}>
            <Card className="border-0 shadow-sm">
              <Card.Img
                src={Img2_3}
                style={{ width: "100%", height: "180px", objectFit: "cover" }}
              />
              <Card.Body className="p-2">
                <Card.Title style={{ fontSize: "15px",fontFamily: "Times New Roman", }}>
                  Laos end Pakistan’s winning streak in U-17 Asian Cup
                  Qualifiers
                </Card.Title>
                <Card.Text style={{ fontSize: "13px",fontFamily: "Times New Roman", }}>
                  Laos struck first when Palindeth Phettakounh drifted to the
                  back post in the ninth minute to nod home Anoulak Singsavang’s
                  corner delivery.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* ROW 2 */}
        <Row className="g-3 mt-2">
          {[
            {
              img: Img2_4,
              title: "Pakistan trio in CAS Squash semis",
              desc: "Pakistan trio in CAS Squash semisHamza Khan in the quarter-final beat top seed and world number 42 Karim El Hammamy of Egypt ",
            },
            {
              img: Img2_5,
              title:
                "South Africa condemn India to biggest Test loss for series sweep",
              desc: "Chasing an improbable target of 549, India were all out for 140 on the final day of the contest.",
            },
            {
              img: Img2_6,
              title:
                "Estevao leaves Yamal in the shade, City’s rotation gamble backfires",
              desc: "Chelsea's Estavao nets fabulous goal in 3-0 Champions League win over Barcelona as Premier .",
            },
            {
              img: Img2_7,
              title:
                "Hara-kiri in Perth: Can Stokes reincarnate Test cricket from the ashes",
              desc: "There is a reason it's called Test cricket. It does not reward brilliance in flashes. It .",
            },
          ].map((item, i) => (
            <Col md={3} key={i}>
              <Card className="border-0 shadow-sm">
                <Card.Img
                  src={item.img}
                  style={{ width: "100%", height: "180px", objectFit: "cover" }}
                />
                <Card.Body className="p-2">
                  <Card.Title style={{ fontSize: "15px" }}>
                    {item.title}
                  </Card.Title>
                  <Card.Text style={{ fontSize: "13px" }}>
                    {item.desc}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>

      {/* =====================================================
          CONTAINER 3: MOST POPULAR (12 Images)
      ===================================================== */}
      <Card className="mb-4 border-0 shadow-sm p-3">
        <h5 className="fw-bold mb-3">Most Popular</h5>

        <Row className="g-3">
          {[
            {
              img: Mp1,
              title:
                "‘Justice has been served’, says Arshad Nadeem’s coach Salman Butt after PSB declares lifetim’",
              desc: "PSB says there is no provision authorising a lifetime ban hy.",
            },
            {
              img: Mp2,
              title:
                "South Africa condemn India to biggest Test loss for series sweep",
              desc: "Chasing an improbable target of 549, India were all out for 140 on the final day of the contest collaps.",
            },
            {
              img: Mp3,
              title:
                "PCB’s public spat ends after Rashid Latif ‘unconditionally’ withdraws ",
              desc: "Chairman Mohsin Naqvi welcomes apology, silences predecessor Najam Sethi's .",
            },
            {
              img: Mp4,
              title:
                "Usman Tariq hat-trick destroys Zimbabwe as Pakistan make T20 tri-series final",
              desc: "Chasing a formidable 196, Zimbabwe were skittled for a paltry 126 in 19 overs, ",
            },
            {
              img: Mp5,
              title:
                "Pakistan tennis icon Aisam Qureshi calls time on illustrious career",
              desc: "Announces retirement during opening ceremony of ATP Challenger Cup in Islamabad.Hara-kiri in Perth: Cai",
            },
            {
              img: Mp6,
              title:
                "Hara-kiri in Perth: Can Stokes reincarnate Test cricket from the ashes",
              desc: "There is a reason it's called Test cricket. It does not reward brilliance in flashes. It ",
            },
            {
              img: Mp7,
              title:
                "South Africa condemn India to biggest Test loss for series sweep",
              desc: "Chasing an improbable target of 549, India were all out for 140 on the final day of the contest Zimbabwe .",
            },
            {
              img: Mp8,
              title:
                "‘Justice has been served’, says Arshad Nadeem’s coach Salman Butt after PSB declares ’",
              desc: "PSB says there is no provision authorising a lifetime ban upon ",
            },
            {
              img: Mp9,
              title:
                "India, Pakistan placed in same group for 2026 T20 World Cup",
              desc: "It will be the first time the two teams play each other since their three heated contests at the 2025 Asia Cup.",
            },
            {
              img: Mp10,
              title:
                "‘Trusting the process’ takes Usman Tariq to maiden T20 hat-trick",
              desc: "The mystery spinner produced a spell for the ages, claiming a hat-trick and stunning figures of 4 for 18.",
            },
            {
              img: Mp11,
              title:
                "Nissanka masterclass keeps Sri Lanka’s tri-series hopes alive after drubbing of Zimbabwe",
              desc: "Chasing a modest 147, Nissanka finished unbeaten on 98 from just 58 deliveries — ",
            },
            {
              img: Mp12,
              title:
                "A quick, flavour-packed dish where crispy Fiery Fingers meet zesty salsa and soft tortillas.",
              desc: "The mystery spinner produced a spell for the ages, claiming a hat-trick and .",
            },
          ].map((item, i) => (
            <Col md={3} key={i}>
              <Card className="border-0 shadow-sm">
                <Card.Img
                  src={item.img}
                  style={{ width: "100%", height: "180px", objectFit: "cover" }}
                />
                <Card.Body className="p-2">
                  <Card.Title style={{ fontSize: "15px" }}>
                    {item.title}
                  </Card.Title>
                  <Card.Text style={{ fontSize: "13px" }}>
                    {item.desc}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>

      {/* =====================================================
          CONTAINER 4: CALENDAR
      ===================================================== */}
      <Card className="mb-4 border-0 shadow-sm p-3 align-items-center">
        <Calendar onChange={setDate} value={date} className=" p-3 shadow-sm" />
      </Card>
    </Container>
  );
}
