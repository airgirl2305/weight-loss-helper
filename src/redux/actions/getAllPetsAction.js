import { GET_ALL_PETS } from "../types/getPetsTypes";

export const getAllPetsAction = (payload) => ({
  type: GET_ALL_PETS,
  payload: payload,
});
