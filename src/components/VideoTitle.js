import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-screen aspect-video pt-[18%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-lg py-6 w-1/4">{description}</p>
      <div>
        <button className="bg-white text-black  border-solid p-4 px-12 text-xl rounded-lg hover:opacity-85"> ▶️ play</button>
        <button className="bg-gray-500 mx-2 text-white  opacity-90 hover:opacity-70 border-solid p-4 px-12 text-xl rounded-lg ">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
