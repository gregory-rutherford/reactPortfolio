import React from "react";
import { Box, Columns } from "react-bulma-components/full";
import "./header.css";
import photo from "../Documents/Images/spain2019crop.jpg";

const Header = function Header() {
  return (
    <header className="top">
      <Box>
        <Columns>
          <Columns.Column>
            <img className="profileImg" src={photo} alt="profile" />
            <p id="small">
              Me in front of a patterned wall in Barcelona, Spain 2019
            </p>
          </Columns.Column>
          <Columns.Column>
            <p className="intro">
              Hi, my name is <span id="emphasis">Gregory Rutherford</span>.
            </p>
            <div id="summary">
              <p>
                I am a <span className="orange">Full Stack Web Developer</span>,{" "}
                <a
                  href="https://www.discogs.com/artist/1712889-Gregory-Rutherford?filter_anv=0&subtype=Instruments-Performance&type=Credits"
                  target="_blank"
                  id="discogs"
                  title="discogs"
                  rel="noopener noreferrer"
                >
                  Drummer
                </a>
                , and all around motivated learner. I am a recent graduate of
                the UT Austin Web Development Bootcamp. My background is
                primarily in logistics, but I am excited to demonstrate my new
                skills and grow as a developer in a professional setting. I
                would like to collaborate with a team of developers to work on
                cutting edge, accessible, and responsive web applications. My
                toolbox contains{" "}
                <span className="orange">
                  HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and
                  SQL.
                </span>{" "}
                Currently I'm quite fond of the React framework, and most of my
                recent work has been built using React Hooks.
              </p>
            </div>
          </Columns.Column>
        </Columns>
      </Box>
    </header>
  );
};

export default Header;
