import React from "react";
import { Container, Row, Col } from "react-bootstrap";


import {
  FaDatabase,
  FaSyncAlt,
  FaDownload,
  FaRobot,
  FaCheckCircle,
} from "react-icons/fa";
import "./LinkedinSolutions.css";

const LinkedinSolutions = () => {
  return (
    <section className="linkedin-section">
      <Container>

        {/* HEADER */}
        <div className="text-center mb-4">
          <h2 className="main-title">Complete LinkedIn Sales Solutions</h2>
          <p className="subtitle">
            Everything you need for professional LinkedIn prospecting
          </p>
        </div>

        {/* TABS */}
        <div className="tabs-row">
          <div className="tab active">
            <FaDatabase /> CRM Data Enrichment
          </div>
          <div className="tab">
            <FaSyncAlt /> CRM Data Sync
          </div>
          <div className="tab">
            <FaDownload /> Bulk Export & Enrichment
          </div>
          <div className="tab">
            <FaRobot /> AI Productivity
          </div>
        </div>

        {/* INFO LINE */}
        <p className="info-line">
          It’s hard to find the accurate contact data for every prospects by
          <span className="incomplete-badge">Incomplete Data</span>
        </p>

        {/* CONTENT */}
        <Row className="g-4">
          {/* LEFT */}
          <Col md={6}>
            <div className="outer-card">
              <p className="card-title">
                Here is how LeadCRM tackles that situation.
              </p>
              <a className="green-link">
                Try LeadCRM Data Enrichment →
              </a>

              <div className="inner-card-wrapper">
                <div className="inner-card">
                  <div className="inner-header">
                    <FaCheckCircle /> Verified Email & Phone
                  </div>

                  <div className="profile-row">
                    <div className="avatar" />
                    <div>
                      <strong>David Steinhoff</strong>
                      <p className="small-text">
                        davidsteinhoff@gmail.com
                      </p>
                      <p className="small-text">
                        +1 932 xxx xxx
                      </p>
                    </div>
                  </div>

                  <button className="contact-btn">
                    Contacts Found
                  </button>
                </div>

                <div className="inner-card filters-card">
                  <div className="inner-header">
                    🔍 40+ Search Filters
                  </div>
                  <div className="filter-line">
                    Email &nbsp;&nbsp; Phone
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* RIGHT */}
         {/* RIGHT */}
<Col md={6}>
  <div className="outer-card">
    <p className="card-title">
      If it does not works for you try our{" "}
      <span className="green-text">
        Advanced Waterfall Enrichment →
      </span>
    </p>

    <div className="waterfall-card">
      {[
        {
          vendor: "Vendor 1",
          name: "DropContact",
          logo: "C",
          success: false,
        },
        {
          vendor: "Vendor 2",
          name: "Datagma",
          logo: "d",
          success: false,
        },
        {
          vendor: "Vendor 3",
          name: "Rocket Reach",
          logo: "🚀",
          success: false,
        },
        {
          vendor: "Vendor 4",
          name: "Signal Hire",
          logo: "SH",
          success: true,
        },
      ].map((item, index) => (
        <div key={index} className="waterfall-step">
          <div className="waterfall-row">
            <span className="vendor-label">{item.vendor}</span>

            <div className="vendor-pill">
              <span className="vendor-logo">{item.logo}</span>
              {item.name}
            </div>

            <span
              className={`vendor-status ${
                item.success ? "success" : "fail"
              }`}
            >
              {item.success ? "✔ Contacts Found" : "× Contacts Not Found"}
            </span>
          </div>

          {index !== 3 && <div className="waterfall-arrow">↓</div>}
        </div>
      ))}
    </div>
  </div>
</Col>

        </Row>

      </Container>
    </section>
  );
};

export default LinkedinSolutions;
