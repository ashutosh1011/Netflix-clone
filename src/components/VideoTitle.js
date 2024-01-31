import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-lg py-6 w-1/4">{description}</p>
      <div>
        <button className="bg-gray-500 text-white border-solid p-4 px-12 text-xl rounded-lg  opacity-70 hover:opacity-90"> ▶️ play</button>
        <button className="bg-gray-500 mx-2 text-white  opacity-70 hover:opacity-90 border-solid p-4 px-12 text-xl rounded-lg ">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
