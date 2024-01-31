import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        movies:null,
    },
    reducers:{
        setMovies:(state,action)=>{
            state.movies= action.payload;
        }
    }

})

export const {setMovies} =movieSlice.actions;

export default movieSlice.reducer;