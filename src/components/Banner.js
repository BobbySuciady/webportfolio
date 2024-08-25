import { Col, Container, Row } from "react-bootstrap";
import profilepic from "../assets/img/Profile.jpg";
import { useState, useEffect } from "react";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Banner = () => {
  const textToType = "WIlliam Jason Suciady";
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

    // Cleanup function to clear the timeout on unmount
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

            <p>
              I am currently a second year student majoring in Computer Science
              at the University of Melbourne. I am currently most proficient at
              full stack web development but I am eager to learn and gain
              experience beyond that scope.
            </p>

            <div className="social-icon mb-3" >
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
