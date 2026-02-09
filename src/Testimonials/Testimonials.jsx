import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Testimonials.css";

const testimonials = [
  {
    text: `"Reliable Data Sync I've only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive."`,
    name: "David Fincher",
    source: "On Capterra",
    avatar: "https://i.pravatar.cc/50?img=12",
  },
  {
    text: `"My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. The responsive customer support is a big plus. Highly recommend it for reliable lead management!"`,
    name: "Lillian Williams",
    source: "On Capterra",
    avatar: "https://i.pravatar.cc/50?img=32",
  },
  {
    text: `"Reliable Data Sync I've only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive."`,
    name: "Michael",
    source: "On Capterra",
    avatar: "https://i.pravatar.cc/50?img=45",
  },
];

const Stars = () => (
  <div className="stars">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="testimonials-section py-5">
      <Container>
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold">
            What people are saying about{" "}
            <span className="text-green">LeadCRM</span>
          </h3>

          <div>
            <Button variant="light" className="nav-btn me-2">
              <FaChevronLeft />
            </Button>
            <Button variant="light" className="nav-btn">
              <FaChevronRight />
            </Button>
          </div>
        </div>

        {/* Cards */}
        <Row>
          {testimonials.map((item, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="testimonial-card h-100">
               <Card.Body className="d-flex flex-column">
  
  {/* Top content */}
  <div className="review-content">
    <p className="testimonial-text">{item.text}</p>
    <Stars />
  </div>

  {/* Bottom user info */}
  <div className="user-info d-flex align-items-center mt-auto">
    <img
      src={item.avatar}
      alt={item.name}
      className="rounded-circle me-3"
      width="45"
      height="45"
    />
    <div>
      <h6 className="mb-0 fw-semibold">{item.name}</h6>
      <small className="text-muted">{item.source}</small>
    </div>
  </div>

</Card.Body>

              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
