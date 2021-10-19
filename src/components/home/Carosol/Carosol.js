import React from 'react';
import { Button, Carousel, Container } from 'react-bootstrap';
import './Carosol.css'

const Carosol = () => {
      
      return (
            <div>
                  <Container>
                  <Carousel variant="dark">
                        <Carousel.Item>
                              <img
                                    className="d-block w-100"
                                    src="https://i.ibb.co/6tZVz3f/slider1.jpg"
                                    alt="First slide"
                              />
                              <Carousel.Caption>
                                    <h3 className="text-warning fw-bolder fs-1 ">Meet Our Doctor’s Team</h3>
                                    
                                    <Button variant="outline-warning">Know More</Button>{' '}

                              </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                              <img
                                    className="d-block w-100"
                                    src="https://i.ibb.co/HzvwdVx/slider2.jpg"
                                    alt="Second slide"
                              />

                              <Carousel.Caption>
                                    <h3 className="text-warning fw-bolder fs-1">Book your Appointment</h3>
                                    
                                    <Button variant="outline-warning">Book Now</Button>{' '}

                              </Carousel.Caption>
                        </Carousel.Item>
                        
                  </Carousel>
                  </Container>
            </div>
      );
};

export default Carosol;