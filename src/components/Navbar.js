import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="logo">stackoverflow</span>
      </div>
      <div className="navbar-right">
        <ul>
          <li>Home</li>
          <li>Questions</li>
          <li>Tags</li>
          <li>Users</li>
          <li>Companies</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
