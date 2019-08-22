import React, {useState, useEffect} from "react";
import {Card, Media, Heading, Tag} from "react-bulma-components";
import projectData from "../Data.js";

const Projects = function Projects () {
    const [data, setData] = useState([]);
    
    useEffect (() => {
        setData(projectData);
    }, []);

    

    return (
      <main>
        {data.map(item => (
          <Card>
            {/* <Card.Image
              size="4by3"
              src="https://avatars1.githubusercontent.com/u/46570985?s=460&v=4"
            /> */}
            <img src={item.imgLink} alt="project" style={{height:300, width: 600}}/>
            <Media.Item renderAs="figure" position="left">
              <Heading size={2}>{item.title}</Heading>
              <Tag.Group gapless >
                  <Tag color="dark"><a href={item.ghLink}>Code</a></Tag>
                  <Tag color="primary"><a href={item.deployedLink}>Demo</a></Tag>
              </Tag.Group>
            </Media.Item>
          </Card>
        ))}
      </main>
    );
};

export default Projects;