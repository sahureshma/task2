import React from "react";
import "./HeroSection.css";
import img1 from "../assest/Frame.png";
import img2 from "../assest/chromee.png";
import img3 from "../assest/p.png";
import img4 from "../assest/sale.png";
import img5 from "../assest/hots.png"

const HeroSection = () => {
  return (
    <div className="hero-section text-center py-5">

      {/* Top Tag */}
      <div className="small-tag mx-auto d-inline-flex align-items-center gap-2">
        <img src={img1} alt="" className="top-icon" />
        <span>Thousands of Professionals using LeadCRM</span>
      </div>

      {/* Main Heading */}
      <h1 className="main-heading mt-4">
        LinkedIn CRM Integration <br />
        Capture, Sync and Enrich in{" "}
        <span className="highlight-text">Both Ways</span>
      </h1>

      {/* Subtext */}
      <p className="subtext mt-3">
        Automatically sync LinkedIn prospects to your CRM and overlay existing CRM contacts on LinkedIn profiles.
        Complete bi-directional integration with HubSpot, Salesforce and Pipedrive.
      </p>

      {/* Icon Box */}
      <div className="icon-box mx-auto mt-4">
        <span className="fw-semibold">Works with</span>
        <div className="d-flex gap-3 justify-content-center mt-2">
          <img src={img5} alt="HubSpot" className="crm-iconhot" />
          <img src={img3} alt="Pipedrive" className="crm-iconpipe" />
          <img src={img4} alt="Salesforce" className="crm-icon" />
        </div>
      </div>

      {/* Ratings */}
      <div className="ratings mt-4 d-flex justify-content-center gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rating-box d-flex align-items-center gap-2">
            <span className="stars">⭐⭐⭐⭐⭐</span>
            <span>5/5</span>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-5 d-flex justify-content-center gap-3 flex-wrap">
        <button className="btn chrome-btn d-flex align-items-center gap-2 px-4">
  <span className="text-start d-flex flex-column">
    Available in
    <span>Chrome Web Store</span>
  </span>
  <img src={img2} alt="Chrome" className="chrome-img" />
</button>


        <button className="btn trial-btn px-4 fw-semibold">
  Get a Free Trial Now!
</button>

      </div>
    </div>
  );
};

export default HeroSection;
