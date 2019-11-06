import React from "react";
import "./nav.css";
import PDF from "../Documents/RutherfordResume.pdf"

const Nav = function Nav() {
  return (
    <nav>
      <p className="contactHead">
        <a className="contactLinks" href="mailto:gregorford@gmail.com">
          email
        </a>
      </p>
      <p className="contactHead">
        <a
          className="contactLinks"
          href="https://github.com/gregory-rutherford"
          target="_blank"
          without
          rel="noopener noreferrer"
        >
          github
        </a>
      </p>
      <p className="contactHead">
        <a
          className="contactLinks"
          href="https://www.linkedin.com/in/gregory-rutherford-01aba73b/"
          target="_blank"
          without
          rel="noopener noreferrer"
        >
          linkedin
        </a>
      </p>
      <p className="contactHead">
        <a
          className="contactLinks"
          href={PDF}
          target="_blank"
          without
          rel="noopener noreferrer"
        >
          resume
        </a>
      </p>
    </nav>
  );
};

export default Nav;
