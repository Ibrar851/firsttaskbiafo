import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

// Images
import Hed1 from "../assets/popular/hed1.webp";
import Hed2 from "../assets/popular/hed2.webp";
import Hed3 from "../assets/popular/hed3.webp";
import Hed4 from "../assets/popular/hed4.webp";
import Hed5 from "../assets/popular/hed5.webp";
import Hed6 from "../assets/popular/hed6.webp";
import Hed7 from "../assets/popular/hed7.webp";
import Hed8 from "../assets/popular/hed8.webp";
import Hed9 from "../assets/popular/hed9.webp";
import Hed10 from "../assets/popular/hed10.webp";

import Stable1 from "../assets/popular/stable1.webp";
import Stable2 from "../assets/popular/stable2.webp";
import Stable3 from "../assets/popular/stable3.webp";

import Need1 from "../assets/popular/need1.webp";
import Need2 from "../assets/popular/need2.webp";
import Need3 from "../assets/popular/need3.webp";
import Need4 from "../assets/popular/need4.webp";
import Need5 from "../assets/popular/need5.webp";

// ===== Reusable Section Component =====
const ArticleSection = ({ title, subtitle, articles }) => (
  <>
    <h2 className="mb-2">{title}</h2>
    {subtitle && <p className="text-muted mb-4">{subtitle}</p>}
    <hr className="mb-4" style={{ borderColor: "#6c6a6aff" }} />

    {articles.map((item) => (
      <Card className="mb-3" key={item.id}>
        <Card.Body>
          <Row className="align-items-center">
            <Col xs={4} md={3}>
              <Card.Img src={item.img} alt={item.title} className="img-fluid" />
            </Col>
            <Col xs={8} md={9}>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text className="text-muted">{item.description}</Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    ))}
  </>
);

export default function PopularPage() {
  const HedItems = [
    {
      id: 1,
      img: Hed1,
      title: "No passenger with genuine documents should be barred...",
      description: "Interior minister says...",
    },
    {
      id: 2,
      img: Hed2,
      title: "FBI director says suspect in US National Guard shooting...",
      description: "Suspect was identified...",
    },
    {
      id: 3,
      img: Hed3,
      title: "UAE not issuing visas to Pakistanis...",
      description: "Says Saudi Arabia...",
    },
    {
      id: 4,
      img: Hed4,
      title: "Amid reports of arbitrary offloading of passengers...",
      description: "FIA Lahore chief...",
    },
    {
      id: 5,
      img: Hed5,
      title: "Indian delegation pulls out of Oxford Union debate...",
      description: "Sources familiar...",
    },
    {
      id: 6,
      img: Hed6,
      title: "Finland to close embassy in Pakistan...",
      description: "Embassies in Afghanistan...",
    },
    {
      id: 7,
      img: Hed7,
      title: "Rising UAE visa rejections leave Pakistani travellers in limbo",
      description: "Travel agents say...",
    },
    {
      id: 8,
      img: Hed8,
      title: "No Chief of Defence Forces notification as key deadline passes",
      description: "Some legal experts argue...",
    },
    {
      id: 9,
      img: Hed9,
      title: "Trump says US will ‘permanently pause’ migration...",
      description: "This is necessary because...",
    },
    {
      id: 10,
      img: Hed10,
      title: "Gen Mirza bows out as last CJCSC...",
      description: "Gen Mirza has retired...",
    },
  ];

  const StableItems = [
    {
      id: 1,
      img: Stable1,
      title: "Bahria Town Lahore residents left stumbling in the dark...",
      description:
        "“We will not restore the power supply till the bills have been paid,” says Lesco official.",
    },
    {
      id: 2,
      img: Stable2,
      title: "Pakistan in South Asia’s democracy",
      description:
        "South Asia must see itself as a community of democratic practice.",
    },
    {
      id: 3,
      img: Stable3,
      title: "FO says use of drones in attack on Chinese workers...",
      description: "According to Tajik authorities...",
    },
  ];

  const NeedItems = [
    {
      id: 1,
      img: Need1,
      title: "Putin to discuss ‘privileged partnership’ with Modi...",
      description: "Russian president last visited India...",
    },
    {
      id: 2,
      img: Need2,
      title: "Amid exit speculations, 3 IHC judges ‘pack up’ chambers",
      description: "Insiders say Justices...",
    },
    {
      id: 3,
      img: Need3,
      title:
        "Sanaullah voices support for meetings between Imran and relatives",
      description: "State minister says...",
    },
    {
      id: 4,
      img: Need4,
      title: "Special ceremony held in honour of country’s last CJCSC",
      description: "Gen Mirza pays tribute...",
    },
    {
      id: 5,
      img: Need5,
      title:
        "Afghan forces open fire across border to facilitate infiltration...",
      description: "Lt Gen Chaudhry says...",
    },
  ];

  return (
    <Container className="py-5 px-5" style={{fontFamily: "Times New Roman" }}>
      <ArticleSection
        title="TRENDING NOW"
        subtitle="Read the most popular stories across the site"
        articles={HedItems}
      />

      <br />
      <br />

      <ArticleSection
        title="Cleaning the stables"
        subtitle="ALTHOUGH former prime minister Nawaz Sharif has largely kept a low profile after returning to Pakistan in 2023..."
        articles={StableItems}
      />

      <br />
      <br />

      <ArticleSection
        title="Needless moralising"
        subtitle="IT is disquieting that such troubling remarks have been made in a case as brutal as that of Noor Mukadam’s murder..."
        articles={NeedItems}
      />
    </Container>
  );
}
