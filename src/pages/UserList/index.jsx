import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersThunk } from "../../store/modules/users/thunk";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUsersThunk());
  }, []);
  return (
    <div>
      {users?.map(({ name, email, techs }, index) => (
        <div key={index}>
          <p className="name">{name}</p>
          <p className="email">{email}</p>
          <div className="techs">
            {techs?.map((techs, index) =>
              index < 3 ? <p key={index}>#{techs.title}</p> : null
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
