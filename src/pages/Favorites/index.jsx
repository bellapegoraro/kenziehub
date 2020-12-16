import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Image, Main, Techs, Infos, Email } from "../../components/List/style";
import {
  Container,
  HeaderMobile,
  HeaderDesktop,
  Bar,
  Title,
  List,
} from "./style";
import DefaultImg from "../../components/List/images/footer-logo.png";
import Menu from "../../components/Menu";
const Favorites = () => {
  const history = useHistory();
  const favorites = JSON.parse(localStorage.getItem("favorites"));

  const handleProfile = (id) => {
    history.push(`/users/${id}`);
  };

  return (
    <>
      <Menu />
      <Container>
        <HeaderDesktop>
          <Title>Favoritos</Title>
          <Bar />
        </HeaderDesktop>
        <HeaderMobile>
          <Title>Favoritos</Title>
        </HeaderMobile>
        <List>
          {favorites &&
            favorites?.map(({ name, email, techs, avatar_url, id }, index) => (
              <Main key={index} onClick={() => handleProfile(id)}>
                {avatar_url !== null ? (
                  <Image src={avatar_url} alt={name} />
                ) : (
                  <Image src={DefaultImg} alt={name} />
                )}
                <Infos>
                  <h3>{name}</h3>
                  <Email>{email}</Email>
                </Infos>
                <Techs>
                  {techs?.map((techs, index) =>
                    index < 3 ? <span key={index}>#{techs.title} </span> : null
                  )}
                </Techs>
              </Main>
            ))}
        </List>
      </Container>
    </>
  );
};

export default Favorites;
