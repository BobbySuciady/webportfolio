import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setFullscreen(false); // Close the fullscreen menu when a link is clicked
  };

  const toggleFullscreenMenu = () => {
    setFullscreen(!fullscreen); // Toggle fullscreen mode
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <span className="logo-text">WJS</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleFullscreenMenu}>
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        
        {/* Standard Navbar Collapse */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={`navbar-link ${activeLink === "home" ? "active" : ""}`}
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={`navbar-link ${activeLink === "skills" ? "active" : ""}`}
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={`navbar-link ${activeLink === "projects" ? "active" : ""}`}
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={`navbar-link ${activeLink === "contact" ? "active" : ""}`}
              onClick={() => onUpdateActiveLink("contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Fullscreen Navbar */}
        {fullscreen && (
          <div className="fullscreen-navbar show">
            <button className="close-button" onClick={toggleFullscreenMenu}>
              ×
            </button>
            <Nav className="flex-column">
              <Nav.Link
                href="#home"
                className={`navbar-link ${activeLink === "home" ? "active" : ""} ${fullscreen ? "" : "d-none"}`}
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={`navbar-link ${activeLink === "skills" ? "active" : ""}`}
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={`navbar-link ${activeLink === "projects" ? "active" : ""}`}
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className={`navbar-link ${activeLink === "contact" ? "active" : ""}`}
                onClick={() => onUpdateActiveLink("contact")}
              >
                Contact
              </Nav.Link>
            </Nav>
          </div>
        )}
      </Container>
    </Navbar>
  );
};
