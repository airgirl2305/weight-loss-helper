import { ADD_ADVERTISEMENT } from "../types/addAdvertTypes";
import * as endPoints from "../../config/endPoints";

export const addAdvertAction = (formData) => async (dispatch) => {
  const response = await fetch(endPoints.addAdvert(), {
    method: "POST",
    body: formData,
    credentials: "include",
  });
  if (response.status === 200) {
    const newResponse = await response.json();
    dispatch({ type: ADD_ADVERTISEMENT, payload: newResponse });
  }
};
