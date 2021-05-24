/* eslint-disable jsx-a11y/alt-text */
import "../App.css";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

function Movie(props) {
  const voteAverageColor = (vote) => {
    if (vote >= 7) {
      return "green";
    } else {
      return "red";
    }
  };

  return (
    <Link
      to={"/movies/" + props.id}
      className="movie d-flex align-items-start flex-column"
      key={props.id}
    >
      <div class="movie-comp-header d-flex align-items-center justify-content-between">
        <p className="movie-title">{props.title}</p>
        <p className={"vote-average " + voteAverageColor(props.vote_average)}>
          {props.vote_average}
        </p>
      </div>
      <img
        src={"https://image.tmdb.org/t/p/w500/" + props.poster_path}
        className="movie-poster"
      />
      <p className="movie-overview">{props.overview}</p>
    </Link>
  );
}

export default Movie;
