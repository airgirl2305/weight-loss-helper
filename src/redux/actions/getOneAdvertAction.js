import { GET_ONE_ADVERT } from "../types/getOneAdvert";

export const getOneAdvertAction = (payload) => ({
  type: GET_ONE_ADVERT,
  payload: payload,
});
