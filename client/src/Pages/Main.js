import React from "react";
import { Box, Image, Columns } from "react-bulma-components/full";

const Main = function Main() {
  return (
    <main>
      <Box>
        <Columns>
          <Columns.Column>
            <img src="https://avatars1.githubusercontent.com/u/46570985?s=460&v=4" alt="profile" />
          </Columns.Column>
          <Columns.Column>
            <h3>
              Hi, my name is Gregory Rutherford. I am a front end web developer.
            </h3>
            <h4>
              contact:{" "}
              <a href="mailto:gregorford@gmail.com">gregorford@gmail.com</a>
            </h4>
          </Columns.Column>
        </Columns>
      </Box>
    </main>
  );
};

export default Main;
