import { GET_ALL_MESSAGES } from "../types/getAllMessages";

export const getAllMessagesAction = (payload) => ({
  type: GET_ALL_MESSAGES,
  payload: payload,
});
