import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaWhatsapp, FaTwitter, FaFacebookF, FaInstagram, FaApple, FaAndroid } from "react-icons/fa";

export default function Footer() {
  const footerLinks = [
    ["CONTACT", "CONTRIBUTION GUIDELINES", "CODE OF ETHICS", "AI POLICY", "TERMS OF USE", "PRIVACY", "COMMENT MODERATION"],
    ["SUBSCRIBE TO NEWSPAPER", "REPRODUCTION COPYRIGHTS", "ADVERTISE ON DAWN.COM", "BRANDED CONTENT", "CAREERS", "OBITUARIES"],
    ["PRAYER TIMINGS", "STOCK/FOREX/GOLD", "WEATHER", "DAWN", "PRISM", "IMAGES", "SPECIAL REPORTS", "AURORA", "DAWN NEWS"],
    ["EOS/ICON/YOUNG WORLD", "CITYFM89", "HERALD", "TEELI"]
  ];

  const socialIcons = [
    { icon: <FaWhatsapp />, name: "WhatsApp" },
    { icon: <FaTwitter />, name: "X" },
    { icon: <FaFacebookF />, name: "Facebook" },
    { icon: <FaInstagram />, name: "Instagram" },
    { icon: <FaApple />, name: "iOS" },
    { icon: <FaAndroid />, name: "Android" },
  ];

  return (
    <footer style={{ background: "#000", color: "#fff", padding: "40px 0", fontFamily: "Arial, sans-serif" }}>
      <Container>
        {/* Top Logo and Social Icons */}
        <Row className="align-items-center mb-3">
          <Col md={6}>
            <h1 style={{ fontSize: 38, fontWeight: "700", margin: 0 }}>DAWN</h1>
          </Col>
          <Col md={6} className="text-md-end mt-3 mt-md-0">
            {socialIcons.map((item, idx) => (
              <span key={idx} style={{ fontSize: 20, marginRight: idx !== socialIcons.length - 1 ? 15 : 0 }}>
                {item.icon}
              </span>
            ))}
          </Col>
        </Row>

        <hr style={{ borderColor: "#fff", fontWeight: "bold", margin: "1rem 0" }} />

        {/* Footer Links */}
        <Row className="mt-3">
          {footerLinks.map((colLinks, colIdx) => (
            <Col md={3} xs={6} className="mb-3" key={colIdx}>
              {colLinks.map((link, idx) => (
                <p key={idx} style={{ margin: "4px 0", fontSize: 14, fontWeight: 500, pointerEvents: "none" }}>
                  {link}
                </p>
              ))}
            </Col>
          ))}
        </Row>

        {/* Copyright */}
        <Row className="mt-3">
          <Col md={6} xs={12}>
            <p style={{ fontSize: 14, margin: 0, fontWeight: "bold", color: "#fff" }}>Copyright © 2025, DAWN</p>
          </Col>
          <Col md={6} xs={12} className="text-md-end mt-2 mt-md-0">
            <p style={{ fontSize: 14, margin: 0, fontWeight: "bold", color: "#fff" }}>NewsKit Publishing Platform by Compunode</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
