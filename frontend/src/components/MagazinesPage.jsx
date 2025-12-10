import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Slider from "react-slick";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// ===== Container 1 hero-image (1 images) =====
import HeroImage from "../assets/Magazines/hero-image.webp";
import Logo from "../assets/magazines/logo.png";
import Dawn from "../assets/magazines/dawn.png";

// ===== Container 2 Branded Content(10 images) =====
import Img2_1 from "../assets/magazines/img2_1.webp";
import Img2_2 from "../assets/magazines/img2_2.webp";
import Img2_3 from "../assets/magazines/img2_3.webp";
import Img2_4 from "../assets/magazines/img2_4.webp";
import Img2_5 from "../assets/magazines/img2_5.webp";
import Img2_6 from "../assets/magazines/img2_6.webp";
import Img2_7 from "../assets/magazines/img2_7.webp";m
import Slide1 from "../assets/magazines/slide1.webp";
import Slide2 from "../assets/magazines/slide2.webp";
import Slide3 from "../assets/magazines/slide3.webp";

// ===== Container 4 Images (12 images) =====
import Icon from "../assets/magazines/icon.png";
import Mp1 from "../assets/magazines/mp1.webp";
import Mp2 from "../assets/magazines/mp2.webp";
import Mp3 from "../assets/magazines/mp3.webp";
import Mp4 from "../assets/magazines/mp4.webp";
import Mp5 from "../assets/magazines/mp5.webp";
import Mp6 from "../assets/magazines/mp6.webp";
import Mp7 from "../assets/magazines/mp7.webp";
import Mp8 from "../assets/magazines/mp8.webp";
import Mp9 from "../assets/magazines/mp9.webp";
import Mp10 from "../assets/magazines/mp10.webp";
import Mp11 from "../assets/magazines/mp11.webp";
import Mp12 from "../assets/magazines/mp12.webp";m
// ===== Container 3 a & b(8 images) =====
import Ab from "../assets/magazines/ab.png";
import Ab1 from "../assets/magazines/ab1.webp";
import Ab2 from "../assets/magazines/ab2.webp";
import Ab3 from "../assets/magazines/ab3.webp";
import Ab4 from "../assets/magazines/ab4.webp";
import Ab5 from "../assets/magazines/ab5.webp";
import Ab6 from "../assets/magazines/ab6.webp";
import Ab7 from "../assets/magazines/ab7.webp";
import Ab8 from "../assets/magazines/ab8.webp";

// ===== CONTAINER 5: More From Eos (8 img)=====
import Eos1 from "../assets/magazines/eos1.webp";
import Eos2 from "../assets/magazines/eos2.webp";
import Eos3 from "../assets/magazines/eos3.webp";
import Eos4 from "../assets/magazines/eos4.webp";
import Eos5 from "../assets/magazines/eos5.webp";
import Eos6 from "../assets/magazines/eos6.webp";
import Eos7 from "../assets/magazines/eos7.webp";
import Eos8 from "../assets/magazines/eos8.webp";

// ===== CONTAINER 6: More From Icon (8 img)=====
import Icon1 from "../assets/magazines/icon1.webp";
import Icon2 from "../assets/magazines/icon2.webp";
import Icon3 from "../assets/magazines/icon3.webp";
import Icon4 from "../assets/magazines/icon4.webp";
import Icon5 from "../assets/magazines/icon5.webp";
import Icon6 from "../assets/magazines/icon6.webp";
import Icon7 from "../assets/magazines/icon7.webp";
import Icon8 from "../assets/magazines/icon8.webp";

//=== CONTAINER 7: More From Business & Finance (8 img)==
import Fin1 from "../assets/magazines/fin1.webp";
import Fin2 from "../assets/magazines/fin2.webp";
import Fin3 from "../assets/magazines/fin3.webp";
import Fin4 from "../assets/magazines/fin4.webp";
import Fin5 from "../assets/magazines/fin5.webp";
import Fin6 from "../assets/magazines/fin6.webp";
import Fin7 from "../assets/magazines/fin7.webp";
import Fin8 from "../assets/magazines/fin8.webp";

