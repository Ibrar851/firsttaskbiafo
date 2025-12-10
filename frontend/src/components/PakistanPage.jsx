import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ----- HEADLINES -----
import h1 from "../assets/pakistan/headline1.webp";
import h2 from "../assets/pakistan/headline2.webp";
import h3 from "../assets/pakistan/headline3.webp";
import h4 from "../assets/pakistan/headline4.webp";
import h5 from "../assets/pakistan/headline5.webp";
import h6 from "../assets/pakistan/headline6.webp";
import h7 from "../assets/pakistan/headline7.webp";
import h8 from "../assets/pakistan/headline8.webp";
import h9 from "../assets/pakistan/headline9.webp";
import h10 from "../assets/pakistan/headline10.webp";

// ----- HIGHLIGHTS -----
import hl1 from "../assets/pakistan/highlight1.webp";
import hl2 from "../assets/pakistan/highlight2.webp";
import hl3 from "../assets/pakistan/highlight3.webp";
import hl4 from "../assets/pakistan/highlight4.webp";
import hl5 from "../assets/pakistan/highlight5.webp";
import hl6 from "../assets/pakistan/highlight6.webp";
import hl7 from "../assets/pakistan/highlight7.webp";
import hl8 from "../assets/pakistan/highlight8.webp";
import hl9 from "../assets/pakistan/highlight9.webp";
import hl10 from "../assets/pakistan/highlight10.webp";
import hl11 from "../assets/pakistan/highlight11.webp";
import hl12 from "../assets/pakistan/highlight12.webp";

// ----- MOST READ -----
import r1 from "../assets/pakistan/readstory1.webp";
import r2 from "../assets/pakistan/readstory2.webp";
import r3 from "../assets/pakistan/readstory3.webp";
import r4 from "../assets/pakistan/readstory4.webp";
import r5 from "../assets/pakistan/readstory5.webp";
import r6 from "../assets/pakistan/readstory6.webp";
import r7 from "../assets/pakistan/readstory7.webp";
import r8 from "../assets/pakistan/readstory8.webp";
import r9 from "../assets/pakistan/readstory9.webp";
import r10 from "../assets/pakistan/readstory10.webp";

// ----- DATA -----
const headlines = [
  {
    id: 1,
    img: h1,
    title: "Trump designates Saudi Arabia as ",
    desc: "I’m just telling you now for the first time….",
  },
  {
    id: 2,
    img: h2,
    title: "National Assembly committee reprimands PTA over slow internet",
    desc: "Telecom sector regulator ordered….",
  },
  {
    id: 3,
    img: h3,
    title: "PTI says Imran Khan’s sisters manhandled…",
    desc: "Imran’s sisters say….",
  },
  {
    id: 4,
    img: h4,
    title: "Pakistan enters bunkering market…",
    desc: "Refuelling facility established….",
  },
  {
    id: 5,
    img: h5,
    title: "Govt says rooftop solar ‘not hurting’ grid",
    desc: "Net metering jumped….",
  },
  {
    id: 6,
    img: h6,
    title: "Pakistan enters bunkering market…",
    desc: "Refuelling facility established….",
  },
  {
    id: 7,
    img: h7,
    title: "Rejection of contempt plea…",
    desc: "Petition sought enforcement….",
  },
  {
    id: 8,
    img: h8,
    title: "Cultural festival begins",
    desc: "Annual festival showcases music, art, and dance.",
  },
  {
    id: 9,
    img: h9,
    title: "Sports awards announced",
    desc: "Top athletes recognized in national ceremony.",
  },
  {
    id: 10,
    img: h10,
    title: "Climate report released",
    desc: "Pakistan's vulnerability to climate change highlighted.",
  },
];

const highlights = [
  {
    id: 1,
    img: hl1,
    title: "Drama Case No 9",
    desc: "Justice Mansoor Ali Shah and the 26th Amendment discussed.",
  },
  {
    id: 2,
    img: hl2,
    title: "Talha Anjum apology",
    desc: "Rapper Talha Anjum apologises for waving Indian flag at concert.",
  },
  {
    id: 3,
    img: hl3,
    title: "Saba Qamar message",
    desc: "Shares a powerful message this World Children’s Day.",
  },
  {
    id: 4,
    img: hl4,
    title: "Adab Festival",
    desc: "What to look forward to at the 10th Adab Festival.",
  },
  {
    id: 5,
    img: hl5,
    title: "Mahira Khan looks",
    desc: "Best looks from the Neelofar promotions.",
  },
  {
    id: 6,
    img: hl6,
    title: "Vivek Oberoi ode",
    desc: "Shares ode to ‘Tere Liye’ — forgetting to credit Atif Aslam.",
  },
  {
    id: 7,
    img: hl7,
    title: "Sehar Khan call-out",
    desc: "Calls out podcast host for humiliating guests.",
  },
  {
    id: 8,
    img: hl8,
    title: "Muneeb Butt controversy",
    desc: "Calls out ‘shameful’ harassment of journalist Shahzeb Khanzada.",
  },
  {
    id: 9,
    img: hl9,
    title: "PISAs postponed",
    desc: "This year’s PISAs have been postponed.",
  },
  {
    id: 10,
    img: hl10,
    title: "Talha Anjum concert",
    desc: "Apologises for waving Indian flag at concert in Nepal.",
  },
  {
    id: 11,
    img: hl11,
    title: "Sharjeel urges PM",
    desc: "Provides buses to Karachi; double-decker comment.",
  },
  {
    id: 12,
    img: hl12,
    title: "Smog warning",
    desc: "Easterly winds worsening smog in central Punjab.",
  },
];

