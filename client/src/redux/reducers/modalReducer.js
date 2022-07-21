import { SET_MODAL } from "../types/modalTypes";

const modalReducer = (state = false, action) => {
  switch (action.type) {
    case SET_MODAL:
      return action.payload;

    default:
      return state;
  }
};

export default modalReducer;
