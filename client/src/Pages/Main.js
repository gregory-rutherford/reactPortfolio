import React from "react";
import { Box, Columns } from "react-bulma-components/full";
import "./main.css";

const Main = function Main() {
  return (
    <main className="top">
      <Box>
        <Columns>
          <Columns.Column>
            <img
              className="profileImg"
              src="https://avatars1.githubusercontent.com/u/46570985?s=460&v=4"
              alt="profile"
            />
            <p>with "Hachiko" at Shibuya Station in Tokyo</p>
          </Columns.Column>
          <Columns.Column>
            <h3 className="intro">
              Hi, my name is Gregory Rutherford. I am a front end web developer.
            </h3>
            <h5 className="contactHead">
              <a className="contactLinks" href="mailto:gregorford@gmail.com">
                email
              </a>
            </h5>
            <h5 className="contactHead">
              <a
                className="contactLinks"
                href="https://github.com/gregory-rutherford"
              >
                github
              </a>
            </h5>
            <h5 className="contactHead">
              <a
                className="contactLinks"
                href="https://www.linkedin.com/in/gregory-rutherford-01aba73b/"
              >
                linkedin
              </a>
            </h5>
            <h5 className="contactHead">
              <a
                className="contactLinks"
                href="https://drive.google.com/file/d/19bJeEmeZQrjdfbJyLwCMnNOdKPDcU_1-/view"
              >
                resume
              </a>
            </h5>
          </Columns.Column>
        </Columns>
      </Box>
    </main>
  );
};

export default Main;
