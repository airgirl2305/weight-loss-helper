import * as endPoints from "../../config/endPoints";
import { getAllTipsAction } from "../actions/getAllTipsAction";

export const getAllTipsThunk = () => async (dispatch) => {
  try {
    const response = await fetch(endPoints.getAllTips(), {
      credentials: "include",
    });
    const result = await response.json();
    dispatch(getAllTipsAction(result));
  } catch (error) {
    console.log(error);
  }
};
