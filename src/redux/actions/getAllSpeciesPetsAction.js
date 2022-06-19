import { GET_ALL_SPECIES_PETS } from "../types/getPetsTypes";

export const getAllSpeciesPetsAction = (payload) => ({
  type: GET_ALL_SPECIES_PETS,
  payload: payload,
});
