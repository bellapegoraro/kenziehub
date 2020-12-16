import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Image, Main, Techs, Infos, Email } from "../../components/List/style";
import { Container, HeaderMobile, Title } from "./style";
import DefaultImg from "../../components/List/images/footer-logo.png";
import Menu from "../../components/Menu";
const Favorites = () => {
  const history = useHistory();
  const favorites = JSON.parse(localStorage.getItem("favorites"));
  const [users, setUsers] = useState(favorites);
  console.log(favorites);

  const removeFavorite = (id) => {
    const removed = favorites.filter((user) => user.id !== id);
    localStorage.setItem("favorites", JSON.stringify(removed));
    setUsers(removed);
  };

  const handleProfile = (id) => {
    history.push(`/users/${id}`);
  };

  return (
    <>
    <Menu />
    <Container>
      <HeaderMobile>
        <Title>Favoritos</Title>
      </HeaderMobile>
      {users.map(({ name, email, techs, avatar_url, id }, index) => (
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
          {/* <button onClick={() => removeFavorite(id)}>remover</button>; */}
        </Main>
      ))}
    </Container>
    </>
  );
};

export default Favorites;
