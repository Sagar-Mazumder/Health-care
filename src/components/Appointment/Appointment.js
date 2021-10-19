import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';

const Appointment = () => {
      return (
            <div className="container">
                  <Form>
                        <Row className="mb-3">
                              <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder="Enter First Name" />
                              </Form.Group>

                              <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Second Name" />
                              </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                              <Form.Label>Address</Form.Label>
                              <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                              <Form.Label>Address 2</Form.Label>
                              <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Row className="mb-3">
                              <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control />
                              </Form.Group>

                              <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                          <option>Choose...</option>
                                          <option>...</option>
                                    </Form.Select>
                              </Form.Group>

                              <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control />
                              </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" id="formGridCheckbox">
                              <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button variant="warning" type="submit">
                              Submit
                        </Button>
                  </Form>
            </div>
      );
};

export default Appointment;