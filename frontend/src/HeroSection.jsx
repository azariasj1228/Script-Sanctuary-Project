import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const handleExploreClick = () => {
    // Handle button click action here (e.g., navigation or API call)
    console.log("Explore button clicked");
  };

  return (
    <section className="hero">
      <div className="container">
        <h1>Welcome to ScriptSanctuary</h1>
        <p>Your place for all things books and reading</p>
        <button className="cta-button" onClick={handleExploreClick}>
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
