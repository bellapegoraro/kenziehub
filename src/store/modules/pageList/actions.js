import { types } from "./actionsTypes";

export const getNextPage = (nextPage) => ({
  type: types.getPage,
  nextPage,
});
