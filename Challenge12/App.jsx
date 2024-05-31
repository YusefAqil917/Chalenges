import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './authContext';
import NavComponent from './NavComponent';
import GifGrid from './GifGrid'; // Assuming GifGrid is another component
import './App.css';

// Placeholder components for routing
const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;
const Contact = () => <div>Contact Page</div>;
const Login = () => <div>Login Page</div>;

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <NavComponent />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/gifs" component={() => <GifGrid category="cats" />} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
