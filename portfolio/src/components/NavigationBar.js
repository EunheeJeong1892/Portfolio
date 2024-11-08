import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link as ScrollLink } from "react-scroll";
import { MdWorkOutline } from "react-icons/md";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import pdf from "../assets/EunheeJeong_Resume.pdf";

function NavigationBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <ScrollLink
                to="home"
                smooth={true}
                duration={300}
                onClick={() => updateExpanded(false)}
                className="nav-link" // Bootstrap 스타일을 위한 클래스 추가
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </ScrollLink>
            </Nav.Item>
            <Nav.Item>
              <ScrollLink
                to="about"
                smooth={true}
                duration={300}
                onClick={() => updateExpanded(false)}
                className="nav-link"
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </ScrollLink>
            </Nav.Item>
            <Nav.Item>
              <ScrollLink
                to="work"
                smooth={true}
                duration={300}
                onClick={() => updateExpanded(false)}
                className="nav-link"
              >
                <MdWorkOutline style={{ marginBottom: "2px" }} /> Work
              </ScrollLink>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href={pdf}
                target="_blank"
                rel="noopener noreferrer"
                download
                onClick={() => updateExpanded(false)}
                className="nav-link"
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
