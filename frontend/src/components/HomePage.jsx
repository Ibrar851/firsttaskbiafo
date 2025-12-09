import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import FeaturedHero from "./FeaturedHero";
import NewsListItem from "./NewsListItem";
import MostRead from "./MostRead";
import SectionGrid from "./SectionGrid";
import VideosSection from "./VideosSection";
import HeadlineBlock from "./HeadlineBlock";

// ----- IMPORT ALL 12 NEWS HEADLINES -----
import h1 from "../assets/Newsheadline/headline1.webp";
import h2 from "../assets/Newsheadline/headline2.webp";
import h3 from "../assets/Newsheadline/headline3.webp";
import h4 from "../assets/Newsheadline/headline4.webp";
import h5 from "../assets/Newsheadline/headline5.webp";
import h6 from "../assets/Newsheadline/headline6.webp";
import h7 from "../assets/Newsheadline/headline7.webp";
import h8 from "../assets/Newsheadline/headline8.webp";
import h9 from "../assets/Newsheadline/headline9.webp";
import h10 from "../assets/Newsheadline/headline10.webp";
import h11 from "../assets/Newsheadline/headline11.webp";
import h12 from "../assets/Newsheadline/headline12.webp";

// ----- IMPORT MOST READ IMAGES -----
import r1 from "../assets/MostRead/readstory1.webp";
import r2 from "../assets/MostRead/readstory2.webp";
import r3 from "../assets/MostRead/readstory3.webp";
import r4 from "../assets/MostRead/readstory4.webp";
import r5 from "../assets/MostRead/readstory5.webp";
import r6 from "../assets/MostRead/readstory6.webp";
import r7 from "../assets/MostRead/readstory7.webp";
import r8 from "../assets/MostRead/readstory8.webp";

const SAMPLE = {
  articles: [
    {
      id: 1,
      title:
        "PTTrump designates Saudi Arabia as ‘major, non-Nato ally’I says Imran Khan’s sisters manhandled by police",
      description:
        "“And I’m just telling you now for the first time, because they wanted to keep a little secret for tonight,” Trump says of the designation, which only 19 other countries have previously received..",
      image: h1,
    },
    {
      id: 2,
      title: "National Assembly committee reprimands PTA over slow internet",
      description:
        "Telecom sector regulator ordered to conduct comprehensive surveys and present a detailed report..",
      image: h2,
    },
    {
      id: 3,
      title:
        "PTI says Imran Khan’s sisters manhandled, ‘violently detained’ by police while camped outside Adiala jail",
      description:
        "Imran's sisters say one of them dragged on the road; party says KP minister Meena Khan Afridi, MNA Shahid Khattak and others also subjected to violence..",
      image: h3,
    },
    {
      id: 4,
      title: "Pakistan enters bunkering market with first facility",
      description:
        "Refuelling facility established for commercial shipping; bunkering at a port is process of supplying ships with fuel for propulsion and onboard machinery..",
      image: h4,
    },
    {
      id: 5,
      title: "Govt says rooftop solar ‘not hurting’ grid",
      description:
        "Net metering contribution jumped 173pc to 726m units in 2024.",
      image: h5,
    },
    {
      id: 6,
      title:
        "Karachi traffic police began issuing speeding fines without ‘fixed speed limits’ on city roads",
      description:
        "DIG says speed limits for different roads to be set after completion of road safety, engineering audit.",
      image: h6,
    },
    {
      id: 7,
      title:
        "Rejection of contempt plea filed by PTI’s Salman Akram Raja against Adiala officials assailed",
      description:
        "Petition sought enforcement of IHC’s directives on visitation rights of Imran Khan with his legal team..",
      image: h7,
    },
    {
      id: 8,
      title: "Technology startups flourish in Pakistan",
      description:
        "New incubators and funding opportunities foster innovation among youth.",
      image: h8,
    },
    {
      id: 9,
      title: "MILITANCY: THE NEW FACE OF AL QAEDA",
      description:
        "More than two decades after 9/11, Al Qaeda hasn’t vanished — it’s adapted.",
      image: h9,
    },
    {
      id: 10,
      title: "Sports: National cricket team wins series",
      description:
        "A thrilling victory secures Pakistan’s position at the top of the rankings.",
      image: h10,
    },
    {
      id: 11,
      title: "Europe looks to catch up with US in AI race",
      description:
        "Concerns about US tech dominance grow as Europe's ties with Wash­ington become increasingly uneasy.",
      image: h11,
    },
    {
      id: 12,
      title: "ENVIRONMENT: WHY CAN’T DELHI BREATHE?",
      description:
        "To hold the government to account for our city, we must first have a conception of the city as ours — all of ours",
      image: h12,
    },
  ],
  mostRead: [
    {
      id: 1,
      title:
        "Football superstar Cristiano Ronaldo, billionaire Elon Musk among attendees of Trump’s dinner with Saudi prince",
      image: r1,
    },
    {
      id: 2,
      title:
        "Crime and punishment: Sheikh Hasina’s conviction comes as lesson for all authoritarian rulers",
      image: r2,
    },
    {
      id: 3,
      title:
        "Sheikh Hasina may yet be able to beat extradition, but not all has been in vain",
      image: r3,
    },
    {
      id: 4,
      title:
        "Why ignoring issue of governance in GB may squander Pakistan’s strategic and economic future",
      image: r4,
    },
    {
      id: 5,
      title:
        "Explainer: Why did a Cloudflare outage cause websites to go down?",
      image: r5,
    },
    {
      id: 6,
      title: "What are the pitfalls for UK’s asylum system overhaul",
      image: r6,
    },
    {
      id: 7,
      title:
        "Book Review: Arundhati Roy’s ‘Mother Mary Comes to Me’ confronts the complicated reality of motherhood",
      image: r7,
    },
    {
      id: 8,
      title:
        "2026 FIFA World Cup draw picture gets clearer after dramatic night of action",
      image: r8,
    },
  ],
  business: [
    {
      id: 1,
      title:
        "Rejection of contempt plea filed by PTI’s Salman Akram Raja against Adiala officials assailed",
      description:
        "Petition sought enforcement of IHC’s directives on visitation rights of Imran Khan with his legal team.",
      image: h7,
    },
    {
      id: 2,
      title: "Technology startups flourish in Pakistan",
      description:
        "New incubators and funding opportunities foster innovation among youth.",
      image: h8,
    },
    {
      id: 3,
      title: "MILITANCY: THE NEW FACE OF AL QAEDA",
      description:
        "More than two decades after 9/11, Al Qaeda hasn’t vanished — it’s adapted.",
      image: h9,
    },
  ],
  tech: [
    {
      id: 1,
      title: "Football superstar Cristiano Ronaldo",
      description:
        "Football superstar Cristiano Ronaldo, billionaire Elon Musk among attendees of Trump’s dinner with Saudi prince",
      image: h10,
    },
    {
      id: 2,
      title: "Europe looks to catch up with US in AI race",
      description:
        "Concerns about US tech dominance grow as Europe's ties with Wash­ington become increasingly uneasy.",
      image: h11,
    },
    {
      id: 3,
      title: "ENVIRONMENT: WHY CAN’T DELHI BREATHE?",
      description:
        "To hold the government to account for our city, we must first have a conception of the city as ours — all of ours",
      image: h12,
    },
  ],
  videos: [
    {
      id: 1,
      title:
        "Allied Bank promotes warehouse facility as a financing solution to support agricultural businesses",
    },
    {
      id: 2,
      title: "LemFi introduces new savings account for UK immigrant community",
    },
    {
      id: 3,
      title:
        "Master Changan Motors unveils three brands and eleven new models at PAPS 2025",
    },
  ],
};

