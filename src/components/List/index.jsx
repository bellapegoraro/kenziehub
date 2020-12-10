import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersThunk } from "../../store/modules/users/thunk";
import DefaultImg from "./images/1600361500540.jpeg";
import { Container } from "./style";

const List = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUsersThunk());
  }, []);
  return (
    <Container>
      {users?.map(({ name, email, techs, avatar_url }, index) => (
        <div key={index}>
          {avatar_url !== null ? (
            <img src={avatar_url} alt={name} />
          ) : (
            <img src={DefaultImg} alt={name} />
          )}

          <p className="name">{name}</p>
          <p className="email">{email}</p>
          <div className="techs">
            {techs?.map((techs, index) =>
              index < 3 ? <p key={index}>#{techs.title}</p> : null
            )}
          </div>
        </div>
      ))}
    </Container>
  );
};

export default List;
