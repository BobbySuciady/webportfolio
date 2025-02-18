import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct mailto link with recipient email
    const mailtoLink = `mailto:jasonsuciady@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Hi, \n\n${formData.message}\n\nFrom, ${formData.name}`)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
  };

  return (
    <section className='contact' id='contact'>
      <Container className='px-5'>
        <Row>
          <Col>
            <h2 className='mb-4'>Contact</h2>
            <p>Click submit to open your email client and send the message.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter your name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className='formField'
                  required
                />
              </Form.Group>

              <Form.Group controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className='formField'
                  required
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
                  required
                />
              </Form.Group>

              <Button type="submit" className='shiny-button mt-3'>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
