import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Information() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 className="home-about-title ">LET ME INTRODUCE MYSELF</h1>
            <p className="home-about-body">
              I’m a{" "}
              <font className="introduce-underline">Full Stack Developer</font>{" "}
              based in London with over 5 years of experience, known for diving
              fearlessly into both backend and frontend development.
              <br />
              <br />
              From building scalable solutions in{" "}
              <font className="introduce-underline">
                Django, C#, and Java
              </font>{" "}
              to creating dynamic interfaces with{" "}
              <font className="introduce-underline">
                React, Vue, and TypeScript
              </font>
              , I bring well-rounded expertise to every project. <br />
              <br />
              With <font className="introduce-underline">AWS</font> for
              infrastructure and{" "}
              <font className="introduce-underline">MySQL</font> and{" "}
              <font className="introduce-underline">Redis</font> for data
              management, my advanced skills span Python, Java, JavaScript, and
              more. Constantly learning, <br />
              <br />
              I’m currently expanding into NextJS and OpenSearch. Let’s build
              something amazing together!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt></Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/eunheeJeong1892"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/eunhee-jeong/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Information;
