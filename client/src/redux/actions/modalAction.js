import { SET_MODAL } from "../types/modalTypes";

export const showModal = (state) => ({
  type: SET_MODAL,
  payload: state,
});
