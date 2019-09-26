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
              src="https://avatars1.githubusercontent.com/u/46570985?s=460&v=4"
              alt="profile"
            />
            <p>Me with an umbrella standing next to "Hachiko" at Shibuya Station in Tokyo</p>
          </Columns.Column>
          <Columns.Column>
            <p className="intro">
              Hi, my name is Gregory Rutherford. I am a front end web developer.
            </p>
            
          </Columns.Column>
        </Columns>
      </Box>
    </header>
  );
};

export default Header;
