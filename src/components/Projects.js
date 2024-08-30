import React from 'react';
import { Container, Row, Col, Carousel } from "react-bootstrap";
import SlideInSection from './SlideInSection'; // Import the SlideInSection component
import tara from '../assets/img/tarademo.gif';
import quizplus from '../assets/img/QuizPlus2.gif';
import forumgif from '../assets/img/Forum.gif';
import emailsender from '../assets/img/Emailsender.gif';
import Scuffoogle from '../assets/img/Scuffoogle.gif';
import Trackjam from '../assets/img/TrackJam.gif';

const TechCard = ({ techName }) => {
  return (
    <div className="techCard">
      <p className='techName'>{techName}</p>
    </div>
  );
};

const ShinyButton = ({ link, text }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="shiny-button">
      <span className="shiny-text">{text}</span>
    </a>
  );
};

export const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <Container>
        <Row>
          <Col>
            <h2 className='mb-4'>Featured Projects</h2>

            <SlideInSection direction="left">
              <Row className='d-flex justify-content-center align-items-center mb-5'>
                <Col xs={12} md={6} >
                  <Row className='d-flex justify-content-center align-items-center flex-column'>
                    <h1 className="d-md-none d-sm-block text-center">TARA</h1>
                    <img className='projectImgHorizontal' src={tara} alt="TARA Project" />
                  </Row>
                </Col>
                <Col xs={12} md={6} className='px-4 flex-column text-center text-md-start'>
                  <h1 className="d-none d-md-block">TARA</h1>
                  <p>A web application for students to rate and review their teachers/professors. It is designed to provide feedback for teachers regarding their teaching style and help students choose a tutor by checking the reviews. Built with a fully functional user system that requires email authentication to avoid bots.</p>
                  <div className='techsUsed d-flex flex-wrap justify-content-center justify-content-md-start'>
                    <TechCard techName="Django" />
                    <TechCard techName="Python" />
                    <TechCard techName="Javascript" />
                    <TechCard techName="HTML/CSS" />
                    <TechCard techName="SQLite" />
                  </div>
                  <ShinyButton link="https://github.com/BrianAnakPintar/TARA" text="View on GitHub" />
                </Col>
              </Row>
            </SlideInSection>


            <SlideInSection direction="right">
              <Row className='d-flex justify-content-center align-items-center mb-5'>
                {/* Content on the left (text and tech stack) */}
                <Col xs={12} md={6} className='px-4 flex-column text-center text-md-start order-2 order-md-1'>
                  <h1 className="d-none d-md-block">QuizPlus</h1>
                  <p>A quiz web application designed for students to understand math solutions. Teachers can create quizzes and set the answers to be files containing their step by step solutions. Students can directly write on the canvas provided in the web-app. The grading system will generate personalised detailed feedback for the student explaining their mistakes.</p>
                  <div className='techsUsed d-flex flex-wrap justify-content-center justify-content-md-start'>
                    <TechCard techName="React" />
                    <TechCard techName="Node" />
                    <TechCard techName="Express" />
                    <TechCard techName="Javascript" />
                    <TechCard techName="MySQL" />
                    <TechCard techName="HTML/CSS" />
                    <TechCard techName="JWT" />
                    <TechCard techName="OpenAI" />
                  </div>
                  <ShinyButton link="https://github.com/BobbySuciady/quizplus" text="View on GitHub" />
                </Col>

                {/* Image on the right */}
                <Col xs={12} md={6} className='order-1 order-md-2'>
                  <Row className='d-flex justify-content-center align-items-center flex-column order'>
                    <h1 className="d-md-none d-sm-block text-center">QuizPlus</h1>
                    <img className="projectImgHorizontal" src={quizplus} alt="QuizPlus Project"/>
                  </Row>
                </Col>
              </Row>
            </SlideInSection>




            <SlideInSection direction="left">
              <Row className='d-flex justify-content-center align-items-center mb-5'>
                <Col xs={12} md={6}>
                  <Row className='d-flex justify-content-center align-items-center flex-column'>
                    <h1 className="d-md-none d-sm-block text-center">TrackJam</h1>
                    <img className='projectImgVertical' src={Trackjam} alt="TrackJam Project" />
                  </Row>
                </Col>
                <Col xs={12} md={6} className='px-4 flex-column text-center text-md-start'>
                  <h1 className="d-none d-md-block">TrackJam</h1>
                  <p>This project won the "Most Innovative" award 🏆 at University of Melbourne's CISSA hackathon. A web app that turns your Spotify listening habits into a fun competition. It tracks your daily music minutes, converts them into points, and lets you compete with friends on a leaderboard. Send song Quests to friends to earn points together, and stay connected by seeing their last played tracks and favorite songs.</p>
                  <div className='techsUsed d-flex flex-wrap justify-content-center justify-content-md-start'>
                    <TechCard techName="Next.js" />
                    <TechCard techName="React" />
                    <TechCard techName="Javascript" />
                    <TechCard techName="HTML/CSS" />
                    <TechCard techName="MySQL" />
                    <TechCard techName="SpotifyAPI" />
                  </div>
                  <ShinyButton link="https://github.com/BobbySuciady/Trackjam" text="View on GitHub" />
                </Col>
              </Row>
            </SlideInSection>


          </Col>
        </Row>

        

        {/* ========= ARCHIVED PROJECTS ==========  */}

        <h3 className='mb-4 mt-5'>Archived Projects</h3>
        <Row className='px-5'>
          <Col>
            <Carousel interval={null}>

              
            <Carousel.Item className='px-5'>
              <Row className='d-flex justify-content-center align-items-center mb-5'>

                <Col xs={12} md={6} className='px-3'>
                  <Row className='d-flex justify-content-center align-items-center flex-column px-3'>
                    <h1 className="d-md-none d-sm-block text-center">Scuffoogle</h1>
                    <img className='archivedProjectImgHorizontal' src={Scuffoogle} alt="Scuffoogle Project" />
                  </Row>
                </Col>

                <Col xs={12} md={6} className='px-4 flex-column text-center text-md-start'>
                  <h1 className="d-none d-md-block">Scuffoogle</h1>
                  <p>This project won University of Melbourne's local hackathon🏆held by the Computing and Information Systems Student Association for being the most annoying program. It is a search engine that insults the user based on their query.</p>
                  <div className='techsUsed d-flex flex-wrap justify-content-center justify-content-md-start'>
                    <TechCard techName="Python" />
                    <TechCard techName="Django" />
                    <TechCard techName="HTML/CSS" />
                    <TechCard techName="OpenAI" />
                  </div>
                  <ShinyButton link="https://github.com/BobbySuciady/ScuffathonGoogle" text="View on GitHub" />
                </Col>

              </Row>
            </Carousel.Item>

              

             
            <Carousel.Item className='px-5'>
              <Row className='d-flex justify-content-center align-items-center mb-5'>

                <Col xs={12} md={6} className='px-3'>
                  <Row className='d-flex justify-content-center align-items-center flex-column px-3'>
                    <h1 className="d-md-none d-sm-block text-center">Email Sender</h1>
                    <img className='archivedProjectImgHorizontal' src={emailsender} alt="Email Sender Project" />
                  </Row>
                </Col>
                <Col xs={12} md={6} className='px-4 flex-column text-center text-md-start'>
                  <h1 className="d-none d-md-block">Email Sender</h1>
                  <p>A web application similar to Mailchimp. Sends multiple identical emails with attachments, each with different names based on the recipient. Also allows to draft the emails in your Gmail instead of sending them instantly.</p>
                  <div className='techsUsed d-flex flex-wrap justify-content-center justify-content-md-start'>
                    <TechCard techName="Django" />
                    <TechCard techName="Python" />
                    <TechCard techName="HTML/CSS" />
                    <TechCard techName="GmailAPI" />
                  </div>
                  <ShinyButton link="https://github.com/BobbySuciady/emailsender" text="View on GitHub" />
                </Col>
              </Row>
            </Carousel.Item>

              

             
            <Carousel.Item className='px-5'>
              <Row className='d-flex justify-content-center align-items-center mb-5'>
                <Col xs={12} md={6}>
                  <Row className='d-flex justify-content-center align-items-center flex-column'>
                    <h1 className="d-md-none d-sm-block text-center">The Forum</h1>
                    <img className='archivedProjectImgVertical' src={forumgif} alt="The Forum Project" />
                  </Row>
                </Col>
                <Col xs={12} md={6} className='px-4 flex-column text-center text-md-start'>
                  <h1 className="d-none d-md-block">The Forum</h1>
                  <p>Registration website for a university club talkshow event. Facilitated over 400 registrations, allowing custom tickets to be sent to registrants.</p>
                  <div className='techsUsed d-flex flex-wrap justify-content-center justify-content-md-start'>
                    <TechCard techName="Django" />
                    <TechCard techName="Python" />
                    <TechCard techName="Javascript" />
                    <TechCard techName="SQLite" />
                    <TechCard techName="HTML/CSS" />
                  </div>
                  <ShinyButton link="https://github.com/BobbySuciady/eventbrite" text="View on GitHub" className="small-button"/>
                </Col>
              </Row>
            </Carousel.Item>

            

            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
