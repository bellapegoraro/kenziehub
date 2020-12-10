import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersThunk } from "../../store/modules/users/thunk";
import DefaultImg from "./images/footer-logo.png";
import { Container, Image, Main, Techs, Infos, Name, Email } from "./style";

const List = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUsersThunk());
  }, []);
  return (
    <Container>
      {users?.map(({ name, email, techs, avatar_url }, index) => (
        <Main key={index}>
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
              index < 3 ? <p key={index}>#{techs.title}</p> : null
            )}
          </Techs>
        </Main>
      ))}
    </Container>
  );
};

export default List;
