import React from "react";
import MovieCart from "./MovieCart";

const MovieList = ({ title, movies }) => {
  if (!movies) return; //early return

  return (
    <div className="px-6">
      <h2 className="text-lg md:text-3xl font-semibold py-4 text-white">{title}</h2>
      <div className="flex overflow-x-scroll overflow-hidden">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCart poster_path={movie.poster_path} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
