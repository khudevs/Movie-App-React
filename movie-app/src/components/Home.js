import "../App.css";
import Navbar from "./_partials/Navbar";
import Movie from "./Movie";
import Banner from "./Banner";
import axios from "axios";
import { useEffect, useState } from "react";
import SkeletonMovie from "./Skeleton/SkeletonMovie";

function Home() {
  const [movies, setMovies] = useState();

  const API_MOVIES =
    "https://api.themoviedb.org/4/list/3?api_key=ae0ca2bf444cfa162469a3fd93a2a3f7";

  useEffect(() => {
    const getMovies = async () => {
      const result = await axios.get(API_MOVIES);
      setMovies(result.data.results);
    };

    getMovies();
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      <h3 className="popular-movies-header">Popular Movies</h3>
      {!movies ? (
        <div className="movies">
          {[1, 2, 3, 4, 5].map((x) => (
            <SkeletonMovie key={x} />
          ))}
        </div>
      ) : (
        <div className="movies">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              overview={movie.overview}
              vote_average={movie.vote_average}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
