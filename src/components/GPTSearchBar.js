import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/LanguageConstant";
import openai from "../utils/OpenAI";
import { API_OPTIONS } from "../utils/Common";
import { setGPTMovie } from "../utils/GPTSlice";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  const dispatch = useDispatch();

  const searchValue = useRef(null);

  const searchmovieTMDB = async (movie) => {
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const data = await response.json();

    return data.results;
  };

  const handleGPTSearch = async () => {
    console.log(searchValue.current.value);

    //API call to get a movie result

    const GPTQuery =
      "Act as a movie recommendation System and suggest some movies for the queries :" +
      searchValue.current.value +
      ". Only give me names of 5 movies , comma separated like the example result  given ahead. Example result:Don,Gadar,Hera Pheri,3 idiots,PK";

    const GPTSearch = await openai.chat.completions.create({
      messages: [{ role: "user", content: GPTQuery }],
      model: "gpt-3.5-turbo",
    });

    console.log(GPTSearch.choices[0]?.message.content);

    const GPTMovies = GPTSearch.choices[0]?.message.content.split(",");

    const promiseArray = GPTMovies.map((movie) => searchmovieTMDB(movie));

    const movieData = await Promise.all(promiseArray);

    dispatch(setGPTMovie({ MovieNames: GPTMovies, MovieData: movieData }));
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className=" w-full md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].placeholder}
          ref={searchValue}
        />
        <button
          className="py-2 px-4 m-4 col-span-3 bg-red-700 rounded-lg hover:rounded-none"
          onClick={handleGPTSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
