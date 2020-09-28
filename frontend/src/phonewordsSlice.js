import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const phonewordsSlice = createSlice({
  name: "phonewords",
  initialState: {
    loading: false,
    error: "",
    results: [],
  },
  reducers: {
    clear: (state) => {
      state.loading = false;
      state.error = "";
      state.results = [];
    },
    fetchResultsStart: (state) => {
      state.loading = true;
      state.error = "";
      state.results = [];
    },
    fetchResultsSuccess: (state, action) => {
      state.loading = false;
      state.error = "";
      state.results = action.payload;
    },
    fetchResultsError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  clear,
  fetchResultsStart,
  fetchResultsSuccess,
  fetchResultsError,
} = phonewordsSlice.actions;

export const fetchResultsAsync = (numericString, useWordFilter) => {
  return async (dispatch) => {
    dispatch(fetchResultsStart());

    try {
      const response = await axios({
        method: "post",
        url: "/",
        data: {
          numericString: numericString,
          filter: useWordFilter,
        },
      });
      dispatch(fetchResultsSuccess(response.data));
    } catch (error) {
      dispatch(fetchResultsError(error.response.data.message));
    }
  };
};

export default phonewordsSlice.reducer;
