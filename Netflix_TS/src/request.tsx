const series_id = "63174";

const requests = {
  fetchTrending: `/movie/upcoming`,
  fetchNetflixOriginals: `/discover/tv`,
  fetchTopRated: `/movie/top_rated`,
  fetchActionMovies: `/discover/movie`,
  fetchComedyMovies: `/discover/movie`,
  fetchHorrorMovies: `/discover/movie`,
  fetchRomanticMovies: `/discover/movie`,
  fetchCast: `/tv/${series_id}/credits`,
  //fetchCast: `/tv/credits`,
};

export default requests;
