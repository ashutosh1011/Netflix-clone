import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "GPT",
  initialState: {
    showGPTSearchView: false,
    GPTMovies: null,
    MovieName:null
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGPTSearchView = !state.showGPTSearchView;
    },
    setGPTMovie: (state, action) => {
      const {MovieNames,MovieData} = action.payload;
      state.MovieName= MovieNames;
      state.GPTMovies = MovieData;

    }
  },
});

export const { toggleGPTSearchView, setGPTMovie } = GPTSlice.actions;
export default GPTSlice.reducer;
