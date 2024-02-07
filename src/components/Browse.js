import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovie from "../hooks/usePopularMovies";
import useUpcomingMovie from "../hooks/useUpcomingMovie";
import SearchGPT from "./SearchGPT";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovie();
  useUpcomingMovie();
  const GPTView = useSelector((store) => store.gpt.showGPTSearchView);
  return (
    <div>
      <Header />
      {GPTView ? (
        <SearchGPT />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
