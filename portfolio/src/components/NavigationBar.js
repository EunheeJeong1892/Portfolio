import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

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
        <Navbar.Brand href="/" className="d-flex">
          Logo
        </Navbar.Brand>
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
                to="resume"
                smooth={true}
                duration={300}
                onClick={() => updateExpanded(false)}
                className="nav-link"
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </ScrollLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
