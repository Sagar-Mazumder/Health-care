import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = (props) => {
      const { title,photo,description,id} = props.service
      return (
            <div >
                  <Col>
                        <Card>
                              <Card.Img variant="top" src={photo} />
                              <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                    <Card.Text>
                                          {description.slice(0,100)}
                                    </Card.Text>
                                    <Link to={`/seemore/${id}`}>
                                    <button className="btn btn-warning">See More</button>

                                    </Link>
                              </Card.Body>
                        </Card>
                  </Col>

            </div>
      );
};

export default Services;