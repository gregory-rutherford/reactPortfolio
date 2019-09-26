import React from "react";
import "./nav.css";

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
        >
          github
        </a>
      </p>
      <p className="contactHead">
        <a
          className="contactLinks"
          href="https://www.linkedin.com/in/gregory-rutherford-01aba73b/"
        >
          linkedin
        </a>
      </p>
      <p className="contactHead">
        <a
          className="contactLinks"
          href="https://drive.google.com/file/d/19bJeEmeZQrjdfbJyLwCMnNOdKPDcU_1-/view"
        >
          resume
        </a>
      </p>
    </nav>
  );
};

export default Nav;
