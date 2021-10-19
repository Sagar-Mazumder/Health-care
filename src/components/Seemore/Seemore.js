import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Seemore.css'
// after click all details 
const Seemore = () => {
      const { serviceId } = useParams();
      const [alldetails, setAllDetails] = useState([]);
      const [singleDetails, setSingleDetails] = useState([]);
      useEffect(() => {
            fetch('/singleMedical.json')
                  .then(res => res.json())
                  .then(data => setAllDetails(data))
      }, [])
      useEffect(() => {
            const singleDetails = alldetails.find(details => details.id === parseInt(serviceId));
            setSingleDetails(singleDetails)
      }, [alldetails])
      return (
            <div className="">
                  <Container>
                        <Row className="justify-content-md-center">

                              <Col md="auto">
                                    <img src={singleDetails?.photo} alt="" />
                                    <h5><span className="text-warning fw-bold">Name:</span>{singleDetails?.doctor}</h5>
                                    <h5><span className="text-warning fw-bold">Contact Him:</span>{singleDetails?.contact}</h5>
                                    <h5><span className="text-warning fw-bold">Visiting Hour:</span>{singleDetails?.visiting}</h5>
                                    <p>{singleDetails?.description}</p>
                              </Col>

                        </Row>
                  </Container>
            </div>
      );
};

export default Seemore;