import * as endPoints from "../../config/endPoints";
import { getAllFavouritesAction } from "../actions/getAllFavouritesAction";

export const getAllFavouritesThunk = () => async (dispatch) => {
  try {
    const response = await fetch(endPoints.getAllFavourites(), {
      credentials: "include",
    });
    const result = await response.json();
    dispatch(getAllFavouritesAction(result));
  } catch (error) {
    console.log(error);
  }
};
