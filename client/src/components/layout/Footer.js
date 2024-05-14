import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container fluid className="container-fluid footer">
      <Row>
        <Col xs="6">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </Col>
        <Col xs="6">
          <div className="col text-center text-lg-left pt-3">
            <a className="" href="/contact/">
              <h3>Connect With Us</h3>
            </a>
            <div className="social-links pt-1">
              <a
                target="_blank"
                href="https://mail.google.com/"
                className="gmail"
                title="Connect on Gmail"
              >
                <i className="fab fa-google fa-3x"></i>
              </a>

              <a
                target="_blank"
                href="https://github.com/leo-deverlop"
                className="Github"
                title="Connect on Github"
              >
                <i className="fab fa-github fa-3x"></i>
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
