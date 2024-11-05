import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiReact, DiPython, DiJava } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import {
  SiDjango,
  SiRedis,
  SiTypescript,
  SiVuedotjs,
  SiCsharp,
  SiSass,
  SiSpring,
  SiDotnet,
  SiJavascript,
  SiVercel,
  SiDocker,
} from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";

function Techstack() {
  return (
    <Container className="tech-box">
      <div className="tech-row">
        <div className="tech-name">Langauge</div>
        <ul className="tech-list">
          <li
            className="tech-item"
            style={{ backgroundColor: "#4B8BBE", color: "white" }}
          >
            <DiPython />
            Python
          </li>
          <li
            className="tech-item"
            style={{ backgroundColor: "#A64AC9", color: "white" }}
          >
            <SiCsharp />
            C#
          </li>
          <li
            className="tech-item"
            style={{ backgroundColor: "#F4F4F4", color: "#5382A1" }}
          >
            <DiJava />
            JAVA
          </li>
          <li className="tech-item" style={{ backgroundColor: "#F7DF1E" }}>
            <SiJavascript />
            JavaScript
          </li>
          <li
            className="tech-item"
            style={{ backgroundColor: "#007ACC", color: "white" }}
          >
            <SiTypescript />
            TypeScript
          </li>
        </ul>
      </div>
      <div className="tech-row">
        <div className="tech-name">Frontend</div>
        <ul className="tech-list">
          <li className="tech-item" style={{ backgroundColor: "#61DAFB" }}>
            <DiReact />
            React
          </li>
          <li
            className="tech-item"
            style={{ backgroundColor: "#42B883", color: "white" }}
          >
            <SiVuedotjs />
            Vuejs
          </li>
          <li
            className="tech-item"
            style={{ backgroundColor: "#CC6699", color: "white" }}
          >
            <SiSass />
            Sass
          </li>
        </ul>
      </div>
      <div className="tech-row">
        <div className="tech-name">Backend</div>
        <ul className="tech-list">
          <li
            className="tech-item"
            style={{ backgroundColor: "#44B78B", color: "white" }}
          >
            <SiDjango />
            Django
          </li>
          <li
            className="tech-item"
            style={{ backgroundColor: "#512BD4", color: "white" }}
          >
            <SiDotnet />
            ASP.net
          </li>
          <li className="tech-item" style={{ backgroundColor: "#A2D95C" }}>
            <SiSpring />
            Spring
          </li>
        </ul>
      </div>
      <div className="tech-row">
        <div className="tech-name">DevOps</div>
        <ul className="tech-list">
          <li
            className="tech-item"
            style={{ backgroundColor: "#232F3E", color: "#FF9900" }}
          >
            <FaAws />
            AWS
          </li>
          <li className="tech-item" style={{ backgroundColor: "#E5E5E5" }}>
            <SiVercel />
            Vercel
          </li>
          <li
            className="tech-item"
            style={{ backgroundColor: "#2496ED", color: "white" }}
          >
            <SiDocker />
            Docker
          </li>
        </ul>
      </div>
      <div className="tech-row">
        <div className="tech-name">Database</div>
        <ul className="tech-list">
          <li
            className="tech-item"
            style={{ backgroundColor: "#F29111", color: "#00758F" }}
          >
            <TbBrandMysql />
            MySQL
          </li>
          <li
            className="tech-item"
            style={{ backgroundColor: "#336791", color: "white" }}
          >
            <BiLogoPostgresql />
            Postgresql
          </li>
          <li
            className="tech-item"
            style={{ backgroundColor: "#D82C20", color: "white" }}
          >
            <SiRedis />
            Redis
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default Techstack;
