import React, { useState } from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Header({ setSearchQuery }) {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const topLinks = [
    "EPAPER","LIVE TV","DAWNNEWS URDU","Images","Herald","Aurora","CityFM89",
    "Advertise","Events","Supplements","Careers","Obituaries"
  ];

  const bottomLinks = [
    "HOME","LATEST","PAKISTAN","OPINION","BUSINESS",
    "IMAGES","PRISM","WORLD","SPORT","BREATHE","MAGAZINES","TECH","VIDEOS","POPULAR","ARCHIVE","FLOOD DONATIONS" 
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim() !== "") {
      setSearchQuery(searchInput);
      navigate("/search");
    }
  };

  const getRoute = (link) => {
    const map = {
      HOME: "/",
      LATEST: "/latest",
      PAKISTAN: "/pakistan",
      OPINION: "/opinion",
      BUSINESS: "/business",
      IMAGES: "/images",
      PRISM: "/prism",
      WORLD: "/world",
      SPORT: "/sport",
      BREATHE: "/breathe",
      MAGAZINES: "/magazines",
      TECH: "/tech",
      VIDEOS: "/videos",
      POPULAR: "/popular",
      ARCHIVE: "/archive",
      FLOODDONATIONS: "/floodonations"
    };
    return map[link] || "/";
  };

  return (
    <>
      {/* Top Black Bar */}
      <div style={{ background: "#000", color: "#8a9cafff", fontSize: "10px", padding: "6px 0" }}>
        <Container className="d-flex justify-content-center flex-wrap" style={{ gap: "30px" }}>
          {topLinks.map((link) => (
            <span
              key={link}
              onClick={() => navigate(getRoute(link))}
              style={{ cursor: "pointer", fontWeight: 500 }}
            >
              {link}
            </span>
          ))}
        </Container>
      </div>

      {/* DAWN Logo */}
      <div className="text-center py-3 border-bottom">
        <h1 style={{ fontFamily: "Times New Roman", fontSize: "48px", margin: 0, fontWeight: 700 }}>
          DAWN
        </h1>
        <div style={{ fontSize: "10px", color: "#8ba3b0ff" }}>
          <span style={{ fontWeight: 700, color: "black" }}>E-PAPER</span> | NOVEMBER 21, 2025
        </div>
      </div>

      {/* Bottom Navigation */}
      <Navbar
        bg="white"
        className="border-bottom"
        style={{
          fontSize: "11px",
          padding: "3px 20px",
          position: "sticky",
          top: 0,
          zIndex: 999,
          borderTop: "2px solid #000",
        }}
      >
        <Container className="d-flex justify-content-between align-items-center">

          {/* Left Menu */}
          <Nav className="d-flex" style={{ gap: "10px" }}>
            {bottomLinks.map((link) => (
              <Nav.Link
                key={link}
                onClick={() => navigate(getRoute(link))}
                style={{
                  color: link === "BREATHE" ? "#4a8a05ff" : "#000",
                  fontWeight: 400,
                  padding: "0 2px",
                }}
              >
                {link}
              </Nav.Link>
            ))}
          </Nav>

          {/* Right Menu + Search */}
          <Nav className="d-flex align-items-center" style={{ gap: "10px" }}>
            {[].map((item) => (
              <Nav.Link
                key={item}
                style={{ color: "#000", fontWeight: 400, padding: "0 2px" }}
              >
                {item}
              </Nav.Link>
            ))}

            <Form className="d-flex" onSubmit={handleSearch}>
              <FormControl
                type="text"
                placeholder="Search"
                size="sm"
                style={{ fontSize: "11px", height: "26px" }}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <Button type="submit" size="sm" variant="outline-dark" className="ms-1">
                <FaSearch size={11} />
              </Button>
            </Form>
          </Nav>

        </Container>
      </Navbar>
    </>
  );
}
