import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';
// after clicking login page show 
const PrivateRoute = ({ children, ...rest }) => {
      const { user, loading } = useAuth();
      if (loading) {
            return <div className="d-flex justify-content-center">
                  <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                  </div>
            </div>
      }
      return (
            <Route
                  {...rest}
                  render={({ location }) =>
                        user.email ? (
                              children
                        ) : (
                              <Redirect
                                    to={{
                                          pathname: "/login",
                                          state: { from: location }
                                    }}
                              />
                        )
                  }
            />
      );
};

export default PrivateRoute;