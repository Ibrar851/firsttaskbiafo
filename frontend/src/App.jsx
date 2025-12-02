import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import LatestPage from "./components/LatestPage";
import PakistanPage from "./components/PakistanPage"
import OpinionPage from "./components/OpinionPage"
import BusinessPage from "./components/BusinessPage"
import WorldPage from "./components/WorldPage"
import SportsPage from "./components/SportsPage"
import TechPage from "./components/TechPage"
import MagazinesPage from "./components/MagazinesPage"
import PopularPage from "./components/PopularPage"
import ArchivePage from "./components/ArchivePage";
import PrismPage from "./components/PrismPage";

// Simple placeholder page
function Page({ title }) {
  return (
    <div style={{ padding: 20 }}>
      <h2>{title}</h2>
      <p>Content coming soon...</p>
    </div>
  );
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <BrowserRouter>
      <Header setSearchQuery={setSearchQuery} />

      <Routes>
        {/* Home page */}
        <Route path="/" element={<HomePage />} />

        {/* Bottom links */}
        <Route path="/latest" element={<LatestPage title="Latest" />} />
        <Route path="/pakistan" element={<PakistanPage title="Pakistan" />} />
        <Route path="/opinion" element={<OpinionPage title="Opinion" />} />
        <Route path="/business" element={<BusinessPage title="Business" />} />
        <Route path="/images" element={<Page title="Images" />} />
        <Route path="/prism" element={<PrismPage title="Prism" />} />
        <Route path="/world" element={<WorldPage title="World" />} />
        <Route path="/sport" element={<SportsPage title="Sports" />} />
        <Route path="/magazines" element={<MagazinesPage title="Magazines" />} />
        <Route path="/tech" element={<TechPage title="Tech" />} />
        <Route path="/videos" element={<Page title="Videos" />} />
        <Route path="/popular" element={<PopularPage title="Popular" />} />
        <Route path="/archive" element={<ArchivePage title="Archive" />} />


        {/* Top links */}
        <Route path="/epaper" element={<Page title="E-PAPER" />} />
        <Route path="/live-tv" element={<Page title="LIVE TV" />} />
        <Route path="/dawnnews-urdu" element={<Page title="DAWNNEWS URDU" />} />
        <Route path="/herald" element={<Page title="Herald" />} />
        <Route path="/aurora" element={<Page title="Aurora" />} />
        <Route path="/cityfm89" element={<Page title="CityFM89" />} />
        <Route path="/advertise" element={<Page title="Advertise" />} />
        <Route path="/events" element={<Page title="Events" />} />
        <Route path="/supplements" element={<Page title="Supplements" />} />
        <Route path="/careers" element={<Page title="Careers" />} />
        <Route path="/obituaries" element={<Page title="Obituaries" />} />

        {/* Search */}
        <Route path="/search" element={<Page title={`Search results for "${searchQuery}"`} />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
