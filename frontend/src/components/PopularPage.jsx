import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

// Pehla section ke images (Hed1–Hed10)
import Hed1 from "../assets/Popular/hed1.webp";
import Hed2 from "../assets/Popular/hed2.webp";
import Hed3 from "../assets/Popular/hed3.webp";
import Hed4 from "../assets/Popular/hed4.webp";
import Hed5 from "../assets/Popular/hed5.webp";
import Hed6 from "../assets/Popular/hed6.webp";
import Hed7 from "../assets/Popular/hed7.webp";
import Hed8 from "../assets/Popular/hed8.webp";
import Hed9 from "../assets/Popular/hed9.webp";
import Hed10 from "../assets/Popular/hed10.webp";

// New middle section images (Stable1–Stable3)
import Stable1 from "../assets/Popular/stable1.webp";
import Stable2 from "../assets/Popular/stable2.webp";
import Stable3 from "../assets/Popular/stable3.webp";

// Dusre section ke images (need1–need6)
import Need1 from "../assets/Popular/need1.webp";
import Need2 from "../assets/Popular/need2.webp";
import Need3 from "../assets/Popular/need3.webp";
import Need4 from "../assets/Popular/need4.webp";
import Need5 from "../assets/Popular/need5.webp";

export default function PopularPage() {
  // Pehla section items
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
        "Says Saudi Arabia, UAE “stopped short of imposing ban on Pakistani passports”; finance ministry outlines visa facilitation reforms shared by UAE envoy, according to which nearly 500 visas are processed at new centre.",
    },
    {
      id: 4,
      img: Hed4,
      title:
        "Amid reports of arbitrary offloading of passengers, FIA official says only those without valid documents being barred from travelling abroad",
      description:
        "FIA Lahore chief assures public that immigration staff will facilitate all those who travelling abroad for legitimate reasons with valid documents.",
    },
    {
      id: 5,
      img: Hed5,
      title:
        "Indian delegation pulls out of Oxford Union debate in ‘collective retreat’, Pakistan’s UK mission says",
      description:
        "Sources familiar with matter say last-minute shift “very bizarre”.",
    },
    {
      id: 6,
      img: Hed6,
      title:
        "Finland to close embassy in Pakistan over ‘operational and strategic’ reasons",
      description:
        "Embassies in Afghanistan and Myanmar to be shut down as well; reasons linked to political situation and limited commercial and economic relations with Finland.",
    },
    {
      id: 7,
      img: Hed7,
      title: "Rising UAE visa rejections leave Pakistani travellers in limbo",
      description:
        "Travel agents say first-time and single-entry visa applications for Dubai now face rejection rates of 70 to 80 per cent, while applicants with family ties in the UAE have a better chance of approval.",
    },
    {
      id: 8,
      img: Hed8,
      title: "No Chief of Defence Forces notification as key deadline passes",
      description:
        "Some legal experts argue tenure can be interpreted as having lapsed, others say no need for fresh notification after legal tweaks.",
    },
    {
      id: 9,
      img: Hed9,
      title:
        "Trump says US will ‘permanently pause’ migration from ‘all third world countries’",
      description:
        "This is necessary because unchecked migration has weakened American society and strained its resources,he says.",
    },
    {
      id: 10,
      img: Hed10,
      title:
        "Gen Mirza bows out as last CJCSC; chief of defence forces yet to be notified",
      description:
        "Gen Mirza has retired as the 18th and final occupant of the CJCSC office; COAS Field Marshal Asim Munir set to assume role of first chief of defence forces.",
    },
  ];

  // Middle Section (Cleaning the stables)
  const StableItems = [
    {
      id: 1,
      img: Stable1,
      title: "Bahria Town Lahore residents left stumbling in the dark as power supply cut over non-payment of Rs682m in dues",
      description:
        "“We will not restore the power supply till the bills have been paid,” says Lesco official.",
    },
    {
      id: 2,
      img: Stable2,
      title: "Pakistan in South Asia’s democracy",
      description: "South Asia must see itself as a community of democratic practice.",
    },
    {
      id: 3,
      img: Stable3,
      title: "FO says use of drones in attack on Chinese workers in Tajikistan underlines ‘gravity of threat emanating from Afghanistan’",
      description: "According to Tajik authorities, three Chinese workers in Tajikistan were killed in an attack launched from Afghanistan near the border.",
    },
  ];

  // Dusra section items
  const NeedItems = [
    {
      id: 1,
      img: Need1,
      title:
        "Putin to discuss ‘privileged partnership’ with Modi on India visit next week",
      description:
        "Russian president last visited India in December 2021, a few months before the country went to war against Ukraine.",
    },
    {
      id: 2,
      img: Need2,
      title: "Amid exit speculations, 3 IHC judges ‘pack up’ chambers",
      description:
        "Insiders say Justices Tariq Mehmood Jahangiri, Babar Sattar and Sardar Ejaz Ishaq Khan have moved out their personal belongings.",
    },
    {
      id: 3,
      img: Need3,
      title:
        "Sanaullah voices support for meetings between Imran and relatives, subject to conditions",
      description:
        "State minister says meetings not subject to whims or wishes; PM's aide suggests meeting between Imran's family and jail officials to settle matters.",
    },
    {
      id: 4,
      img: Need4,
      title:
        "Special ceremony held in honour of country’s last CJCSC at Joint Staff Headquarters",
      description:
        "Gen Mirza pays tribute to sacrifices of armed forces, highlights importance of defence for national security in farewell address.",
    },
    {
      id: 5,
      img: Need5,
      title:
        "Afghan forces open fire across border to facilitate infiltration of terrorists into Pakistan: DG ISPR",
      description:
        "Lt Gen Chaudhry says 67,023 IBOs have been conducted across the country since Jan 2025.",
    },
  ];

  return (
    <Container className="py-5 px-5">
      {/* First Section */}
      <h2 className="mb-2">TRENDING NOW</h2>
      <p className="text-muted mb-4">
        Read the most popular stories across the site
      </p>
      <hr className="mb-4" style={{ borderColor: "#6c6a6aff" }} />
      <h6 className="fw-bold  mb-3" style={{ color: "#d65d00ff" }}>
        LAST 24 HOURS
      </h6>

      {HedItems.map((item) => (
        <Card className="mb-3" key={item.id}>
          <Card.Body>
            <Row className="align-items-center">
              <Col xs={4} md={3}>
                <Card.Img
                  src={item.img}
                  alt={item.title}
                  className="img-fluid"
                />
              </Col>
              <Col xs={8} md={9}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className="text-muted">{item.description}</Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}

      {/* Middle Section: Cleaning the stables */}
      <br />
      <br />
      <h2 className="mb-2">Cleaning the stables</h2>
      <p className="text-muted mb-4">
        ALTHOUGH former prime minister Nawaz Sharif has largely kept a low
        profile after returning to Pakistan in 2023, the
      </p>
      <hr className="mb-4" style={{ borderColor: "#6c6a6aff" }} />

      {StableItems.map((item) => (
        <Card className="mb-3" key={item.id}>
          <Card.Body>
            <Row className="align-items-center">
              <Col xs={4} md={3}>
                <Card.Img
                  src={item.img}
                  alt={item.title}
                  className="img-fluid"
                />
              </Col>
              <Col xs={8} md={9}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className="text-muted">{item.description}</Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}

      {/* Second Section */}
      <br />
      <br />
      <h2 className="mb-2">Needless moralising</h2>
      <p className="text-muted mb-4">
        IT is disquieting that such troubling remarks have been made in a case
        as brutal as that of Noor Mukadam’s murder....
      </p>
      <hr className="mb-4" style={{ borderColor: "#6c6a6aff" }} />

      {NeedItems.map((item) => (
        <Card className="mb-3" key={item.id}>
          <Card.Body>
            <Row className="align-items-center">
              <Col xs={4} md={3}>
                <Card.Img
                  src={item.img}
                  alt={item.title}
                  className="img-fluid"
                />
              </Col>
              <Col xs={8} md={9}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className="text-muted">{item.description}</Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}
