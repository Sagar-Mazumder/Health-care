import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const About = () => {
      return (
            <div className="container">
                  <Row xs={1} md={2}  >

                        <Col >
                              <img className="img-fluid" src="https://i.ibb.co/fM80k7T/about1.jpg" alt="" />
                        </Col>

                        <Col >
                              <h3 className="fw-bold">Medical availability and clinical practice varies across the world due to regional differences in culture and technology.</h3>
                              <p>In modern clinical practice, physicians and physician assistants personally assess patients in order to diagnose, prognose, treat, and prevent disease using clinical judgment. The doctor-patient relationship typically begins an interaction with an examination of the patient's medical history and medical record, followed by a medical interview[10] and a physical examination. Basic diagnostic medical devices (e.g. stethoscope, tongue depressor) are typically used. After examination for signs and interviewing for symptoms, the doctor may order medical tests (e.g. blood tests), take a biopsy, or prescribe pharmaceutical drugs or other therapies.</p>
                              <Button className="btn btn-warning">Learn More</Button>
                        </Col>
                  </Row>
            </div>
      );
};

export default About;