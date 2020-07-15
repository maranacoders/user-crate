import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Navbar.scss";
class Navbar extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      </nav>
    );
  }
}

export default Navbar;
