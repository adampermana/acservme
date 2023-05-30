import React from "react";
import HeroContent from "../components/Layout/HeroContent.jsx";
import herosection from "../assets/images/herosection.jpg";
import LogoClouds from "../components/Layout/LogoClouds.jsx";
import Navbar from "../components/navigation/Navbar";
import FeatureSection from "../components/Layout/FeatureSection.jsx";
import Footer from "../components/Layout/Footer.jsx";
import "../Styles/HeroSection.css";

function HeroSection() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center grid-cols-1">
        <HeroContent />
        <div className="hero-image-container">
          <img
            src={herosection}
            alt="AC"
            className="hero-image grid-cols-2"
            style={{ width: "900px" }}
          />
        </div>
      </div>
      <FeatureSection />
      <LogoClouds />
      <Footer />
    </div>
  );
}

export default HeroSection;
