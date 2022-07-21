import * as endPoints from "../../config/endPoints";
import { getAllPetsAction } from "../actions/getAllPetsAction";

export const getAllPetsThunk = () => async (dispatch) => {
  try {
    const response = await fetch(endPoints.getAllPets(), {
      credentials: "include",
    });
    const result = await response.json();
    dispatch(getAllPetsAction(result));
  } catch (error) {
    console.log(error);
  }
};
