import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Type from "./Type";
import ProfilePhoto from "../../assets/img_profile.JPEG";
import Information from "./Information";
import { FiDownload } from "react-icons/fi";
import pdf from "../../assets/EunheeJeong_Resume.pdf";
import GitHub from "./GitHub";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Eunhee (Dora) Jeong</strong>
              </h1>

              <div className="heading-bottom">
                <Type />
                <Button className="btn-download" href={pdf} target="_blank">
                  Resume
                  <FiDownload />
                </Button>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img className="home-profile" src={ProfilePhoto} />
            </Col>
          </Row>

        </Container>
      </Container>
      <Information></Information>
      <GitHub></GitHub>
    </section>
  );
}

export default Home;
