import {
  Col1,
  Col2,
  Col3,
  Col4,
  Container,
  Name,
  Avatar,
  Bio,
  StyledLink,
  Button,
  Tecnologias,
  Titles,
  Bar,
  Tecnologia,
  Label,
  Header,
  HeaderTitle,
  HeaderBar,
  WorkHeader,
} from "./style";
import AddWork from "../../components/addWork";
import AddTech from "../../components/addTech";
import userAvatar from "./images/user-avatar.png";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { useState, useEffect, useRef } from "react";
import Menu from "../../components/Menu/";
import Slides from "../../components/Carousel";

const UserProfile = () => {
  const history = useHistory();
  const [user, setUser] = useState({});
  const [visibleWork, setVisibleWork] = useState(false);
  const [visibleTech, setVisibleTech] = useState(false);
  const isMountedRef = useRef(true);
  useEffect(() => {
    api
      .get("/profile")
      .then((res) => setUser(res.data))
      .catch(() => window.location.reload());

    return () => {
      return (isMountedRef.current = false);
    };
  }, []);

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
          <StyledLink to="#" onClick={() => history.push("/edit")}>
            Editar Perfil
          </StyledLink>
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
            {visibleTech && <AddTech setVisibleTech={setVisibleTech} />}
            {user.techs &&
              user.techs.map((tech, index) => {
                return (
                  <Tecnologia key={index}>
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
          <Button onClick={() => setVisibleTech(true)}>
            Adicionar Tecnologia
          </Button>
        </Col1>
        <Col2>
          <WorkHeader>
            <Titles>Trabalhos</Titles>
          </WorkHeader>
          {visibleWork && <AddWork setVisibleWork={setVisibleWork} />}
          <Slides url={`profile`} />
          <Button onClick={() => setVisibleWork(true)}>
            Adicionar Trabalho
          </Button>
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

export default UserProfile;
