import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Landing/About';
import Users from './Landing/Users';
import Home from './Landing/Home';
import Navbar from './Components/Navbar/Navbar';
import ProfilesMain from './Profiles/Main';
import FileNotFound from './Landing/Filenotfound';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
          <Route path="/" exact component={Home} />
          <Route path="/profile/:names" component={ProfilesMain} />
          <Route component={FileNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
