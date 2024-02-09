import React from "react";
import { IMG_URL } from "../utils/Common";

const MovieCart = ({ poster_path }) => {
  if (!poster_path) return null;
  return (
    <div className="w-40 pr-4 transition-transform hover:scale-110">
      <img alt="movie-card" src={IMG_URL + poster_path} />
    </div>
  );
};

export default MovieCart;
