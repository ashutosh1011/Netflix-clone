import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovie from "../hooks/usePopularMovies";
import useUpcomingMovie from "../hooks/useUpcomingMovie";

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovie();
  useUpcomingMovie();
  
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
