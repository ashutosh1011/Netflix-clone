import { setTrailer } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Common";


const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const MovieTrailer = useSelector((store) => store.movie.trailer);

  

  const getMovieVideo = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      API_OPTIONS
    );
    const data = await response.json();
    

    const filterData = data.results?.filter(
      (video) => video.name === "Official Trailer"
    );

    const trailer = filterData.length ? filterData[0] : data.results[0]; //if there is no trailer
    dispatch(setTrailer(trailer));
  };

  useEffect(() => {
   !MovieTrailer && getMovieVideo();
  }, []);
};

export default useMovieTrailer;