export default function HomePage() {
  const { articles, mostRead, business, tech, videos } = SAMPLE;

  return (
    <Container fluid className="mt-3" style={{fontFamily: "Times New Roman" }}>
      <Container>
        <FeaturedHero article={articles[0]} />

        <Row>
          <Col lg={8}>
            {/* First 3 articles */}
            {articles.slice(0, 3).map((a) => (
              <Card key={a.id} className="mb-3 border-0">
                <Row className="g-0">
                  <Col md={4}>
                    <img
                      src={a.image}
                      alt={a.title}
                      style={{ width: "100%", height: 120, objectFit: "cover" }}
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <h5 style={{ fontWeight: 700 }}>{a.title}</h5>
                      <p className="text-muted">{a.description}</p>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            ))}

            {/* HeadlineBlock for first 3 articles */}
            {articles.slice(0, 3).map((a) => (
              <HeadlineBlock
                key={a.id}
                title={a.title}
                image={a.image}
                description={a.description}
                time="Updated 14 minutes ago"
              />
            ))}

            <SectionGrid title="Business" items={business} />
            <SectionGrid title="Technology" items={tech} />
            <VideosSection items={videos} />
          </Col>

          <Col lg={4}>
            <MostRead items={mostRead} />

            <div className="mt-4">
              <h6 className="mb-2">From the Magazine</h6>
              <Card className="mb-2 border-0">
                <Card.Img
                  src={h9}
                  style={{ height: 120, objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: 14 }}>
                    Magazine feature title
                  </Card.Title>
                  <div
                    style={{
                      pointerEvents: "none",
                      color: "#000",
                      fontSize: 14,
                    }}
                  >
                    Read →
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="mt-4">
              <h6 className="mb-2">Newsletter</h6>
              <Card className="p-3 border-0">
                <p className="mb-2">
                  Subscribe to get daily headlines from Dawn.
                </p>
                <div
                  className="btn btn-outline-dark btn-sm"
                  style={{ pointerEvents: "none" }}
                >
                  Subscribe
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
