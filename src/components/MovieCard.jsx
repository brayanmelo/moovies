import React from "react";

//Libs
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

//Icons
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbCalendarMinus } from "react-icons/tb";

//Paths
const imageURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="w-40 py-2 2xl:w-48 hover:scale-105 duration-200 ease-in-out ">
      {showLink && (
        <Link to={`/movie/${movie.id}`}>
          <LazyLoadImage
            src={`${imageURL}${movie.poster_path}`}
            effect="blur"
            className="rounded-xl h-60 w-40 2xl:h-72 2xl:w-48"
          />

          <h2 className="mt-2 truncate text-sm font-semibold text-center select-none">
            {movie.title}
          </h2>
          <div className="w-40 2xl:w-48 flex justify-between items-center mt-2">
            <p className="flex items-center gap-1 font-semibold text-sm bg-slate-800 px-2 rounded-lg">
              <FaStar color="#1f69e0" /> {movie.vote_average.toFixed(1)}
            </p>
            <p className="flex items-center gap-1 font-semibold text-sm bg-slate-800 px-2 rounded-lg">
              <TbCalendarMinus /> {movie.release_date.slice(0, 4)}
            </p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default MovieCard;
