import { combineReducers } from "redux";
import address from "./address/address";
import phoneNumber from "./phoneNumber/phoneNumber";
import serviceType from "./services/serviceType";
import services from "./services/service";

export const rootReducer = combineReducers({
  address,
  phoneNumber,
  serviceType,
  services,
});