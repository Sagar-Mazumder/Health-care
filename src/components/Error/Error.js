import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Error.css'
const Error = () => {
      return (
            <div className="container">
                  <Row>
                        <Col>
                              <div className="text-center design">
                                    <h1>404</h1>
                                    <h3>The page you are looking for is not available</h3>
                                    <Link to="/home"> <button type="button" className="btn btn-warning">Go Back</button></Link>
                              </div>
                        </Col>
                  </Row>

            </div>
      );
};

export default Error;