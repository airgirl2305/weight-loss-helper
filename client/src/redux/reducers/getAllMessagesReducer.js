import { GET_ALL_MESSAGES } from "../types/getAllMessages";

// eslint-disable-next-line default-param-last
const getAllMessagesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_MESSAGES:
      return action.payload;

    default:
      return state;
  }
};

export default getAllMessagesReducer;
