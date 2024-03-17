import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggest from "./GPTMovieSuggest";
import { BG_IMG } from "../utils/Common";

const SearchGPT = () => {
  return (
    <>
    <div>
      <div className="-z-10 fixed">
        <img className="h-screen object-cover md:w-screen" src={BG_IMG} alt="background"></img>
      </div>
      </div>
      <div className="">
      <GPTSearchBar />
      <GPTMovieSuggest />
    </div>
    </>

  );
};

export default SearchGPT;
