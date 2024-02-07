import React from "react";

import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


export const VideoBackground = ({ movieId }) => {
 
 


  const trailer = useSelector(store=>store.movie?.trailer);
  
  useMovieTrailer(movieId);

  
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/UGc5Tzz19UY?si="+trailer?.key+"?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; autoplay"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
