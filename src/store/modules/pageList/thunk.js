import api from "../../../services/api";
import { getNextPage } from "./actions";

export const getNextPageThunk = () => async (dispatch, getState) => {
  const { page } = getState();
  const response = await api.get(page).catch((err) => console.log(err));
  let nextPage = response.headers.nexturl;
  let broken = nextPage.split("/");
  nextPage = broken[broken.length - 1];
  dispatch(getNextPage(nextPage));
};
