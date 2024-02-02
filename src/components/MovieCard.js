import React from "react";

function MovieCard({
  title,
  posterSrc = "https://m.media-amazon.com/images/M/MV5BOTJjNzczMTUtNzc5MC00ODk0LWEwYjgtNzdiOTEyZmQxNzhmXkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_UY268_CR1,0,182,268_AL_.jpg",
  genres,
  posterURL,
}) {
  return (
    <div className="movie-card">
      <img src={posterSrc} alt={title} />
      <h2>{title}</h2>
      <h6>{posterURL}</h6>
      <small>{genres.join(", ")}</small>
    </div>
  );
}

export default MovieCard;
