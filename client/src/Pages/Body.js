import React, { useState, useEffect } from "react";
import { Card, Media, Heading } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
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
            <a
              className="imgLink"
              href={item.deployedLink}
              target="_blank"
              without
              rel="noopener noreferrer"
              title="deployed page"
            >
              <img className="projectPic" src={item.imgLink} alt="project" />
            </a>
            <Media.Item renderAs="figure">
              <div className="text">
                <a
                  href={item.ghLink}
                  target="_blank"
                  without
                  rel="noopener noreferrer"
                  title="repository link"
                >
                  <Heading size={3}>
                    <FontAwesomeIcon icon={faCode} />
                    {item.title}
                  </Heading>
                </a>
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
