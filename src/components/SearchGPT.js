import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggest from "./GPTMovieSuggest";
import { BG_IMG } from "../utils/Common";

const SearchGPT = () => {
  return (
    <div>
      <div className="-z-10 fixed">
        <img src={BG_IMG} alt="background"></img>
      </div>
      <GPTSearchBar />
      <GPTMovieSuggest />
    </div>
  );
};

export default SearchGPT;
