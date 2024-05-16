import React from "react";
import "./Footer.css";

const date = new Date();
let year = date.getFullYear();

function Footer() {
  return (
    <section id="footer">
      <div className="footer-container">
        <footer>
          <div className="footer-links-container">
            <ul className="footer-links-list">
              <li>Link1</li>
              <li>Link2</li>
            </ul>
          </div>
          <div className="footer-copyright-container">
            <p>
              {"\u00A9" + " "}
              {year} Aaron J. Sams
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Footer;
