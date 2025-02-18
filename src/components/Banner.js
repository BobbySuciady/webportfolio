import { Col, Container, Row, Button } from "react-bootstrap";
import profilepic from "../assets/img/Profile.jpg";
import { useState, useEffect } from "react";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Banner = () => {
  const textToType = "William Jason Suciady";
  const speed = 100;

  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;

    const typeNextCharacter = () => {
      if (index < textToType.length) {
        setTypedText(textToType.slice(0, index + 1));
        index++;
        setTimeout(typeNextCharacter, speed);
      }
    };

    const typingTimeout = setTimeout(typeNextCharacter, speed);

    return () => clearTimeout(typingTimeout);
  }, [textToType, speed]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col>
            <span className="tagline">Hi, my name is</span>
            <h1>
              <span className="wrap">{typedText}</span>
            </h1>
            <p style={{ marginBottom: "0px" }}>
            I am currently a third-year Computer Science student at the University of Melbourne, passionate about software engineering to streamline workflows and enhance efficiency. I am also interested in AI/ML for automation and intelligent systems.
            </p>

            {/* ✅ Inline Style to Reduce Space */}
            <div >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button className="shiny-button">View Resume</Button>
              </a>
            </div>

            {/* ✅ Ensure Social Icons Stay Close */}
            <div className="social-icon mt-3">
              <a href="https://www.linkedin.com/in/william-jason-suciady-a41609257">
                <img src={navIcon1} alt="linkedin" />
              </a>
              <a href="https://github.com/BobbySuciady">
                <img src={navIcon2} alt="github" />
              </a>
              <a href="https://www.instagram.com/williamjasonsuciady/">
                <img src={navIcon3} alt="instagram" />
              </a>
            </div>
          </Col>
          <Col xs={10} md={6} xl={5} className="d-flex align-items-center">
            <div className="profilepicture-container">
              <img
                className="profilepicture"
                src={profilepic}
                alt="profilepicture"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
