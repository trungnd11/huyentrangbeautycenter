import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";

export const configStore = () => {
  const store = configureStore({
    reducer: rootReducer,
  });
  return store;
}
