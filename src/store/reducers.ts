import { combineReducers } from "redux";
import address from "./address/address";
import phoneNumber from "./phoneNumber/phoneNumber";
import serviceType from "./services/serviceType";
import services from "./services/service";
import register from "./user/register";
import login from "./user/login";

export const rootReducer = combineReducers({
  address,
  phoneNumber,
  serviceType,
  services,
  register,
  login,
});