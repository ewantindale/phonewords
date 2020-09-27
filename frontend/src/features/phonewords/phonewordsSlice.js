import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const phonewordsSlice = createSlice({
  name: "phonewords",
  initialState: {
    numericString: "",
    useWordFilter: false,
    error: "",
    loading: false,
    results: [],
  },
  reducers: {
    toggleFilter: (state) => {
      state.useWordFilter = !state.useWordFilter;
    },
    setNumericString: (state, action) => {
      state.numericString = action.payload;
    },
    fetchResultsStart: (state) => {
      state.loading = true;
      state.error = "";
      state.results = [];
    },
    fetchResultsSuccess: (state, action) => {
      state.loading = false;
      state.results = action.payload;
      state.error = "";
    },
    fetchResultsError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  toggleFilter,
  setNumericString,
  fetchResultsStart,
  fetchResultsSuccess,
  fetchResultsError,
} = phonewordsSlice.actions;

export const fetchResultsAsync = () => {
  return async (dispatch, getState) => {
    const state = getState();

    dispatch(fetchResultsStart());

    try {
      const response = await axios({
        method: "post",
        url: "/",
        data: {
          numericString: state.phonewords.numericString,
          filter: state.phonewords.useWordFilter,
        },
      });
      dispatch(fetchResultsSuccess(response.data));
    } catch (error) {
      dispatch(fetchResultsError(error.response.data.message));
    }
  };
};

export default phonewordsSlice.reducer;
