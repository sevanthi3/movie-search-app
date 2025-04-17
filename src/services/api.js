const API_KEY = '43b50450'; 
const BASE_URL = 'https://www.omdbapi.com/';

export const fetchMovies = async (search, page = 1, type = '') => {
  let url = `${BASE_URL}?apikey=${API_KEY}&s=${search}&page=${page}`;
  if (type) url += `&type=${type}`;

  const res = await fetch(url);
  return res.json();
};

export const fetchMovieDetails = async (id) => {
  const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`);
  return res.json();
};
