import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// old user login 
const Login = () => {
      const { signInGoogle, handleEmailChange, handlePasswordChange, handleLogin, error } = useAuth();
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
                  <div >
                        <h2 className="text-center fw-bold text-primary">LOGIN HERE</h2>
                        <Form onSubmit={handleLogin}>
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
                                    Login
                              </Button>
                        </Form>
                        <p>New to Health Care?<Link to="/register">Create Account</Link></p>
                        <h6>Sign In With Google</h6>
                        <button className="btn btn-white" onClick={signInHandeler}><i className="fab fa-google text-primary fs-2"></i></button>
                  </div>
            </div>
      );
};

export default Login;