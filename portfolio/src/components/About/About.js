import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Introduce from "./Introduce";
import ProfilePhoto from "../../assets/img_profile.JPEG";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1
              style={{
                color: "#222222",
                fontSize: "2.1em",
                paddingBottom: "20px",
              }}
            >
              Know Who <strong className="about-title">I'M</strong>
            </h1>
            <Introduce />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={ProfilePhoto} alt="about" className="about-profile" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="about-title">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="about-title">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
