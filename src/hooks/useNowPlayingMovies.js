import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Common";
import { setMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = ()=>{

const dispatch = useDispatch();

useEffect(() => {
  getNowPlayingMovies();
}, []);

const getNowPlayingMovies = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?page=1",
    API_OPTIONS
  );
  const data = await response.json();
  
 
  dispatch(setMovies(data.results));
};










    
}


export default  useNowPlayingMovies;