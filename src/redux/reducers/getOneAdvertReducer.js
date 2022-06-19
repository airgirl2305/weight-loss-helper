import { GET_ONE_ADVERT } from "../types/getOneAdvert";

// eslint-disable-next-line default-param-last
const getOneAdvertReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ONE_ADVERT:
      return action.payload;
    default:
      return state;
  }
};

export default getOneAdvertReducer;
