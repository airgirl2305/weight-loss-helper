import { combineReducers } from "redux";
import loaderReducer from "./loaderReducer";
import userReducer from "./userReducer";
import addAdvertReducer from "./addAdvertReducer";
import getAllSpeciesPetsReducer from "./getAllSpeciesPetsReducer";
import getAllPetsReducer from "./getAllPetsReducer";
import getOneAdvertReducer from "./getOneAdvertReducer";
import getAllTipsReducer from "./getAllTipsReducer";
import modalReducer from "./modalReducer";
import getAllFavouritesReducer from "./getAllFavouritesReducer";
import getAllMessagesReducer from "./getAllMessagesReducer";

const rootReducer = combineReducers({
  user: userReducer,
  loader: loaderReducer,
  addAdvert: addAdvertReducer,
  getAllSpeciesPets: getAllSpeciesPetsReducer,
  getAllPets: getAllPetsReducer,
  getOneAdvert: getOneAdvertReducer,
  getAllTips: getAllTipsReducer,
  getAllFavourites: getAllFavouritesReducer,
  modal: modalReducer,
  getAllMessages: getAllMessagesReducer,
});

export default rootReducer;
