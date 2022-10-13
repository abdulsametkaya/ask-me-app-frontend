import React from "react";
import "./footer.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo/logo.png";
import { settings } from "../../../utils/settings";
import ContactInfo from "../contact/contact-info/contact-info";

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Container>
        <Row>
          <Col md={6} lg={4}>
            <Link className="logoLink">
              <img src={logo} alt={settings.siteName} />
            </Link>
            <p>
              No matter who you want to connect and share. It is the quick and
              easy-to-use online chat tool you need to do it!
            </p>
          </Col>
          <Col md={6} lg={4}>
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Chat</Link>
              </li>
              <li>
                <Link to="/">About us</Link>
              </li>
              <li>
                <Link to="/">Contact us</Link>
              </li>
              <li>
                <Link to="/">Privacy policy</Link>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={4}>
            <h2>Contact Us</h2>
            <ContactInfo />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
