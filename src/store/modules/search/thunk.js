import { searchUser } from "./actions";

export const searchUserThunk = (input) => (dispatch, getState) => {
  const { users } = getState();
  const userFiltered = users.filter((user) => user.name === input);
  dispatch(searchUser(userFiltered));
};
