import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Introduce from "./Introduce";
import ProfilePhoto from "../../assets/img_profile.JPEG";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <h1 className="project-heading">
          Professional <strong className="about-title">Skillset </strong>
        </h1>
        <Techstack />
      </Container>
    </Container>
  );
}

export default About;