const authors = [
  "Hamid Mir",
  "Asma Shirazi",
  "Mazhar Abbas",
  "Saleem Safi",
  "Fahd Hussain",
  "Babar Sattar",
];

const stories24 = [
  {
    id: 1,
    title: "Trump designates Saudi Arabia as ‘major, non-Nato ally’",
    image: r1,
  },
  { id: 2, title: "Crime and punishment", image: r2 },
  { id: 3, title: "Sheikh Hasina verdict", image: r3 },
  { id: 4, title: "State and its pillars", image: r4 },
  { id: 5, title: "Football superstar Cristiano Ronaldo", image: r5 },
];

const stories3day = [
  {
    id: 6,
    title: "Report submitted to US Congress mentions Pakistan’s ‘military",
    image: r6,
  },
  {
    id: 7,
    title: "PIA, Bangladesh’s Biman Airlines ink ‘landmark’ cargo deal",
    image: r7,
  },
  { id: 8, title: "SBP limits cash dollar transactions", image: r8 },
  { id: 9, title: "Crime and punishment", image: r9 },
  { id: 10, title: "Indian Army chief says May ", image: r10 },
];

// ----------------- COMPONENT -----------------
export default function PakistanPage() {
  const [authorStories, setAuthorStories] = useState(stories24);

  const sliderSettings = {
    autoplay: true,
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
  };

  return (
    <div className="container mt-4" style={{ fontFamily: "Times New Roman", }}>
      <div className="row">
        {/* ----- COLUMN 1: HEADLINES ----- */}
        <div className="col-md-5 mb-4">
          {headlines.map((h, idx) => (
            <div key={h.id} className="border-bottom pb-4 mb-4">
              {idx === 0 ? (
                <>
                  <h4 className="fw-bold mb-3" style={{ lineHeight: "1.3" }}>
                    {h.title}
                  </h4>
                  <img
                    src={h.img}
                    alt={h.title}
                    className="rounded shadow-sm mb-2"
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />
                  <p style={{ fontSize: "15px" }}>{h.desc}</p>
                  <small className="text-muted">
                    UPDATED ABOUT 2 HOURS AGO
                  </small>
                </>
              ) : (
                <>
                  <h6 className="fw-bold mb-2">{h.title}</h6>
                  <div className="row g-2">
                    <div className="col-4">
                      <img
                        src={h.img}
                        alt={h.title}
                        className="rounded shadow-sm"
                        style={{
                          width: "100%",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="col-8">
                      <p className="mb-1" style={{ fontSize: "14px" }}>
                        {h.desc}
                      </p>
                      <small className="text-muted">UPDATED</small>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* ----- COLUMN 2: SLIDER + HIGHLIGHTS ----- */}
        <div className="col-md-5 mb-4">
          <Slider {...sliderSettings} className="mb-4">
            {highlights.slice(0, 5).map((s) => (
              <div key={s.id} className="text-center px-2">
                <img
                  src={s.img}
                  alt={s.title}
                  className="img-fluid rounded shadow-sm"
                  style={{ height: "250px", objectFit: "cover", width: "100%" }}
                />
                <h6 className="mt-2 fw-bold">{s.title}</h6>
                <p style={{ fontSize: 14 }}>{s.desc}</p>
              </div>
            ))}
          </Slider>

          <h5 className="fw-bold mt-4">Highlights</h5>
          <div className="row g-3 mt-2">
            {highlights.map((item) => (
              <div className="col-md-6" key={item.id}>
                <div className="card border-0 shadow-sm">
                  <img
                    src={item.img}
                    className="card-img-top rounded"
                    alt={item.title}
                    style={{ height: "150px", objectFit: "cover" }}
                  />
                  <div className="card-body px-2">
                    <h6 className="fw-bold mb-1">{item.title}</h6>
                    <p style={{ fontSize: 14 }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ----- COLUMN 3: AUTHORS + STORIES ----- */}
        <div className="col-md-2 mb-4">
          <h5 className="fw-bold mb-3">TOP Authors</h5>
          <ul className="list-group mb-3">
            {authors.slice(0, 6).map((a, i) => (
              <li className="list-group-item border-0 px-0 fw-bold" key={i}>
                {i + 1}. {a}
              </li>
            ))}
          </ul>

          <div className="d-flex gap-2 mb-3">
            <button
              className="btn btn-dark btn-sm"
              onClick={() => setAuthorStories(stories24)}
            >
              24 Hours
            </button>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => setAuthorStories(stories3day)}
            >
              3 Days
            </button>
          </div>

          <div className="border-top pt-3">
            {authorStories.map((s, i) => (
              <div key={i} className="mb-3 d-flex gap-2 align-items-start">
                <img
                  src={s.image}
                  alt={s.title}
                  className="img-fluid rounded shadow-sm"
                  style={{ width: 60, height: 60, objectFit: "cover" }}
                />
                <div>
                  <h6 className="mb-1" style={{ fontSize: 14 }}>
                    {s.title}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
