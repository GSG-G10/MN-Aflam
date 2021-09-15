import React from "react";
import './css/NavBar.css';

const Nav = () => {
  return (
    <nav className="header-nav">
      <h1 className="logo">Aflamna </h1>
      <ul className="nav-list" id="nav-list">
        <li>
          <a href="/" className="home active">
            Home
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
