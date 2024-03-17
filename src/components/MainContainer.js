import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    const movies = useSelector(store=>store.movie.movies)

    if(!movies) return; //early return

    const mainMovie =movies[0];
    
    

   const { original_title, overview,id } = mainMovie;
   

    

  return (
    <div className='pt-[30%] bg-gradient-to-t from-black md:pt-0'>
      <VideoTitle title={original_title} description={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
}

export default MainContainer