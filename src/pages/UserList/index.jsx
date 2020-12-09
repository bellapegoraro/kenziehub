import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersThunk } from "../../store/modules/users/thunk";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUsersThunk());
  }, []);
  return <div>{users.map(({ name }) => name)}</div>;
};

export default UserList;
