import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import Slider from "react-slick";

import reactLogo from "../assets/img/React_logo_logotype_emblem (1).png";
import pythonLogo from "../assets/img/python.png";
import javascriptLogo from "../assets/img/Unofficial_JavaScript_logo_2.svg";
import cLogo from "../assets/img/C_Logo.png";
import htmlLogo from "../assets/img/HTML5_badge.svg";
import cssLogo from "../assets/img/css3_badge.png";
import nodeLogo from "../assets/img/nodejs-icon-svgrepo-com.svg";
import djangoLogo from "../assets/img/django-logo-negative.svg";
import sqlliteLogo from "../assets/img/SQLite_Vector_logo-1024x705.png";
import mysqlLogo from "../assets/img/MySQL-Logo.wine.png";
import bootstraplogo from '../assets/img/Bootstrap_logo.svg.png';
import nextLogo from '../assets/img/nextjsLogo.png';
import tailwindLogo from '../assets/img/Tailwind.svg';

export const Skills = () => {
  const [showModal, setShowModal] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleShow = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShowModal(true);
    }, 500); // Match this duration with the CSS transition time
  };

  const handleClose = () => {
    setShowModal(false);
    setFadeOut(false);
  };

  const SkillCard = ({ imgUrl }) => {
    return (
      <div className="skillCard">
        <img src={imgUrl} alt="Skill logo" />
      </div>
    );
  };

  const skills = [
    { imgUrl: pythonLogo },
    { imgUrl: javascriptLogo },
    { imgUrl: cLogo },
    { imgUrl: htmlLogo },
    { imgUrl: cssLogo },
    { imgUrl: reactLogo },
    { imgUrl: djangoLogo },
    { imgUrl: nodeLogo },
    { imgUrl: sqlliteLogo },
    { imgUrl: mysqlLogo },
    { imgUrl: bootstraplogo},
    { imgUrl: nextLogo},
    { imgUrl: tailwindLogo},
  ];

  const shuffleArray = (array) => {
    let newArray = array.slice();
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '10px',
        },
      },
    ],
  };

  const settings2 = {
    ...settings,
    rtl: true,
  };

  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <h2>Skills</h2>
            <p>
              I'm continuously expanding my technical prowess, with a keen
              passion for learning and mastering new skills every single day.
              Here's a snapshot of what I bring to the table:
            </p>

            <div className={`carousel-container ${fadeOut ? 'fade-out' : ''}`} onClick={handleShow}>
              <div className="carousel-fade-left"></div>
              <div className="carousel-fade-right"></div>
              <Slider {...settings}>
                {shuffleArray(skills).map((skill, index) => (
                  <SkillCard key={index} {...skill} />
                ))}
              </Slider>
              <Slider {...settings2}>
                {shuffleArray(skills).map((skill, index) => (
                  <SkillCard key={index} {...skill} />
                ))}
              </Slider>
              <Slider {...settings}>
                {shuffleArray(skills).map((skill, index) => (
                  <SkillCard key={index} {...skill} />
                ))}
              </Slider>
            </div>
            <p>Click to View!</p>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleClose} size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title>Tech Stack</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>Languages: Python, Javascript, C, SQL</li>
            <li>Web and Software Development: React, Next, Node, Express, Django, HTML, CSS</li>
            <li>Database Management: MySQL, SQLite</li>
            <li>Tools: Git, Bootstrap, Tailwind</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};
