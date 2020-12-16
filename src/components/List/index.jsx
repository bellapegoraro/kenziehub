<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import { useEffect } from "react";
>>>>>>> 108d9caf29d9a24637af0ce88bba54eaeaae02be
import { useDispatch, useSelector } from "react-redux";
import { getUsersThunk } from "../../store/modules/users/thunk";
import DefaultImg from "./images/footer-logo.png";
import { Container, Image, Main, Techs, Infos, Email } from "./style";
import { useHistory } from "react-router-dom";
<<<<<<< HEAD
import api from "../../services/api";
=======
>>>>>>> 108d9caf29d9a24637af0ce88bba54eaeaae02be

const List = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.listOfUsers);
  const filtered = useSelector((state) => state.search);
<<<<<<< HEAD
  const history = useHistory();
=======
>>>>>>> 108d9caf29d9a24637af0ce88bba54eaeaae02be

  useEffect(() => {
    dispatch(getUsersThunk());
  }, []);

<<<<<<< HEAD
  const handleProfile = (id, name) => {
    localStorage.setItem("Id", id);
    history.push(`/user`);
=======
  const handleProfile = (id) => {
    history.push(`/users/${id}`);
>>>>>>> 108d9caf29d9a24637af0ce88bba54eaeaae02be
  };

  return (
    <Container>
      {filtered.length !== 0
        ? filtered.map(({ name, email, techs, avatar_url, id }, index) => (
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
          ))
        : users?.map(({ name, email, techs, avatar_url, id }, index) => (
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
    </Container>
  );
};

export default List;
