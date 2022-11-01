import { GET_ALL_TIPS } from "../types/tipsTypes";

// eslint-disable-next-line default-param-last
const getAllTipsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_TIPS:
      return action.payload;
    default:
      return state;
  }
};

export default getAllTipsReducer;
