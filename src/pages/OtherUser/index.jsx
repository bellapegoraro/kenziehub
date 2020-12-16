import {
  Col1,
  Col2,
  Col3,
  Col4,
  Container,
  Name,
  Avatar,
  Bio,
  Tecnologias,
  Titles,
  Bar,
  Tecnologia,
  Label,
  Header,
  HeaderTitle,
  HeaderBar,
  WorkHeader,
} from "../UserProfile/style";
import userAvatar from "../UserProfile/images/user-avatar.png";
import Menu from "../../components/Menu/";
import Slides from "../../components/Carousel";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";

const OtherUser = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    api.get(`users/${id}`).then((res) => setUser(res.data));
  }, []);

  const makeFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.find((el) => el.id === user.id)) {
      return;
    }
    favorites = [...favorites, user];
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };
  return (
    <>
      <Menu />
      <Header>
        <HeaderTitle>KenzieHub</HeaderTitle>
        <HeaderBar />
      </Header>
      <Container>
        <Col1>
          <Name>{user.name}</Name>
          {user.avatar_url ? (
            <Avatar src={user.avatar_url} alt={user.name} />
          ) : (
            <Avatar src={userAvatar} alt={user.name} />
          )}
          {token && <button onClick={makeFavorite}>{`<3`}</button>}
          <Bio>{user.bio}</Bio>
          <Col4>
            <Titles>Dados pessoais</Titles>
            <Label>Contato</Label>
            <p>{user.contact}</p>
            <Label>E-mail</Label>
            <p>{user.email}</p>
            <Label>Módulo</Label>
            <p>{user.course_module}</p>
          </Col4>
          <Tecnologias>
            <Titles>Tecnologias</Titles>
            {user.techs &&
              user.techs.map((tech) => {
                return (
                  <Tecnologia>
                    <h5>{tech.title}</h5>
                    {tech.status === "Avançado" ? (
                      <Bar style={{ width: "240px" }}></Bar>
                    ) : tech.status === "Intermediário" ? (
                      <Bar style={{ width: "180px" }}></Bar>
                    ) : (
                      <Bar style={{ width: "100px" }}></Bar>
                    )}
                  </Tecnologia>
                );
              })}
          </Tecnologias>
        </Col1>
        <Col2>
          <WorkHeader>
            <Titles>Trabalhos</Titles>
          </WorkHeader>
          <Slides url={`users/${id}`} />
        </Col2>
        <Col3>
          <Titles>Dados pessoais</Titles>
          <Label>Contato</Label>
          <p>{user.contact}</p>
          <Label>E-mail</Label>
          <p>{user.email}</p>
          <Label>Módulo</Label>
          <p>{user.course_module}</p>
        </Col3>
      </Container>
    </>
  );
};

export default OtherUser;
