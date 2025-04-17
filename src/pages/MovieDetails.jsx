import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieDetails } from '../services/api';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getDetails = async () => {
      const data = await fetchMovieDetails(id);
      setMovie(data);
    };
    getDetails();
  }, [id]);

  const addToFavorites = () => {
    let fav = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!fav.find((item) => item.imdbID === movie.imdbID)) {
      fav.push(movie);
      localStorage.setItem('favorites', JSON.stringify(fav));
      alert("Added to favorites!");
    }
  };

  if (!movie) return <div className="text-center p-10">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid md:grid-cols-2 gap-8">
        <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />
        <div>
          <h1 className="text-3xl font-bold">{movie.Title}</h1>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
          <button onClick={addToFavorites} className="mt-4 bg-green-600 text-white px-4 py-2 rounded">Add to Favorites</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
