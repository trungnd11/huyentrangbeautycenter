import { combineReducers } from "redux";
import address from "./address/address";
import phoneNumber from "./phoneNumber/phoneNumber";

export const rootReducer = combineReducers({
  address,
  phoneNumber,
});