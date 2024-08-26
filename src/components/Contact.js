import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from 'emailjs-com';

export const ContactForm = () => {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const ShinyButton = ({ onClick, text }) => {
    return (
      <a href="#" onClick={onClick} className="shiny-button">
        <span className="shiny-text">{text}</span>
      </a>
    );
  };

  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_gwesufq', 'template_z2l6ea5', formData, '95D64C-TBWz16U7Rf')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setEmailSent(true);
      }, (err) => {
        console.log('FAILED...', err);
      });
  };

  return (
    <section className='contact' id='contact'>
      <Container className='px-5'>
        <Row>
          <Col>
            <h2 className='mb-4'>Contact</h2>
            <p>Feel free to contact me through the email form below!</p>
          </Col>
        </Row>
        <Row>
          <Col>
          <Form onSubmit={handleSubmit}>
            <Row>
            <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter your name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className='formField'
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter your email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className='formField'
                />
              </Form.Group>
            </Row>
            
              

              <Form.Group controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className='formField'
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={3} 
                  placeholder="Enter your message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className='formField'
                />
              </Form.Group>

              <ShinyButton onClick={handleSubmit} text="Submit" />
            </Form>
            {emailSent && <p className="mt-3">Email sent successfully!</p>}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
