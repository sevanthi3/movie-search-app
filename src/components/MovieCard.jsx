import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white shadow rounded-xl overflow-hidden hover:scale-105 transition transform duration-300">
      <Link to={`/movie/${movie.imdbID}`}>
        <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"} alt={movie.Title} className="w-full h-80 object-cover" />
        <div className="p-3">
          <h2 className="text-lg font-semibold">{movie.Title}</h2>
          <p className="text-sm text-gray-600">{movie.Year}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
