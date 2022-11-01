import * as endPoints from "../../config/endPoints";
import { getOneAdvertAction } from "../actions/getOneAdvertAction";

export const getOneAdvertThunk = (id) => async (dispatch) => {
  try {
    const response = await fetch(endPoints.getOneAdvert(id), {
      credentials: "include",
    });
    const result = await response.json();
    dispatch(getOneAdvertAction(result));
  } catch (error) {
    console.log(error);
  }
};
