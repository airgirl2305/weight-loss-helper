import * as endPoints from "../../config/endPoints";
import { getAllMessagesAction } from "../actions/getAllMessagesAction";

export const getAllMessagesThunk = (id) => async (dispatch) => {
  try {
    const response = await fetch(endPoints.chatReceiver(id), {
      credentials: "include",
    });
    const result = await response.json();
    console.log(result);
    dispatch(getAllMessagesAction(result));
  } catch (error) {
    console.log(error);
  }
};
