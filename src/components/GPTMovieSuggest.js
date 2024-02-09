import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggest = () => {
  const { MovieName, GPTMovies } = useSelector((state) => state.gpt);

  if (!MovieName) return null;

  console.log(MovieName);

  return (
    <div className="p-4 m-4  bg-black opacity-80 text-white ">
      <div>
        {MovieName.map((movies, index) => {
          return (
            <MovieList key={movies} title={movies} movies={GPTMovies[index]} />
          );
        })}
      </div>
    </div>
  );
};

export default GPTMovieSuggest;
