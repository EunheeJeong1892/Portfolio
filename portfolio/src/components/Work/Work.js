import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../assets/EunheeJeong_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Work() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="work-section">
        <h1>Work Experience</h1>
        <div className="work-list">
          <ul>
            <li>
              <div className="date">Nov 2021 - Jun 2024</div>
              <div className="info">
                <p className="company">
                  Myplay Company, Python Full Stack Developer
                </p>
                <p className="desc">
                  Developed a social platform streamlines the organisation and
                  participation in amateur football matches.
                </p>
                <br />-
              </div>
            </li>
            <li>
              <div className="date">Jul 2017 - Oct 2021</div>
              <div className="info">
                <p className="company">Covision, Full-Stack Developer</p>
                <p className="desc">
                  Customised collaborative software solutions for corporate
                  clients.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Work;
