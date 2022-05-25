
import React, { useState } from "react";
import "./header.css"

import { Link } from "react-router-dom";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 180);
  });
  return (
    <>
      <header className="header">
        <div className="container flex">
          <div className="logo">
            <h2>THB</h2>
          </div>
          <div className="nav">
            <ul
              className={sidebar ? "nav-links-sidebar" : "nav-links"}
              onClick={() => setSidebar(false)}
            >
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#destination">Destination</a>
              </li>

              <li>
                <a href="#popular">Popular</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
            </ul>
          </div>
          <button
            className="navbar-items-icon"
            onClick={() => setSidebar(!sidebar)}
          >
            {sidebar ? <i class='bx bx-window-close' ></i> : <i class='bx bx-bar-chart'></i>}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;