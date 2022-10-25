import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Libs
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

//Icons
import { MdOutlineAccessTime } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";

//Paths
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageURL = import.meta.env.VITE_IMG;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}&language=pt-BR`;
    getMovie(movieUrl);
  }, []);

  return (
    <>
      {movie && (
        <div className="mx-auto lg:w-4/6">
          <header className="relative">
            <LazyLoadImage
              src={`${imageURL}${movie.backdrop_path} `}
              effect="blur"
              className=" w-full lg:rounded-xl"
            />
            <div className="h-full w-full absolute bg-gradient-to-t from-slate-900 top-0  flex flex-col items-center">
              <div className="absolute bottom-5 md:bottom-20 space-y-2 flex flex-col items-center px-8">
                <h1 className="font-bold text-2xl drop-shadow-md text-center md:text-5xl">
                  {movie.title}
                </h1>

                <div className="flex items-center gap-2 text-sm md:text-lg ">
                  <p className="font-semibold truncate">
                    {movie.genres.map((genres) => genres.name).join(", ")}
                  </p>

                  <p className="flex items-center gap-1 truncate">
                    <MdOutlineAccessTime />
                    {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
                  </p>
                </div>
              </div>
            </div>
          </header>
          <main className="px-6 pt-4 pb-8 space-y-8 md:px-32 ">
            <section>
              <div className="flex items-center justify-between mt-5 mb-7">
                <h2 className="font-semibold text-2xl flex items-center gap-2">
                  Sinopse <CgDetailsMore />
                </h2>
                <div className="px-2 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-sm">
                  <span className=" font-thin">TMDB </span>
                  <span>{movie.vote_average.toFixed(1)}</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-left">
                {!movie.overview ? (
                  <p>Sinopse não informada &#x1F972;</p>
                ) : (
                  <p className="indent-4">{movie.overview}</p>
                )}
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-2xl mb-4">Detalhes</h2>

              <div className="space-y-3">
                <div className="flex items-center gap-6 ">
                  <p className="text-sm font-semibold">Lançamento</p>
                  <p className="opacity-90">
                    {movie.release_date.split("-").reverse().join("/")}
                  </p>
                </div>

                <div className="border border-slate-700 rounded-lg mt-4"></div>

                <div className="flex items-center gap-6">
                  <p className="text-sm font-semibold">Orçamento</p>
                  <p className="opacity-90">
                    {movie.budget === 0 ? (
                      <p>Não disponível</p>
                    ) : (
                      <p>${movie.budget.toLocaleString()},00</p>
                    )}
                  </p>
                </div>

                <div className="border border-slate-700 rounded-lg mt-4"></div>

                <div className="flex items-center gap-6">
                  <p className="text-sm font-semibold">Receita</p>
                  <p className="opacity-90">
                    {movie.revenue === 0 ? (
                      <p>Não disponível</p>
                    ) : (
                      <p>${movie.revenue.toLocaleString()},00</p>
                    )}
                  </p>
                </div>

                <div className="border border-slate-700 rounded-lg mt-4"></div>

                <div className="flex items-center gap-6">
                  <p className="text-sm font-semibold">Produtora</p>
                  <div className="grid grid-cols-2 gap-2 ">
                    {movie.production_companies.map((prod) => (
                      <div className="bg-slate-800 px-2 py-1 rounded-xl text-center text-sm truncate">
                        {prod.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default Movie;
