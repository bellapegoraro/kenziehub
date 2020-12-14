import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersThunk } from "../../store/modules/users/thunk";
import DefaultImg from "./images/footer-logo.png";
import { Container, Image, Main, Techs, Infos, Email } from "./style";
import {useHistory} from 'react-router-dom';
import {userProfileThunk} from '../../store/modules/userProfile/thunk';

const List = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const filtered = useSelector((state) => state.search);
  const userId = useSelector((state) => state.id)
  const history = useHistory();

  useEffect(() => {
    dispatch(getUsersThunk());
    dispatch(userProfileThunk());
  }, []);


  
   
  return (
    <Container>
      {filtered.length !== 0
        ? filtered.map(({ name, email, techs, avatar_url }, index) => (
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
                  index < 3 ? <span key={index}>#{techs.title} </span> : null
                )}
              </Techs>
            </Main>
          ))
        : users?.map(({ name, email, techs, avatar_url, id }, index) => (
            <Main key={index} >
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
