import "../App.css";
import Navbar from "./_partials/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { GrMoney, GrLanguage } from "react-icons/gr";
import {
  RiMoneyDollarCircleFill,
  RiNumbersFill,
  RiAccountPinCircleFill,
} from "react-icons/ri";
import { AiOutlineRise } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import { BiTimer } from "react-icons/bi";
import { convertToMoney, timeConvert } from "./Functions";
import SkeletonMovieDetail from "./Skeleton/SkeletonMovieDetail";

function MovieDetail() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    const uniqueMovie = async () => {
      const movieById = await axios.get(
        `https://api.themoviedb.org/3/movie/${
          window.location.href.split("/")[4]
        }?api_key=ae0ca2bf444cfa162469a3fd93a2a3f7`
      );
      setMovie(movieById.data);
    };
    uniqueMovie();
  }, []);

  return (
    <div>
      <Navbar />
      {!movie ? (
        <SkeletonMovieDetail />
      ) : (
        <div className="movie-detail d-flex align-items-start">
          <img src={"https://image.tmdb.org//t/p/w500/" + movie.poster_path} />
          <div className="detail-info">
            <div className="detail-header d-flex align-items-center">
              <p className="detail-title"> {movie.original_title} </p>
              <p className="detail-tagline">
                {" "}
                <i>'{movie.tagline}'</i>{" "}
              </p>
            </div>
            <p className="detail-overview"> {movie.overview} </p>
            <div className="detail-desc d-flex align-items-start ">
              <div className="detail-desc-left">
                <div className="detail-revenue d-flex align-items-center">
                  <RiMoneyDollarCircleFill size="24px" />
                  <p>$ {convertToMoney(movie.revenue)}</p>
                  <p
                    style={
                      movie.budget > movie.revenue
                        ? { color: "red" }
                        : { color: "#1bbf1b" }
                    }
                  >
                    ({convertToMoney(movie.revenue - movie.budget)})
                  </p>
                </div>
                <div className="detail-budget d-flex align-items-center">
                  <GrMoney size="24px" />
                  <p>$ {convertToMoney(movie.budget)}</p>
                </div>
                <div className="detail-language d-flex align-items-center">
                  <GrLanguage size="24px" />
                  <p> {movie.original_language} </p>
                </div>
                <div className="detail-popularity d-flex align-items-center">
                  <AiOutlineRise size="24px" />
                  <p>{movie.popularity}</p>
                </div>
                <div className="detail-release-date d-flex align-items-center">
                  <MdDateRange size="24px" />
                  <p> {movie.release_date} </p>
                </div>
                <div className="detail-runtime d-flex align-items-center">
                  <BiTimer size="24px" />
                  <p> {timeConvert(movie.runtime)} </p>
                </div>
                <div className="detail-vote-average d-flex align-items-center">
                  <RiNumbersFill
                    size="24px"
                    color={movie.vote_average < 7 ? "red" : "#1bbf1b"}
                  />
                  <p
                    style={
                      movie.vote_average < 7
                        ? { color: "red" }
                        : { color: "#1bbf1b" }
                    }
                  >
                    {movie.vote_average}
                  </p>
                </div>
                <div className="detail-vote-count d-flex align-items-center">
                  <RiAccountPinCircleFill size="24px" />
                  <p> {convertToMoney(movie.vote_count)} </p>
                </div>
              </div>
              <div className="detail-desc-right">
                <div className="detail-production-countries ">
                  <p>Production Countries </p>
                  <ul className="name-list">
                    {movie.production_countries.map((el) => (
                      <li key={el.iso_3166_1}>{el.name}</li>
                    ))}
                  </ul>
                </div>
                <div className="detail-genres ">
                  <p>Genres </p>
                  <ul className="name-list">
                    {movie.genres.map((el) => (
                      <li key={el.iso_3166_1}>{el.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
