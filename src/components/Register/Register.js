import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
      const { signInGoogle, handleNameChange, handleEmailChange, handlePasswordChange, handleRegistration, error } = useAuth();
      const location = useLocation();
      const history = useHistory();
      const redirect_uri = location.state?.from || '/home'
      const signInHandeler = () => {
            signInGoogle()
                  .then((result) => {
                        history.push(redirect_uri)
                  })
      }
      return (
            <div className="container">
                  <div>
                        <h2 className="text-center fw-bold text-primary">Register:Create Account</h2>
                        <Form onSubmit={handleRegistration}>
                              <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>Enter Your Name</Form.Label>
                                    <Form.Control className="w-25" onBlur={handleNameChange} type="text" placeholder="Enter Name" />
                              </Form.Group>
                              <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control className="w-25" onBlur={handleEmailChange} type="email" placeholder="Enter email" />
                              </Form.Group>
                              <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control className="w-25" onBlur={handlePasswordChange} type="password" placeholder="Password" />
                              </Form.Group>
                              <div>
                                    {error}
                              </div>
                              <Button variant="primary" type="submit">
                                    Register
                              </Button>
                        </Form>
                        <p>Already have an account?<Link to="/login">Login</Link></p>
                        <h6>Register With Google</h6>
                        <button className="btn btn-white" onClick={signInHandeler}><i className="fab fa-google text-primary fs-2"></i></button>
                        
                  </div>
            </div>
      );
};

export default Register;