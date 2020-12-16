import { useState, useEffect } from "react";
import api from "../../services/api";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import { Main } from "../List/style";
import { WorkTitle } from "../../pages/UserPage/style";

const Slides = ({url}) =>{

  const [works, setWorks] = useState([]);

  useEffect(() => {
    api.get(`/${url}`).then((res) => setWorks(res.data.works));
  }, []);


  return (
    <>
      <Carousel autoplay>
        {works.map((work, index) => {
          return (
            <Main key={index}>
              <WorkTitle>{work.title}</WorkTitle>
              <p>{work.description}</p>
              <a target="blank" href={work.deploy_url}>
                {work.deploy_url}
              </a>
            </Main>
          );
        })}
      </Carousel>
    </>
  );
};

export default Slides;
