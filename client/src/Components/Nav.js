import React from "react";
import "./nav.css";
import PDF from "../Documents/RutherfordResume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Nav = function Nav() {
  return (
    <nav>
      <p className="contactHead">
        <a
          className="contactLinks"
          href="mailto:gregorford@gmail.com"
          title="email"
        >
          <FontAwesomeIcon icon={faPaperPlane} /> email
        </a>
      </p>
      <p className="contactHead">
        <a
          className="contactLinks"
          href="https://github.com/gregory-rutherford"
          target="_blank"
          without
          rel="noopener noreferrer"
          title="github"
        >
          <FontAwesomeIcon icon={faGithub} /> github
        </a>
      </p>
      <p className="contactHead">
        <a
          className="contactLinks"
          href="https://www.linkedin.com/in/gregory-rutherford-01aba73b/"
          target="_blank"
          without
          rel="noopener noreferrer"
          title="linkedin"
        >
          <FontAwesomeIcon icon={faLinkedinIn} /> linkedin
        </a>
      </p>
      <p className="contactHead">
        <a
          className="contactLinks"
          href={PDF}
          target="_blank"
          without
          rel="noopener noreferrer"
          title="resume"
        >
          <FontAwesomeIcon icon={faFile} /> resume
        </a>
      </p>
    </nav>
  );
};

export default Nav;
