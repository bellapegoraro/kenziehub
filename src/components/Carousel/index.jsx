import { useState, useEffect } from "react";
import api from "../../services/api";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import { Main } from "../List/style";
import { WorkTitle } from "../../pages/UserProfile/style";

const Slides = ({ url }) => {
<<<<<<< HEAD
  const onChange = (a, b, c) => {
    console.log(a, b, c);
  };

  const [works, setWorks] = useState([]);

  useEffect(() => {
    api.get(`/${url}`).then((res) => setWorks(res.data.works));
  }, []);

  useEffect(() => {
    api.get(`/${url}`).then((res) => setWorks(res.data.works));
  }, []);

  useEffect(() => {
    api.get("/profile").then((res) => setWorks(res.data.works));
  }, [works]);

=======
  const [works, setWorks] = useState([]);

  useEffect(() => {
    api.get(`/${url}`).then((res) => setWorks(res.data.works));
  }, []);

>>>>>>> 108d9caf29d9a24637af0ce88bba54eaeaae02be
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
