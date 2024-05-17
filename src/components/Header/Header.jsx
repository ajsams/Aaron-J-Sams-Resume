import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const headerHeight = "4rem";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section id="header">
      <header style={{ height: headerHeight }}>
        <div className="container">
          <div className="logo">
            {/* <a href="https://aaronjsams.net" className="logo-link"> */}
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="logo-svg"
              >
                <path d="m7.788 2.34-.799 1.278A.25.25 0 0 0 7.201 4h1.598a.25.25 0 0 0 .212-.382l-.799-1.279a.25.25 0 0 0-.424 0Zm0 11.32-.799-1.277A.25.25 0 0 1 7.201 12h1.598a.25.25 0 0 1 .212.383l-.799 1.278a.25.25 0 0 1-.424 0ZM3.617 9.01 2.34 8.213a.25.25 0 0 1 0-.424l1.278-.799A.25.25 0 0 1 4 7.201V8.8a.25.25 0 0 1-.383.212Zm10.043-.798-1.277.799A.25.25 0 0 1 12 8.799V7.2a.25.25 0 0 1 .383-.212l1.278.799a.25.25 0 0 1 0 .424Z" />
                <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v3a.5.5 0 0 1-.5.5h-3A1.5 1.5 0 0 0 0 6.5v3A1.5 1.5 0 0 0 1.5 11h3a.5.5 0 0 1 .5.5v3A1.5 1.5 0 0 0 6.5 16h3a1.5 1.5 0 0 0 1.5-1.5v-3a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 0 16 9.5v-3A1.5 1.5 0 0 0 14.5 5h-3a.5.5 0 0 1-.5-.5v-3A1.5 1.5 0 0 0 9.5 0zM6 1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3A1.5 1.5 0 0 0 11.5 6h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a1.5 1.5 0 0 0-1.5 1.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3A1.5 1.5 0 0 0 4.5 10h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 0 6 4.5z" />
              </svg>
              <span className="logo-text">Aaron J. Sams</span>
            </Link>
            {/* </a> */}
          </div>

          <div
            ref={dropdownRef}
            className={`nav-links ${isActive ? "active" : ""}`}
          >
            <div className="nav-links-toggle" onClick={toggleMenu}>
              &#9776;
            </div>
            <ul className="nav-links-list">
              <Link to="/">
                <li className="nav-item">Home</li>
              </Link>
              <Link to="/resume">
                <li className="nav-item">Resume</li>
              </Link>
            </ul>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Header;
export { headerHeight };
