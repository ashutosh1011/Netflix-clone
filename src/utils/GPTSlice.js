import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "GPT",
  initialState: {
    showGPTSearchView: false,
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGPTSearchView = !state.showGPTSearchView;
    },
  },
});

export const { toggleGPTSearchView } = GPTSlice.actions;
export default GPTSlice.reducer;
