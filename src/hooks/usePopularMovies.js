import { useDispatch, useSelector } from "react-redux";
import { setPopularMovie } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Common";

const usePopularMovie = ()=>{
    const dispatch = useDispatch();

    const popularMovie = useSelector((store) => store.movie.popular);

useEffect(() => {
 !popularMovie && getPopularMovies();
}, []);

const getPopularMovies = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?page=2",
    API_OPTIONS
  );
  const data = await response.json();
  
 
  dispatch(setPopularMovie(data.results));
};










   
}


export default  usePopularMovie;
