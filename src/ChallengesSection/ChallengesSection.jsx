import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaTimesCircle } from "react-icons/fa";
import imgsave from "../assest/save.png"
import withoutImg from "../assest/without.png";
import withImg from "../assest/with.png";

// TOP FEATURE ICONS
import icon1 from "../assest/contact.png";
import icon2 from "../assest/cursor.png";
import icon3 from "../assest/field.png";
import icon4 from "../assest/fall.png";
import iconA from "../assest/share.png";
import iconB from "../assest/contact.png";
import iconC from "../assest/template.png";
import iconD from "../assest/ai.png";


import "./ChallengesSection.css";

const topFeatures = [
  { icon: icon1, title: "Access to 700M+ Contacts" },
  { icon: icon2, title: "One click push to CRM" },
  { icon: icon3, title: "Custom Field Mapping" },
  { icon: icon4, title: "Advanced Waterfall Enrichment" },
];
const withLeadCRMFeatures = [
  { icon: iconA, text: "Complete Bi-Directional Sync" },
  { icon: iconB, text: "700M+ Contacts + Enrichment" },
  { icon: iconC, text: "CRM Overlay on LinkedIn" },
  { icon: iconD, text: "AI Response Templates + Bulk Exports" },
];


const ChallengesSection = () => {
  return (
    <Container className="py-5 challenge-wrapper">

      {/* ------- TOP FEATURES WITH ICONS ------- */}
      <Row className="justify-content-center mb-5 top-feature-wrapper">
        {topFeatures.map((item, i) => (
          <Col xs={12} sm={6} md="auto" key={i}>
            <div className="feature-box">
              <img src={item.icon} alt="" className="feature-icon" />
              <span className="feature-text">{item.title}</span>
            </div>
          </Col>
        ))}
      </Row>

      {/* ----------- MAIN HEADING ----------- */}
      <h2 className="text-center mb-5 challenge-heading">
        Every LinkedIn Prospector faces these daily challenges
      </h2>

      <Row className="g-4">
        {/* LEFT CARD */}
        <Col md={6}>
          <div className="challenge-card left-card">
            <img src={withoutImg} alt="Without LeadCRM" className="card-top-img" />
            <h5 className="card-title-red mt-3 ">Without LeadCRM</h5>

            <div className="issue-item">
              <FaTimesCircle className="icon-red" />
              <p>Manual Data Entry <span className="tag-red">8+ hours wasted daily</span></p>
            </div>

            <div className="issue-item">
              <FaTimesCircle className="icon-red" />
              <p>Incomplete Data <span className="tag-red">60% Data incomplete</span></p>
            </div>

            <div className="issue-item">
              <FaTimesCircle className="icon-red" />
              <p>No CRM Visibility <span className="tag-red">Zero contact available</span></p>
            </div>

            <div className="issue-item">
              <FaTimesCircle className="icon-red" />
              <p>Limited Productivity <span className="tag-red">No smart assistance</span></p>
            </div>
          </div>
        </Col>

        {/* RIGHT CARD */}
        <Col md={6}>
          <div className="challenge-card right-card">
            <img src={withImg} alt="With LeadCRM" className="card-top-img" />
        <div className="with-heading">
<h5 className="card-title-green mt-3 text-center">
  With LeadCRM
</h5>

<div className="save-hours text-center">
  4+ Hours/day Saved
</div>

</div>


     {withLeadCRMFeatures.map((item, index) => (
  <div className="issue-item" key={index}>
    <img src={item.icon} alt="" className="with-icon" />
    <p>{item.text}</p>
  </div>
))}

          
          </div>
        </Col>
      </Row>

      {/* BUTTON */}
     {/* BUTTON + SAVE NOTE */}
<div className="text-center mt-5 cta-wrapper">
  <button className="start-btn dynamic-btn">
    Start Using LeadCRM Now
  </button>

  <div className="cta-save-note">
    <img src={imgsave} alt="Save 40+ hours" className="save-img" />
  </div>
</div>


    </Container>
  );
};

export default ChallengesSection;
