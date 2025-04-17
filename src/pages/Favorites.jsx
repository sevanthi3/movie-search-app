import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(favs);
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">My Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorite movies added yet.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {favorites.map((movie, index) => (
            <MovieCard key={`${movie.imdbID}-${index}`} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
