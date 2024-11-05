import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./styles.css";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <title>Eunhee Jeong | Portfolio</title>
        </Helmet>
        <div className="App">
          <NavigationBar />
          <ScrollToTop />
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="resume">
            <Resume />
          </section>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
