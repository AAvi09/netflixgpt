import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./createSlice";

const appStore = configureStore({
  reducer: {
    //Add reduce here
    user: userReducer,
  },
});

export default appStore;
