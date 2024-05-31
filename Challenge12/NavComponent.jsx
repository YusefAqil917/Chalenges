import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from './authContext';
import './NavComponent.css';

const NavComponent = () => {
  const { state, dispatch } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    history.push('/');
  };

  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink exact to="/" activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeClassName="active-link">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="active-link">
            Contact
          </NavLink>
        </li>
        {state.isAuthenticated && (
          <li className="nav-item">
            <NavLink to="/gifs" activeClassName="active-link">
              Gifs
            </NavLink>
          </li>
        )}
        {!state.isAuthenticated ? (
          <li className="nav-item">
            <NavLink to="/login" activeClassName="active-link">
              Login
            </NavLink>
          </li>
        ) : (
          <li className="nav-item">
            <span className="nav-user">{state.user.username}</span>
            <button className="nav-logout" onClick={handleLogout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavComponent;
