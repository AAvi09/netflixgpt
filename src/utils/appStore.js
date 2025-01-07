import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import languageReducer from "./configSlice";
const appStore = configureStore({
  reducer: {
    //Add reduce here
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    searchLang: languageReducer,
  },
});

export default appStore;
