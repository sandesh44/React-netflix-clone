const API_KEY="4689f595440fee2858d412d466914877";
const requests={
fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
fetchNetflixOrginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchActionMovies:`/discover/tv?api_key=${API_KEY}&with_genres=28`,
fetchComedyMovies:`/discover/tv?api_key=${API_KEY}&with_genres=35`,
fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRomanticMovies:`/discover/tv?api_key=${API_KEY}&with_genres=10749`,
fetchDocumentries:`/discover/tv?api_key=${API_KEY}&with_genres=99`,


}
export default requests;