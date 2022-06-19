import { GET_ALL_TIPS } from "../types/tipsTypes";

export const getAllTipsAction = (payload) => ({
  type: GET_ALL_TIPS,
  payload: payload,
});
