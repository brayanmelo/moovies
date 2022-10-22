import React, { useEffect, useState } from "react";

//Components
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";

//Paths
const moviesURL = import.meta.env.VITE_API;
const moviesDiscover = import.meta.env.VITE_API_DISCOVER;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [discoverMovies, setDiscoverMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  const getDiscoverMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setDiscoverMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}&language=pt-BR`;
    getTopRatedMovies(topRatedUrl);
    const discoverMoviesUrl = `${moviesDiscover}${apiKey}&language=pt-BR`;
    getDiscoverMovies(discoverMoviesUrl);
  }, []);

  return (
    <main className="h-full ">
      <div className=" mx-auto px-8 mt-4 space-y-8 md:w-4/6 md:px-2">
        <section className="mx-auto lg:w-3/4 ">
          <h1 className="text-5xl md:text-6xl font-bold text-center leading-tight md:leading-snug ">
            O cinema{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 text-5xl md:text-7xl ">
              simplificado
            </span>
          </h1>
          <p className="font-thin mt-4 text-center">
            Procure pelo seu filme favorito para saber mais!
          </p>
        </section>
        <div className="border border-slate-700 rounded-lg mt-8"></div>
        <section>
          <h1 className="text-xl font-semibold mb-4">Melhores filmes</h1>
          <div className="box_movies">
            {topMovies.length > 0 ? (
              topMovies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))
            ) : (
              <Loading />
            )}
          </div>
        </section>

        <section>
          <h1 className="text-xl font-semibold mb-4 ">Novidades</h1>
          <div className="box_movies">
            {discoverMovies.length > 0 ? (
              discoverMovies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))
            ) : (
              <Loading />
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
