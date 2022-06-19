import { GET_ALL_FAVOURITES } from "../types/getFavouritesTypes";

export const getAllFavouritesAction = (payload) => ({
  type: GET_ALL_FAVOURITES,
  payload: payload,
});
