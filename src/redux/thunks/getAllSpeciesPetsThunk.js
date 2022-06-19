import * as endPoints from "../../config/endPoints";
import { getAllSpeciesPetsAction } from "../actions/getAllSpeciesPetsAction";

export const getAllSpeciesPetsThunk = (pets, city) => async (dispatch) => {
  try {
    const response = await fetch(endPoints.getAllSpeciesPets(pets, city), {
      credentials: "include",
    });
    const result = await response.json();
    dispatch(getAllSpeciesPetsAction(result));
  } catch (error) {
    console.log(error);
  }
};
