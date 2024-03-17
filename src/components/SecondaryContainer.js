import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movie)
  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-40 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.movies} />
        <MovieList title={"Trending Movies"} movies={movies.popular} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcoming} />
        <MovieList title={"Movie For You"} movies={movies.movies} />
      </div>
    </div>
  );
}

export default SecondaryContainer