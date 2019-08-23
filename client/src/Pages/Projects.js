import React, {useState, useEffect} from "react";
import {Card, Media, Heading, Tag} from "react-bulma-components";
import projectData from "../Data.js";
import "./project.css";

const Projects = function Projects () {
    const [data, setData] = useState([]);
    
    useEffect (() => {
        setData(projectData);
    }, []);

    

    return (
      <div className="projBox">
        <h3 className="title">Recent Work</h3>
        {data.map(item => (
          <Card className="card">
            <img className="projectPic" src={item.imgLink} alt="project" />
            <Media.Item renderAs="figure">
              <div className="text">
                <Heading size={3}>{item.title}</Heading>
                <Heading subtitle size={5}>
                  {item.description}
                </Heading>
              </div>
              <div className="tag">
                <Tag.Group gapless>
                  <Tag color="dark">
                    <a href={item.ghLink}>Code</a>
                  </Tag>
                  <Tag color="info">
                    <a href={item.deployedLink}>Demo</a>
                  </Tag>
                </Tag.Group>
              </div>
            </Media.Item>
          </Card>
        ))}
        <a href="#top" className="anchor">Top</a>
      </div>
    );
};

export default Projects;