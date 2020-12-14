import { searchUser } from "./actions";
import api from "../../../services/api";

export const searchUserThunk = (input) => (dispatch, getState) => {
  let users = [];
  api
    .get("/users", { params: { perPage: 500, page: 1 } })
    .then((res) => {
      users = [...users, ...res.data];

      const userFiltered = users.filter((user) =>
        user.name.toLowerCase().includes(input.toLowerCase())
      );

      dispatch(searchUser(userFiltered));
    })
    .catch((err) => console.log(err));
};
