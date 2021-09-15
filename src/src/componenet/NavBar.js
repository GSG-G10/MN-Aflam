import React from "react";
import './css/NavBar.css';

const Nav = () => {
  return (
    <nav class="header-nav">
      <h1 class="logo">Egy Film </h1>
      <ul class="nav-list" id="nav-list">
        <li>
          <a href="/" class="home active">
            Home
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
