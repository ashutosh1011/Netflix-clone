import { useDispatch, useSelector } from "react-redux";
import { setUpcomingMovie } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Common";

const useUpcomingMovie = () => {
  const dispatch = useDispatch();

  const upcomingMovie = useSelector((store) => store.movie.upcoming);

  useEffect(() => {
    !upcomingMovie && getPopularMovies();  //memoization(prevent api call again again)
  }, []);

  const getPopularMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const data = await response.json();

    dispatch(setUpcomingMovie(data.results));
  };
};

export default useUpcomingMovie;
