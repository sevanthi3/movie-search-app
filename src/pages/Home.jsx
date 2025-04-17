import { useEffect, useState } from 'react';
import { fetchMovies } from '../services/api';
import MovieCard from '../components/MovieCard';

const Home = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [type, setType] = useState('');
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState('');

  const searchMovies = async () => {
    try {
      const data = await fetchMovies(search, page, type);
      if (data.Response === 'True') {
        setMovies(data.Search);
        setTotalResults(parseInt(data.totalResults));
        setError('');
      } else {
        setMovies([]);
        setTotalResults(0);
        setError(data.Error);
      }
    } catch {
      setError('Something went wrong.');
    }
  };

  useEffect(() => {
    if (search.length > 2) {
      searchMovies();
    }
  }, [page, type]);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    searchMovies();
  };

  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div className="container mx-auto px-4 py-6">
      <form onSubmit={handleSearch} className="flex flex-wrap gap-4 mb-6 shadow-xl rounded-md">
        <input
          type="text"
          placeholder="Search for movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded flex-1 font-bold"
        />
        <select onChange={(e) => setType(e.target.value)} className="border p-2 rounded font-bold">
          <option value="">All</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </select>
        <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded text-xl font-bold ">🔎Search</button>
      </form>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {movies.map((movie, index) => (
          <MovieCard key={`${movie.imdbID}-${index}`} movie={movie} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 rounded ${page === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
