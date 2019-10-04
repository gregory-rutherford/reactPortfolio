import React, { useState, useEffect } from "react";
import { Card, Media, Heading } from "react-bulma-components";
import projectData from "../Data.js";
import "./body.css";

const Body = function Body() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(projectData);
  }, []);

  return (
    <div className="projBox">
      <p className="recent">Recent Work</p>
      <div className="grid">
        {data.map(item => (
          <Card className="card">
            <img
              className="projectPic"
              src={item.imgLink}
              alt="project"
              onClick={() => window.location.href=`${item.deployedLink}`}
            />
            <Media.Item renderAs="figure">
              <div className="text">
                <Heading size={3}>{item.title}</Heading>
                <Heading subtitle size={5}>
                  {item.description}
                </Heading>
              </div>
            </Media.Item>
          </Card>
        ))}
      </div>
      <a href="#top" className="anchor">
        Top
      </a>
    </div>
  );
};

export default Body;
