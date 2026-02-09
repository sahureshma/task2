import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./SupportedLeadCRM.css";
import img1 from '../assest/loogo.png'

const SupportedLeadCRM = () => {
  return (
    <section className="supported-crm">
      <Container>
        {/* HEADER */}
        <Row className="text-center mb-5">
          <Col>
            <h2 className="title">Our Supported LeadCRM</h2>
            <p className="subtitle">
              LeadCRM provides Native Integrations with popular CRM tools to make
              the most out of your LinkedIn prospecting.
            </p>
          </Col>
        </Row>

        {/* TREE FLOW */}
        <Row className="tree-flow align-items-center">
          {/* LEFT TREE */}
          <Col md={4} className="left-tree">
            <div className="tree-node">
              <div className="circle">💬</div>
              <span>Conversation</span>
            </div>

            <div className="tree-node">
              <div className="circle">👤</div>
              <span>Contacts</span>
            </div>

            <div className="tree-node">
              <div className="circle">🏢</div>
              <span>Companies</span>
            </div>

            {/* LEFT TAGS */}
            <span className="tag t1">Conversations</span>
            <span className="tag t2">First Name</span>
            <span className="tag t3">Last Name</span>
            <span className="tag t4">Website</span>
            <span className="tag t5">Company Employees</span>
          </Col>

          {/* CENTER */}
          <Col md={4} className="center-tree">
  <div className="center-logo">
    <img src={img1} className="logoimg" alt="LeadCRM" />
  </div>
</Col>

          {/* RIGHT TREE */}
          <Col md={4} className="right-tree">
            <div className="crm-stack">
              <div className="crm hubspot">H</div>
              <div className="crm pipedrive">p</div>
              <div className="crm salesforce">sf</div>
              <div className="crm zoho">zo</div>
            </div>

            {/* RIGHT TAGS */}
            <span className="tag r1 green">Employees</span>
            <span className="tag r2 green">Website</span>
            <span className="tag r3 red">Conversation</span>
            <span className="tag r4 red">Last Name</span>
            <span className="tag r5 red">First Name</span>
          </Col>

          {/* SVG CURVES */}
          <svg className="tree-lines" viewBox="0 0 1200 400">
            {/* left to center */}
            <path d="M200 60 C380 60 420 200 600 200" />
            <path d="M200 160 C380 160 420 200 600 200" />
            <path d="M200 260 C380 260 420 200 600 200" />

            {/* center to right */}
            <path d="M600 200 C780 200 900 200 1000 200" />
          </svg>
        </Row>

        {/* CTA */}
        <Row className="justify-content-center mt-5">
          <Col xs="auto">
            <button className="cta-btn">
              Lets Integrate your CRM Now!
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SupportedLeadCRM;
