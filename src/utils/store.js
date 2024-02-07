import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import GPTSlice from "./GPTSlice";
import configSlice from "./configSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    movie: movieSlice,
    gpt: GPTSlice,
    config:configSlice
  },
});

export default store;
