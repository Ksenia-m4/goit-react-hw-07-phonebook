import { combineReducers } from "redux";
import { contactsReducer } from "./contacts/contactSlice";
import { filterReducer } from "./filter/filterSlice";

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
