import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
      const { user, loading } = useAuth();
      if (loading) {
            return <div className="spinner-border text-primary d-flex justify-content-center" role="status">
                  <span className="visually-hidden d-flex justify-content-center">Loading...</span>
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