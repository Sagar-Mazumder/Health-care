import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Services from '../Services/Services';

const Service = () => {
      const [service, setService] = useState([]);
      useEffect(() => {
            fetch('./medical.json')
                  .then(res => res.json())
                  .then(data => setService(data))
      }, [])
      return (
            <div className="container">
                  <h1 className="fw-bold text-warning mt-5 fs-1">Our Services</h1>
                  <Row xs={1} md={3} className="g-4">

                        {
                              service.map(service => <Services
                                    key={service.id}
                                    service={service}
                              ></Services>)
                        }

                  </Row>

            </div>
      );
};

export default Service;