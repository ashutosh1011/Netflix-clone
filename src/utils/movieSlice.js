import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        movies:null,
        trailer:null
    },
    reducers:{
        setMovies:(state,action)=>{
            state.movies= action.payload;
        },
        setTrailer:(state,action)=>{
            state.trailer=action.payload;
        }
    }

})

export const {setMovies,setTrailer} =movieSlice.actions;

export default movieSlice.reducer;