const API_KEY = "676612bb00a0e3cbd7c65ff9c8c6ef92";

const requests = {
  fetchTrending: `movie/upcoming?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
};

export default requests;
