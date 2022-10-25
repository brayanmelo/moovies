import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

//Components
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";

//Paths
const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const getSearchMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };
  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}&language=pt-BR`;
    getSearchMovies(searchWithQueryURL);
  }, [query]);

  return (
    <div className="lg:w-4/6 mx-auto px-6 h-full">
      <h1 className="text-center text-xl break-all my-8 ">
        Resultados para:{" "}
        <span className="text-cyan-500 text-2xl font-bold capitalize">
          {query}
        </span>
      </h1>

      <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-8 pb-12">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
        ) : (
          <div className="col-span-2 sm:col-span-3 lg:col-span-4 xl:col-span-5 ">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
