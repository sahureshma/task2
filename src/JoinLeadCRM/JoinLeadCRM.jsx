import React from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import "./JoinLeadCRM.css";
import linkImg from "../assest/link.png"; // ✅ make sure path is correct

const mockImages = [
  linkImg,
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=300&h=600&q=80",
  "https://images.unsplash.com/photo-1609921141835-710b7fa6e438?auto=format&fit=crop&w=300&h=600&q=80",
  "https://images.unsplash.com/photo-1555421689-3f034debb7a6?auto=format&fit=crop&w=300&h=600&q=80"
];

const JoinLeadCRM = () => {
  return (
    <section className="join-leadcrm">
      <Container>
        {/* HEADING */}
        <h5 className="section-heading text-center">
          Join Thousands of Professionals Using LeadCRM
        </h5>

        {/* HERO CARD */}
        <div className="hero-card">
          <h2 className="hero-title text-center">
            Your LinkedIn Powerhouse for Smarter Lead Management
          </h2>

          {/* INTEGRATIONS */}
          <div className="integrations justify-content-center">
            <Badge bg="light" text="dark">Salesforce</Badge>
            <Badge bg="light" text="dark">HubSpot</Badge>
            <Badge bg="light" text="dark">Pipedrive</Badge>
            <Badge bg="light" text="dark">Capterra ★ 4.8</Badge>
          </div>

          {/* PHONE PREVIEWS */}
          <Row className="preview-row">
            {mockImages.map((img, i) => (
              <Col
                key={i}
                xs={8}
                sm={6}
                md={3}
                className="preview-col"
              >
                <div className="preview-card phone-style">
                  <img src={img} alt="LeadCRM Mobile UI" />
                </div>
              </Col>
            ))}
          </Row>
        </div>

        {/* CTA */}
        <div className="cta-wrapper">
          <Button className="cta-btn">
            Get Started Today →
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default JoinLeadCRM;
