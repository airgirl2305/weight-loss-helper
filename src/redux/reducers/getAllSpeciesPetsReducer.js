import { GET_ALL_SPECIES_PETS } from "../types/getPetsTypes";

// eslint-disable-next-line default-param-last
const getAllSpeciesPetsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_SPECIES_PETS:
      return action.payload;
    default:
      return state;
  }
};

export default getAllSpeciesPetsReducer;
