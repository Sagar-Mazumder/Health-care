import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

// nav bar for header 
const Header = () => {
      const { user, logout } = useAuth();
      return (
            <div className="container mb-5">
                  <Navbar bg="warning" variant="dark" collapseOnSelect expand="lg">
                        <Container>
                              <Navbar.Brand as={Link} to="/home"><span><i className="me-2 fas fa-user-md"></i></span>Health Care</Navbar.Brand>
                              <Navbar.Toggle />
                              <Navbar.Collapse className="justify-content-end">
                                    <Nav.Link as={NavLink} style={{ color: 'white' }} to="/home">Home</Nav.Link>
                                    <Nav.Link as={NavLink} style={{ color: 'white' }} to="/appointment">Appointment</Nav.Link>
                                    <Nav.Link as={NavLink} style={{ color: 'white' }} to="/about">AboutUs</Nav.Link>

                                    {user.email ? <button className="btn btn-light" onClick={logout}>Logout</button> : <NavLink to="/login"><button className="btn btn-light">LogIn</button></NavLink>
                                    }
                                    <Navbar.Text>
                                          {user.email && <span className="ms-1 fw-bold text-white">Signed in as:{user.displayName}</span>}
                                    </Navbar.Text>
                              </Navbar.Collapse>
                        </Container>
                  </Navbar>
            </div>
      );
};

export default Header;