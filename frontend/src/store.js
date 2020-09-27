import { configureStore } from "@reduxjs/toolkit";
import phonewordsReducer from "./features/phonewords/phonewordsSlice";

const store = configureStore({
  reducer: {
    phonewords: phonewordsReducer,
  },
});

export default store;
