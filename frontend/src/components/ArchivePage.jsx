import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import {
  FaFacebookF,
  FaWhatsapp,
  FaXTwitter,
  FaEnvelope,
} from "react-icons/fa6";

// ------- IMPORT LOGO -------
import Logo from "../assets/Archive/logo.jpg";

// ------- IMPORT NEWS IMAGES -------
import Hed1 from "../assets/archive/hed1.webp";
import Hed2 from "../assets/archive/hed2.webp";
import Hed3 from "../assets/archive/hed3.webp";
import Hed4 from "../assets/archive/hed4.webp";
import Hed5 from "../assets/archive/hed5.webp";
import Hed6 from "../assets/archive/hed6.webp";
import Hed7 from "../assets/archive/hed7.webp";
import Hed8 from "../assets/archive/hed8.webp";
import Hed9 from "../assets/archive/hed9.webp";
import Hed10 from "../assets/Archive/hed10.webp";
import Hed11 from "../assets/archive/hed11.webp";
import Hed12 from "../assets/archive/hed12.webp";
import Hed13 from "../assets/archive/hed13.webp";
import Hed14 from "../assets/archive/hed14.webp";
import Hed15 from "../assets/archive/hed15.webp";
import Hed16 from "../assets/archive/hed16.webp";
import Hed17 from "../assets/archive/hed17.webp";
import Hed18 from "../assets/archive/hed18.webp";

export default function ArchivePage() {
  const [value, setValue] = React.useState(new Date());
  const [showCalendar, setShowCalendar] = React.useState(false);

  const HedItems = [
    {
      id: 1,
      img: Hed1,
      title:
        "No passenger with genuine documents should be barred from travelling, says Naqvi after visiting Islamabad airport",
      description:
        "Interior minister says those attempting to travel on fake or unverified documents will not be allowed to do so under any circumstances..",
    },
    {
      id: 2,
      img: Hed2,
      title:
        "FBI director says suspect in US National Guard shooting worked with partner forces in Afghanistan",
      description:
        "Suspect was identified by the Department of Homeland Security as an Afghan national.",
    },
    {
      id: 3,
      img: Hed3,
      title:
        "UAE not issuing visas to Pakistanis, interior ministry official tells Senate body",
      description:
        "Says Saudi Arabia, UAE “stopped short of imposing ban on Pakistani passports”.",
    },
    {
      id: 4,
      img: Hed4,
      title:
        "Amid reports of arbitrary offloading of passengers, FIA official says only those without valid documents being barred",
      description:
        "FIA Lahore chief assures public that immigration staff will facilitate all legitimate travellers.",
    },
    {
      id: 5,
      img: Hed5,
      title:
        "Indian delegation pulls out of Oxford Union debate in ‘collective retreat’",
      description: "Sources familiar with matter say shift was very bizarre.",
    },
    {
      id: 6,
      img: Hed6,
      title: "Finland to close embassy in Pakistan",
      description:
        "Linked to political situation and limited economic relations.",
    },
    {
      id: 7,
      img: Hed7,
      title: "Rising UAE visa rejections leave Pakistani travellers in limbo",
      description: "Rejection rate now 70–80% for first-time applicants.",
    },
    {
      id: 8,
      img: Hed8,
      title: "No Chief of Defence Forces notification as key deadline passes",
      description: "Legal experts divided on whether tenure lapsed.",
    },
    {
      id: 9,
      img: Hed9,
      title:
        "Trump says US will ‘permanently pause’ migration from ‘all third world countries’",
      description: "Says unchecked migration has weakened American society.",
    },
    {
      id: 10,
      img: Hed10,
      title: "Gen Mirza bows out as last CJCSC",
      description: "COAS Asim Munir set to assume new role.",
    },
    {
      id: 11,
      img: Hed11,
      title: "No passenger with genuine documents should be barred",
      description: "Interior minister assures facilitation.",
    },
    {
      id: 12,
      img: Hed12,
      title: "Afghan suspect involved in US National Guard shooting",
      description: "Identified by Department of Homeland Security.",
    },
    {
      id: 13,
      img: Hed13,
      title: "UAE not issuing visas to Pakistanis",
      description: "Visa facilitation reforms being discussed.",
    },
    {
      id: 14,
      img: Hed14,
      title: "Offloading concerns addressed by FIA",
      description: "Public assured valid travellers won't face issues.",
    },
    {
      id: 15,
      img: Hed15,
      title: "Indian delegation pulls out of debate",
      description: "Very unusual change.",
    },
    {
      id: 16,
      img: Hed16,
      title: "Finland shutting embassy",
      description: "Reasons strategic and operational.",
    },
    {
      id: 17,
      img: Hed17,
      title: "UAE visas harder to get",
      description: "Applicants with UAE family ties fare better.",
    },
    {
      id: 18,
      img: Hed18,
      title: "Deadline passes without notification",
      description: "Some interpret the tenure as lapsed.",
    },
  ];

  return (
    <Container
      className="py-5 p-6 m-0"
      style={{ fontFamily: "Times New Roman", }}
    >
      {/* ---------------- MINI CALENDAR BAR ---------------- */}
      <div style={{ marginBottom: "3px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
          }}
          onClick={() => setShowCalendar(!showCalendar)}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/747/747310.png"
            alt="calendar"
            style={{ width: "30px" }}
          />
          <div
            style={{
              border: "1px solid #bfbfbf",
              padding: "8px 15px",
              minWidth: "280px",
              fontSize: "18px",
              color: "#4a4a4a",
            }}
          >
            {value.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>

        {showCalendar && (
          <div className="mt-3 shadow-sm p-3" style={{ width: "320px" }}>
            <Calendar onChange={setValue} value={value} />
          </div>
        )}
      </div>

      {/* ---------------- TOP BLACK LINE + LOGO ---------------- */}
      <div className="position-relative mb-5">
        <div
          style={{
            width: "100%",
            height: "2px",
            backgroundColor: "black",
            marginTop: "45px",
          }}
        ></div>
        <img
          src={Logo}
          alt="logo"
          style={{
            width: "160px",
            position: "absolute",
            top: "-50px",
            right: "0",
          }}
        />
      </div>

      <h2 className="mb-4">Newspaper - Front Page - December 1, 2025</h2>

      {/* ---------------- NEWS CARDS ---------------- */}
      {HedItems.map((item) => (
        <Card className="mb-3" style={{fontFamily: "Times New Roman" }} key={item.id}>
          <Card.Body>
            <Row className="align-items-start">
              <Col xs={12} md={3}>
                <Card.Img
                  src={item.img}
                  alt={item.title}
                  className="img-fluid mb-3 mb-md-0"
                />
              </Col>
              <Col xs={12} md={9}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className="text-muted">{item.description}</Card.Text>
                <div className="d-flex gap-3 mt-2">
                  <FaFacebookF size={20} style={{ cursor: "pointer" }} />
                  <FaWhatsapp size={20} style={{ cursor: "pointer" }} />
                  <FaXTwitter size={20} style={{ cursor: "pointer" }} />
                  <FaEnvelope size={20} style={{ cursor: "pointer" }} />
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}

      {/* ---------------- BOTTOM CALENDAR ---------------- */}
      <div className="mb-4 border-0 shadow-sm p-3 align-items-center">
        <Calendar onChange={setValue} value={value} className="p-3 shadow-sm" />
      </div>
    </Container>
  );
}
