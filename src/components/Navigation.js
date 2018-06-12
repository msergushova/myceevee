import React from "react";

const Navigation = () => (
  <nav id="nav-wrap">
    <a className="mobile-btn" href="#nav-wrap" />
    <ul id="nav" className="nav">
      <li className="current">
        <a className="smoothscroll" href="#home">
          Home
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#about">
          About
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#resume">
          History
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#portfolio">
          Gallery
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
