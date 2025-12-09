import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Slider from "react-slick";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// ================================
// Import Images (Replace with Tech Images)
// ================================
import HeroImage from "../assets/tech/hero-image.webp";

import Img2_1 from "../assets/tech/img2_1.webp";
import Img2_2 from "../assets/tech/img2_2.webp";
import Img2_3 from "../assets/tech/img2_3.webp";
import Img2_4 from "../assets/tech/img2_4.webp";
import Img2_5 from "../assets/tech/img2_5.webp";
import Img2_6 from "../assets/tech/img2_6.webp";
import Img2_7 from "../assets/tech/img2_7.webp";

import Slide1 from "../assets/tech/slide1.webp";
import Slide2 from "../assets/tech/slide2.webp";
import Slide3 from "../assets/tech/slide3.webp";

// ===== Container 3 Images (12 images) =====
import Mp1 from "../assets/tech/mp1.webp";
import Mp2 from "../assets/tech/mp2.webp";
import Mp3 from "../assets/tech/mp3.webp";
import Mp4 from "../assets/tech/mp4.webp";
import Mp5 from "../assets/tech/mp5.webp";
import Mp6 from "../assets/tech/mp6.webp";
import Mp7 from "../assets/tech/mp7.webp";
import Mp8 from "../assets/tech/mp8.webp";
import Mp9 from "../assets/tech/mp9.webp";
import Mp10 from "../assets/tech/mp10.webp";
import Mp11 from "../assets/tech/mp11.webp";
import Mp12 from "../assets/tech/mp12.webp";

export default function TechPage() {
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
                The age of surveillance: George Orwell’s 1984, now streaming in Pakistan
              </Card.Title>

              <Card.Text style={{ fontSize: "16px",fontFamily: "Times New Roman", }}>
                As democratic institutions around the world grapple with declining public trust and as constitutional frameworks struggle to keep pace with technological advancement, the Pakistani example serves as a cautionary tale.
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
                  Meta buried evidence of social media harm: US court filings
                </Card.Title>
                <Card.Text style={{ fontSize: "13px",fontFamily: "Times New Roman", }}>
                Meta scientists worked with survey firm Nielsen to gauge the effect of deactivating Facebook and Instagram..
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
                  Skibidi your 6-7: AFP’s five words of the year
                </Card.Title>
                <Card.Text style={{ fontSize: "13px",fontFamily: "Times New Roman", }}>
                  2025 was the year when Generation Alpha slang entered everyday language and dictionaries with a vengeance.
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
                        Authority members to operate under{i + 1}
                      </Card.Title>
                      <Card.Text style={{ fontSize: "13px",fontFamily: "Times New Roman", }}>
                        Spicy K&N’s Fiery Fingers served with noodles, rice and a tangy homemade sauce, perfect for a flavour-packed meal.
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
                  Malaysia says it plans to ban social media for under-16s from 2026
                </Card.Title>
                <Card.Text style={{ fontSize: "13px",fontFamily: "Times New Roman", }}>
                  The government is reviewing global age-restriction models ahead of enforcing the rule next year.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

        </Row>

        {/* ROW 2 */}
        <Row className="g-3 mt-2">
          {[
            { img: Img2_4, title: "New X feature reveals surprising origins of Trump ‘fan accounts’", desc: "The feature, called “about this account”, can be accessed from any user’s bio and identifies the country."},
            { img: Img2_5, title: "China launches Shenzhou-22 early for stranded space station crew", desc: "Accelerated launch ensures Shenzhou-21 astronauts have a safe return option, after Shenzhou-20 team was " },
            { img: Img2_6, title: "Google, Accel partner to invest millions in at least 10 Indian AI ", desc: "To co-invest up to $2m in each startup; Google plans to invest $15bn over five years to set up" },
            { img: Img2_7, title: "Economic impact or concentration of wealth? Panellists explore AI’s", desc: "Despite its potential, deepfakes, intellectual property issues, and cybersecurity fraud are legitimate"},
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
            { img: Mp1, title: "Google announces free one-year AI Pro Plan for Pakistani students", desc: "Offer allows eligible Pakistani students to access Google's most capable AI features."},
            { img: Mp2, title: "Is Pak Truck Driver the most exciting driving to  from Pakistan?", desc: "Now you can experience trucking through the Karakorum Highway without moving."},
            { img: Mp3, title: "PTA urges YouTube to unblock Dr Israr’s channel", desc: "The unilateral shutdown raises questions about the arbitrary limits of online "},
            { img: Mp4, title: "Explainer: Why did a Cloudflare outage cause websites to go down?", desc: "Websites relying on DNS service providers will be rendered inaccessible if the ." },
            { img: Mp5, title: "Cloudflare says fix implemented, issue resolved after global outage", desc: "X, Spotify, ChatGPT were among major websites affected; Cloudflare says some users hy. " },
            { img: Mp6, title: "Game review: Ghost of Yotei is 40 hours of art", desc: "Though slightly unforgiving, the combat system is a lot of fun to engage with, especially against the back."},
            { img: Mp7, title: "Government establishes Pakistan Digital Authority to implement ‘digital master plan’", desc: "Authority members to operate under the IT ministry on a five-year hy."},
            { img: Mp8, title: "InDrive expands operations to five new cities across Pakistan", desc: "Ride-hailing service says it is looking to provide “seamless, convenient, and reliable mobile."},
            { img: Mp9, title: "Behind generative AI curtain is gruelling, low-paid human work", desc: "Invisible labellers’ toil has allowed self-driving cars to recognise pedestrians and chatbo." },
            { img: Mp10, title: "‘Vibe coding’ is enabling a completely new generation of founders, experts say", desc: "Building prototypes or early-stage products no longer requires large engine." },
            { img: Mp11, title: "Artificial intelligence can run world ‘better than humans’", desc: "Humanoid robots tell UN summit they’re free of biases, emotions that cloud decision-making  large." },
            { img: Mp12, title: "Govt launches virus information service on WhatsApp", desc: "Facebook starts news hub for Pakistan Ramsha Jahangir Updated 31 Mar, 2020 08:42am Authority members to " },
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
        <Calendar onChange={setDate} value={date} className="p-3 shadow-sm" />
      </Card>

    </Container>
  );
}
