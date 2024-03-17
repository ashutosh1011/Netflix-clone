import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-screen aspect-video pt-[36%] md:pt-[18%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
      <p className=" hidden md:inline-block text-lg py-6 w-1/4">{description}</p>
      <div className="my-3 md:m-0">
        <button className="bg-white text-black  border-solid py-1 md:py-4  px-3 md:px-12 text-xl rounded-lg hover:opacity-85"> ▶️ play</button>
        <button className="hidden md:inline-block   bg-gray-500 mx-2 text-white  opacity-90 hover:opacity-70 border-solid p-4 px-12 text-xl rounded-lg ">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
