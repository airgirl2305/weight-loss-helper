import { ADD_ADVERTISEMENT } from "../types/addAdvertTypes";

// eslint-disable-next-line default-param-last
const addAdvertReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ADVERTISEMENT:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default addAdvertReducer;