export default function MagazinesPage() {
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
    <Container className="py-5">
      {/* =====================================================
          CONTAINER 1: HERO WITH LOGO OVERLAY
      ===================================================== */}
      <Card className="mb-4 border-0 shadow-sm">
        <Row className="g-3" style={{ alignItems: "stretch" }}>
          <Col md={6}>
            {/* ---- IMAGE WRAPPER WITH LOGO ---- */}
            <div style={{ position: "relative" }}>
              {/* OVERLAY LOGO */}
              <img
                src={Logo}
                alt="logo"
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  width: "90px",
                  zIndex: 10,
                }}
              />

              {/* HERO IMAGE */}
              <Card.Img
                src={HeroImage}
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              />
            </div>
          </Col>

          <Col md={6} className="d-flex flex-column justify-content-center">
            <Card.Body>
              <Card.Title
                className="fw-bold"
                style={{ fontSize: "24px", fontFamily: "Times New Roman" }}
              >
                The age of surveillance: George Orwell’s 1984, now streaming in
                Pakistan
              </Card.Title>

              <Card.Text style={{ fontSize: "16px" }}>
                As democratic institutions around the world grapple with
                declining public trust and as constitutional frameworks struggle
                to keep pace with technological advancement, the Pakistani
                example serves as a cautionary tale.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>

      {/*==================
          CONTAINER 2:
      =====================*/}
      <Card className="mb-4 border-0 shadow-sm p-3">
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
                <Card.Title
                  style={{ fontSize: "15px", fontFamily: "Times New Roman" }}
                >
                  Meta buried evidence of social media harm: US court filings
                </Card.Title>
                <Card.Text
                  style={{ fontSize: "13px", fontFamily: "Times New Roman" }}
                >
                  Meta scientists worked with survey firm Nielsen to gauge the
                  effect of deactivating Facebook and Instagram..
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
                <Card.Title
                  style={{ fontSize: "15px", fontFamily: "Times New Roman" }}
                >
                  Skibidi your 6-7: AFP’s five words of the year
                </Card.Title>
                <Card.Text
                  style={{ fontSize: "13px", fontFamily: "Times New Roman" }}
                >
                  2025 was the year when Generation Alpha slang entered everyday
                  language and dictionaries with a vengeance.
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
                      <Card.Title
                        style={{
                          fontSize: "15px",
                          fontFamily: "Times New Roman",
                        }}
                      >
                        Authority members to operate under{i + 1}
                      </Card.Title>
                      <Card.Text
                        style={{
                          fontSize: "13px",
                          fontFamily: "Times New Roman",
                        }}
                      >
                        Spicy K&N’s Fiery Fingers served with noodles, rice and
                        a tangy homemade sauce, perfect for a flavour-packed
                        meal.
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
                <Card.Title
                  style={{ fontSize: "15px", fontFamily: "Times New Roman" }}
                >
                  Malaysia says it plans to ban social media for under-16s from
                  2026
                </Card.Title>
                <Card.Text
                  style={{ fontSize: "13px", fontFamily: "Times New Roman" }}
                >
                  The government is reviewing global age-restriction models
                  ahead of enforcing the rule next year.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* ROW 2 */}
        <Row className="g-3 mt-2" style={{ fontFamily: "Times New Roman" }}>
          {[
            {
              img: Img2_4,
              title:
                "New X feature reveals surprising origins of Trump ‘fan accounts’",
              desc: "The feature, called “about this account”, can be accessed from any user’s bio and identifies the country.",
            },
            {
              img: Img2_5,
              title:
                "China launches Shenzhou-22 early for stranded space station crew",
              desc: "Accelerated launch ensures Shenzhou-21 astronauts have a safe return option, after Shenzhou-20 team was ",
            },
            {
              img: Img2_6,
              title:
                "Google, Accel partner to invest millions in at least 10 Indian AI ",
              desc: "To co-invest up to $2m in each startup; Google plans to invest $15bn over five years to set up",
            },
            {
              img: Img2_7,
              title:
                "Economic impact or concentration of wealth? Panellists explore AI’s",
              desc: "Despite its potential, deepfakes, intellectual property issues, and cybersecurity fraud are legitimate",
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
      <Card className="mb-4 border-0 shadow-sm p-3">
        <Row className="g-3" style={{ fontFamily: "Times New Roman" }}>
          {[
            {
              img: Mp1,
              title:
                "Google announces free one-year AI Pro Plan for Pakistani students",
              desc: "Offer allows eligible Pakistani students to access Google's most capable AI features.",
            },
            {
              img: Mp2,
              title:
                "Is Pak Truck Driver the most exciting driving to  from Pakistan?",
              desc: "Now you can experience trucking through the Karakorum Highway without moving.",
            },
            {
              img: Mp3,
              title: "PTA urges YouTube to unblock Dr Israr’s channel",
              desc: "The unilateral shutdown raises questions about the arbitrary limits of online ",
            },
            {
              img: Mp4,
              title:
                "Explainer: Why did a Cloudflare outage cause websites to go down?",
              desc: "Websites relying on DNS service providers will be rendered inaccessible if the .",
            },
            {
              img: Mp5,
              title:
                "Cloudflare says fix implemented, issue resolved after global outage",
              desc: "X, Spotify, ChatGPT were among major websites affected; Cloudflare says some users hy. ",
            },
            {
              img: Mp6,
              title: "Game review: Ghost of Yotei is 40 hours of art",
              desc: "Though slightly unforgiving, the combat system is a lot of fun to engage with, especially against the back.",
            },
            {
              img: Mp7,
              title:
                "Government establishes Pakistan Digital Authority to implement ‘digital master plan’",
              desc: "Authority members to operate under the IT ministry on a five-year hy.",
            },
            {
              img: Mp8,
              title:
                "InDrive expands operations to five new cities across Pakistan",
              desc: "Ride-hailing service says it is looking to provide “seamless, convenient, and reliable mobile.",
            },
            {
              img: Mp9,
              title:
                "Behind generative AI curtain is gruelling, low-paid human work",
              desc: "Invisible labellers’ toil has allowed self-driving cars to recognise pedestrians and chatbo.",
            },
            {
              img: Mp10,
              title:
                "‘Vibe coding’ is enabling a completely new generation of founders, experts say",
              desc: "Building prototypes or early-stage products no longer requires large engine.",
            },
            {
              img: Mp11,
              title:
                "Artificial intelligence can run world ‘better than humans’",
              desc: "Humanoid robots tell UN summit they’re free of biases, emotions that cloud decision-making  large.",
            },
            {
              img: Mp12,
              title: "Govt launches virus information service on WhatsApp",
              desc: "Facebook starts news hub for Pakistan Ramsha Jahangir Updated 31 Mar, 2020 08:42am Authority members to ",
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

      {/* Full Horizontal Line */}
      <div
        style={{
          width: "100%",
          height: "0.5px",
          backgroundColor: "black",
        }}
      ></div>

      {/* ==========================================
        CONTAINER 3: A & B (With Line + Icon)
      ============================================== */}

      <Card className="mb-4 border-0 shadow-sm p-3">
        {/* ---- TOP LINE WITH ICON + TEXT ---- */}
        <div style={{ position: "relative", marginBottom: "60px" }}>
          {/* LEFT BOTTOM AB */}
          <img
            src={Ab}
            alt="ab"
            style={{
              position: "absolute",
              bottom: "-30px",
              left: "0",
              width: "40px",
              hight: "40px",
            }}
          />
        </div>

        {/* ------ 8 IMAGES GRID ------ */}
        <Row className="g-3" style={{ fontFamily: "Times New Roman" }}>
          {[
            {
              img: Ab1,
              title:
                "Google announces free one-year AI Pro Plan for Pakistani students",
              desc: "Offer allows eligible Pakistani students to access Google's most capable AI features.",
            },
            {
              img: Ab2,
              title:
                "Is Pak Truck Driver the most exciting driving to from Pakistan?",
              desc: "Now you can experience trucking through the Karakorum Highway without moving.",
            },
            {
              img: Ab3,
              title: "PTA urges YouTube to unblock Dr Israr’s channel",
              desc: "The unilateral shutdown raises questions about the arbitrary limits of online",
            },
            {
              img: Ab4,
              title:
                "Explainer: Why did a Cloudflare outage cause websites to go down?",
              desc: "Websites relying on DNS services can go inaccessible instantly.",
            },
            {
              img: Ab5,
              title: "Cloudflare says fix implemented after global outage",
              desc: "X, Spotify, ChatGPT among websites affected; issue resolved for many users.",
            },
            {
              img: Ab6,
              title: "Game review: Ghost of Yotei is 40 hours of art",
              desc: "A tough but beautiful combat-focused experience set against a scenic backdrop.",
            },
            {
              img: Ab7,
              title: "Govt establishes Pakistan Digital Authority",
              desc: "Authority members to operate directly under the IT ministry.",
            },
            {
              img: Ab8,
              title: "InDrive expands to five new cities across Pakistan",
              desc: "Company aims to provide seamless and reliable mobility services.",
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

      {/* ==========================================
        CONTAINER 4: More From Eos (With Line + Icon)
      ============================================== */}

      <Card className="mb-4 border-0 shadow-sm p-3">
        {/* ---- TOP LINE WITH ICON + TEXT ---- */}
        <div style={{ position: "relative", marginBottom: "60px" }}>
          {/* Full Horizontal Line */}
          <div
            style={{
              width: "100%",
              height: "0.5px",
              backgroundColor: "black",
            }}
          ></div>

          {/* LEFT BOTTOM ICON */}
          <img
            src={Icon}
            alt="icon"
            style={{
              position: "absolute",
              bottom: "-30px",
              left: "0",
              width: "90px",
            }}
          />

          {/* RIGHT TOP TEXT */}
          <span
            style={{
              position: "absolute",
              top: "-22px",
              right: "0",
              fontSize: "16px",
              textTransform: "uppercase",
              color: "#8B0000",
              fontWeight: "600",
              letterSpacing: "1px",
              cursor: "pointer",
            }}
          >
            MORE FROM EOS
          </span>
        </div>

        {/* ------ 8 IMAGES GRID ------ */}
        <Row className="g-3" style={{ fontFamily: "Times New Roman" }}>
          {[
            {
              img: Eos1,
              title:
                "Google announces free one-year AI Pro Plan for Pakistani students",
              desc: "Offer allows eligible Pakistani students to access Google's most capable AI features.",
            },
            {
              img: Eos2,
              title:
                "Is Pak Truck Driver the most exciting driving to from Pakistan?",
              desc: "Now you can experience trucking through the Karakorum Highway without moving.",
            },
            {
              img: Eos3,
              title: "PTA urges YouTube to unblock Dr Israr’s channel",
              desc: "The unilateral shutdown raises questions about the arbitrary limits of online",
            },
            {
              img: Eos4,
              title:
                "Explainer: Why did a Cloudflare outage cause websites to go down?",
              desc: "Websites relying on DNS services can go inaccessible instantly.",
            },
            {
              img: Eos5,
              title: "Cloudflare says fix implemented after global outage",
              desc: "X, Spotify, ChatGPT among websites affected; issue resolved for many users.",
            },
            {
              img: Eos6,
              title: "Game review: Ghost of Yotei is 40 hours of art",
              desc: "A tough but beautiful combat-focused experience set against a scenic backdrop.",
            },
            {
              img: Eos7,
              title: "Govt establishes Pakistan Digital Authority",
              desc: "Authority members to operate directly under the IT ministry.",
            },
            {
              img: Eos8,
              title: "InDrive expands to five new cities across Pakistan",
              desc: "Company aims to provide seamless and reliable mobility services.",
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
    CONTAINER 5: Business & Finance (With Line + Icon)
===================================================== */}

      <Card className="mb-4 border-0 shadow-sm p-3">
        {/* ---- TOP LINE WITH ICON + TEXT ---- */}
        <div style={{ position: "relative", marginBottom: "60px" }}>
          {/* Full Horizontal Line */}
          <div
            style={{
              width: "100%",
              height: "4px",
              backgroundColor: "black",
            }}
          ></div>
          {/* LIFT TOP TEXT */}
          <span
            style={{
              position: "absolute",
              top: "-22px",
              right: "0",
              fontSize: "16px",
              textTransform: "uppercase",
              color: "#8B0000",
              fontWeight: "600",
              letterSpacing: "1px",
              cursor: "pointer",
            }}
          >
            More From Icon
          </span>

          {/* RIGHT BOTTOM TEXT */}
          <span
            style={{
              position: "absolute",
              bottom: "-22px",
              left: "0",
              fontSize: "16px",
              textTransform: "uppercase",
              color: "#8B0000",
              fontWeight: "600",
              letterSpacing: "1px",
              cursor: "pointer",
            }}
          >
            Business & Finance
          </span>
        </div>

        {/* ------ 8 IMAGES GRID ------ */}
        <Row className="g-3" style={{ fontFamily: "Times New Roman" }}>
          {[
            {
              img: Icon1,
              title:
                "Google announces free one-year AI Pro Plan for Pakistani students",
              desc: "Offer allows eligible Pakistani students to access Google's most capable AI features.",
            },
            {
              img: Icon2,
              title:
                "Is Pak Truck Driver the most exciting driving to from Pakistan?",
              desc: "Now you can experience trucking through the Karakorum Highway without moving.",
            },
            {
              img: Icon3,
              title: "PTA urges YouTube to unblock Dr Israr’s channel",
              desc: "The unilateral shutdown raises questions about the arbitrary limits of online",
            },
            {
              img: Icon4,
              title:
                "Explainer: Why did a Cloudflare outage cause websites to go down?",
              desc: "Websites relying on DNS services can go inaccessible instantly.",
            },
            {
              img: Icon5,
              title: "Cloudflare says fix implemented after global outage",
              desc: "X, Spotify, ChatGPT among websites affected; issue resolved for many users.",
            },
            {
              img: Icon6,
              title: "Game review: Ghost of Yotei is 40 hours of art",
              desc: "A tough but beautiful combat-focused experience set against a scenic backdrop.",
            },
            {
              img: Icon7,
              title: "Govt establishes Pakistan Digital Authority",
              desc: "Authority members to operate directly under the IT ministry.",
            },
            {
              img: Icon8,
              title: "InDrive expands to five new cities across Pakistan",
              desc: "Company aims to provide seamless and reliable mobility services.",
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
    CONTAINER 6: More From Eos (With Line + Icon)
===================================================== */}

      <Card className="mb-4 border-0 shadow-sm p-3">
        {/* ---- TOP LINE WITH ICON + TEXT ---- */}
        <div style={{ position: "relative", marginBottom: "60px" }}>
          {/* Full Horizontal Line */}
          <div
            style={{
              width: "100%",
              height: "0.5px",
              backgroundColor: "black",
            }}
          ></div>

          {/* LEFT BOTTOM ICON */}
          <img
            src={Dawn}
            alt="dawn"
            style={{
              position: "absolute",
              bottom: "-50px",
              left: "0",
              width: "90px",
            }}
          />

          {/* RIGHT TOP TEXT */}
          <span
            style={{
              position: "absolute",
              bottom: "-40px",
              right: "0",
              fontSize: "16px",
              textTransform: "uppercase",
              color: "#8B0000",
              fontWeight: "600",
              letterSpacing: "1px",
              cursor: "pointer",
            }}
          >
            More From Business & Finance
          </span>
        </div>

        {/* ------ 8 IMAGES GRID ------ */}
        <Row className="g-3" style={{ fontFamily: "Times New Roman" }}>
          {[
            {
              img: Fin1,
              title:
                "Google announces free one-year AI Pro Plan for Pakistani students",
              desc: "Offer allows eligible Pakistani students to access Google's most capable AI features.",
            },
            {
              img: Fin2,
              title:
                "Is Pak Truck Driver the most exciting driving to from Pakistan?",
              desc: "Now you can experience trucking through the Karakorum Highway without moving.",
            },
            {
              img: Fin3,
              title: "PTA urges YouTube to unblock Dr Israr’s channel",
              desc: "The unilateral shutdown raises questions about the arbitrary limits of online",
            },
            {
              img: Fin4,
              title:
                "Explainer: Why did a Cloudflare outage cause websites to go down?",
              desc: "Websites relying on DNS services can go inaccessible instantly.",
            },
            {
              img: Fin5,
              title: "Cloudflare says fix implemented after global outage",
              desc: "X, Spotify, ChatGPT among websites affected; issue resolved for many users.",
            },
            {
              img: Fin6,
              title: "Game review: Ghost of Yotei is 40 hours of art",
              desc: "A tough but beautiful combat-focused experience set against a scenic backdrop.",
            },
            {
              img: Fin7,
              title: "Govt establishes Pakistan Digital Authority",
              desc: "Authority members to operate directly under the IT ministry.",
            },
            {
              img: Fin8,
              title: "InDrive expands to five new cities across Pakistan",
              desc: "Company aims to provide seamless and reliable mobility services.",
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
          CONTAINER 8: CALENDAR
      ===================================================== */}
      <Card className="mb-4 border-0 shadow-sm p-3 align-items-center">
        <Calendar onChange={setDate} value={date} className="p-3 shadow-sm" />
      </Card>
    </Container>
  );
}
