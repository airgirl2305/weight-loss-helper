import { GET_ALL_FAVOURITES } from "../types/getFavouritesTypes";

// eslint-disable-next-line default-param-last
const getAllFavouritesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_FAVOURITES:
      return action.payload;
    default:
      return state;
  }
};

export default getAllFavouritesReducer;
