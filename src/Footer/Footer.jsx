import React from "react";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
 
  FaEnvelopeCircleCheck
} from "react-icons/fa6";

import "./Footer.css";
import logo from "./../assest/Leadcrmlogo.png"
import { FaChromecast, FaPhoneAlt, FaRegQuestionCircle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="gy-4">

          {/* Left Section */}
          <Col lg={3} md={6}>
            <img src={logo} alt="LeadCRM" className="footer-logo mb-3" />
            <p className="footer-text">
              LeadCRM is LinkedIn integration tool for your CRM.
            </p>

            <div className="social-icons mt-3">
              <div className="icon-circle"><FaFacebookF /></div>
              <div className="icon-circle"><FaXTwitter /></div>
              <div className="icon-circle"><FaLinkedinIn /></div>
              <div className="icon-circle"><FaInstagram /></div>
            </div>
          </Col>

          {/* Integrations */}
          <Col lg={2} md={6}>
            <h6 className="footer-title">Integrations</h6>
            <ul className="footer-links">
              <li>HubSpot</li>
              <li>Salesforce</li>
              <li>Pipedrive</li>
   <li>
  Close.io <Badge className="coming-badge" pill>Coming Soon</Badge>
</li>


              <li>
                Insightly<Badge className="coming-badge" pill>Coming Soon</Badge>
              </li>
            </ul>
          </Col>

          {/* Alternative */}
          <Col lg={2} md={6}>
            <h6 className="footer-title">Alternative</h6>
            <ul className="footer-links">
              <li>Surfe VS LeadCRM</li>
              <li>Linkmatch Alternative</li>
            </ul>
          </Col>

          {/* Legal */}
          <Col lg={2} md={6}>
            <h6 className="footer-title">Legal</h6>
            <ul className="footer-links">
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
          </Col>

          {/* Contact */}
          <Col lg={3} md={12}>
            <h6 className="footer-title">Contact Us</h6>

            <div className="contact-item">
              <FaEnvelopeCircleCheck className="me-2" />
              support@leadcrm.io
            </div>

            <div className="contact-item">
              <FaPhoneAlt className="me-2" />
              +1 231-538-7466
            </div>

            <div className="contact-item">
              <FaRegQuestionCircle className="me-2" />
              Help Center
            </div>

            <Button className="chrome-btn mt-3">
              <FaChromecast className="me-2" />
              Available in Chrome
            </Button>
          </Col>

        </Row>

        <hr className="footer-divider mt-4" />

        <p className="disclaimer">
          Disclaimer : LeadCRM is not endorsed or certified by LinkedIn. 
          All LinkedIn(tm) logos and trademarks displayed on this tool are 
          property of LinkedIn. LeadCRM is distributed AS IS. 
          Your use of LeadCRM is at your own risk.
        </p>

        <div className="copyright text-center mt-2">
          Copyright © 2025 LeadCRM. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
