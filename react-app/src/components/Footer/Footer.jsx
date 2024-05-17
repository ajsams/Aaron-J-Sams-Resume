import React from "react";
import "./Footer.scss";

const date = new Date();
let year = date.getFullYear();

function Footer() {
  return (
    <section id="footer">
      <div className="footer-container">
        <footer>
          <div className="footer-links-container">
            <ul className="footer-links-list">
              <li>
                <a href="https://www.linkedin.com/in/aaronjsams/">LinkedIn</a>
              </li>
              <li>
                <a href="https://scholar.google.com/citations?hl=en&user=NiJxafUAAAAJ&view_op=list_works&authuser=2&sortby=pubdate">
                  Google-Scholar
                </a>
              </li>
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
