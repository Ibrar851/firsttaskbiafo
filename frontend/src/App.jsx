// ========== App.jsx ==========
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./components/HomePage";
import LatestPage from "./components/LatestPage";
import PakistanPage from "./components/PakistanPage";
import OpinionPage from "./components/OpinionPage";
import BusinessPage from "./components/BusinessPage";
import WorldPage from "./components/WorldPage";
import SportsPage from "./components/SportsPage";
import BreathePage from "./components/BreathePage";
import TechPage from "./components/TechPage";
import MagazinesPage from "./components/MagazinesPage";
import PopularPage from "./components/PopularPage";
import ArchivePage from "./components/ArchivePage";
import PrismPage from "./components/PrismPage";
import VideosPage from "./components/VideosPage";

// Simple placeholder
function Page({ title }) {
  return (
    <div style={{ padding: 20 }}>
      <h2>{title}</h2>
      <p>Content coming soon...</p>
    </div>
  );
}

// Wrapper to handle conditional header
function AppWrapper() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  // Paths jahan header hide karna hai
  const hideHeaderPaths = ["/prism", "/breathe"];
  const showHeader = !hideHeaderPaths.includes(location.pathname);

  return (
    <>
      {showHeader && <Header setSearchQuery={setSearchQuery} />}

      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Bottom Links */}
        <Route path="/latest" element={<LatestPage />} />
        <Route path="/pakistan" element={<PakistanPage />} />
        <Route path="/opinion" element={<OpinionPage />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/images" element={<Page title="Images" />} />
        <Route path="/prism" element={<PrismPage />} />
        <Route path="/world" element={<WorldPage />} />
        <Route path="/sport" element={<SportsPage />} />
        <Route path="/breathe" element={<BreathePage />} />
        <Route path="/magazines" element={<MagazinesPage />} />
        <Route path="/tech" element={<TechPage />} />
        <Route path="/videos" element={<VideosPage title="Videos" />} />
        <Route path="/popular" element={<PopularPage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/flood-donations" element={<Page title="Flood Donations" />} />

        {/* Top Links */}
        <Route path="/epaper" element={<Page title="E-Paper" />} />
        <Route path="/live-tv" element={<Page title="Live TV" />} />
        <Route path="/dawnnews-urdu" element={<Page title="DawnNews Urdu" />} />
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
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}
