import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { state, dispatch } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={props => {
        if (!state.isAuthenticated) {
          dispatch({ type: 'SET_LAST_VISITED', payload: props.location.pathname });
          return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
        }
        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;
