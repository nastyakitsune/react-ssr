import { combineReducers } from "redux";
import { reducer as data } from "./data";
import { reducer as form } from "./form";

export const reducers = combineReducers({
  data,
  form,
});
