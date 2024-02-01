import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        movies:null,
        trailer:null,
        popular:null,
        upcoming:null,
    },
    reducers:{
        setMovies:(state,action)=>{
            state.movies= action.payload;
        },
        setPopularMovie:(state,action)=>{
            state.popular=action.payload;
        },
        setUpcomingMovie:(state,action)=>{
            state.upcoming=action.payload;
        },
        setTrailer:(state,action)=>{
            state.trailer=action.payload;
        }
    }

})

export const {setMovies,setTrailer,setPopularMovie,setUpcomingMovie} =movieSlice.actions;

export default movieSlice.reducer;