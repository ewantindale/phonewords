import { configureStore } from "@reduxjs/toolkit";
import phonewordsReducer from "./phonewordsSlice";

const store = configureStore({
  reducer: {
    phonewords: phonewordsReducer,
  },
});

export default store;
