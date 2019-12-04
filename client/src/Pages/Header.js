import React from "react";
import { Box, Columns } from "react-bulma-components/full";
import "./header.css";

const Header = function Header() {
  return (
    <header className="top">
      <Box>
        <Columns>
          <Columns.Column>
            <img
              className="profileImg"
              src="https://i.imgur.com/hvJmgpK.jpg"
              alt="profile"
            />
            <p>
              Me in front of a patterned wall in Barcelona, Spain 2019
            </p>
          </Columns.Column>
          <Columns.Column>
            <p className="intro">
              Hi, my name is <span id="emphasis">Gregory Rutherford</span>. I am
              a full stack web developer.
            </p>
            <div id="summary">
              <p>
                I am a web developer, drummer, and all around motivated learner. I just finished a 6 month web developement bootcamp at the 
                UT Austin Center for Professional Developemnt. My
                 background is primarily in logistics, but I am
                excited to demonstrate my new skills and grow as a developer in a professional setting. I
                would like to collaborate with a team of developers to work on
                cutting edge, accessible, and responsive web applications.
                Currently I'm quite fond of the React framework, and most of my recent work has
                been built using React Hooks.
              </p>
            </div>
          </Columns.Column>
        </Columns>
      </Box>
    </header>
  );
};

export default Header;
