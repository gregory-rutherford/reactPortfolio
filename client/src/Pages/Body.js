import React, {useState, useEffect} from "react";
import {Card, Media, Heading, Tag} from "react-bulma-components";
import projectData from "../Data.js";
import "./project.css";

const Body = function Body () {
    const [data, setData] = useState([]);
    
    useEffect (() => {
        setData(projectData);
    }, []);

    

    return (
      <div className="projBox">
        <p className="title">Recent Work</p>
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
                    <a className="pill" href={item.ghLink}>Code</a>
                  </Tag>
                  <Tag color="info">
                    <a className="pill" href={item.deployedLink}>Demo</a>
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

export default Body;