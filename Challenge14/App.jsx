// App.jsx
import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFirebase, isLoaded, isEmpty } from 'react-redux-firebase';
import { loginWithEmailAndPassword, loginWithGoogle, logout } from './actions';

const App = () => {
  const auth = useSelector(state => state.firebase.auth);
  const dispatch = useDispatch();
  const firebase = useFirebase();

  const handleEmailLogin = () => {
    const email = 'example@example.com'; // Get email from input field
    const password = 'password'; // Get password from input field
    dispatch(loginWithEmailAndPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(loginWithGoogle());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const isAuthenticated = useMemo(() => {
    return isLoaded(auth) && !isEmpty(auth);
  }, [auth]);

  return (
    <div>
      <h1>Authentication App</h1>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {auth.displayName || 'User'}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <button onClick={handleEmailLogin}>Login with Email/Password</button>
          <button onClick={handleGoogleLogin}>Login with Google</button>
        </div>
      )}
    </div>
  );
};

export default App;
