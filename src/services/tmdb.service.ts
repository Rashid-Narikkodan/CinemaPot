import tmdb from "../api/tmdb";

export const getTrendingMovies = async (timeWindow = "day", page = 1) => {
  const res = await tmdb.get(`/trending/movie/${timeWindow}`, {
    params: { page }
  });

  if (res.status !== 200) {
    throw new Error("TMDB trending fetch failed");
  }

  return res.data;
};

export const getPopularMovies = async (page = 1) => {
  const res = await tmdb.get("/movie/popular", {
    params: { page }
  });

  if (res.status !== 200) {
    throw new Error("TMDB popular fetch failed");
  }

  return res.data;
};

export const getNowPlayingMovies = async (page = 1) => {
  const res = await tmdb.get("/movie/now_playing", {
    params: { page }
  });

  if (res.status !== 200) {
    throw new Error("TMDB now playing fetch failed");
  }

  return res.data;
};

export const getRandomMovie = async () => {
  const res = await tmdb.get('/movie/top_rated');
  
  const movies = res?.data?.results;
  if (!Array.isArray(movies) || movies.length === 0) return null;

  // Mix multiple entropy sources
  const entropy =
    Date.now() ^
    performance.now() ^
    Math.floor(Math.random() * 1e9);

  const randomIndex = Math.abs(entropy) % movies.length;
  return movies[randomIndex];
};

export const getRelatedMovies = async (movieId: number, page = 1) => {
  const res = await tmdb.get(`/movie/${movieId}/recommendations`, {
    params: { page }
  });

  if (res.status !== 200) {
    throw new Error("TMDB related movies fetch failed");
  }

  return res.data.results; // array of MovieDetails
};

export const getMovieVideos = async (movieId: number) => {
  const res = await tmdb.get(`/movie/${movieId}/videos`);

  if (res.status !== 200) {
    throw new Error("TMDB movie videos fetch failed");
  }

  return res.data;
};

export const getMovieDetails = async (movieId: number) => {
  const res = await tmdb.get(`/movie/${movieId}`, {
    params: {
      append_to_response: "credits,images,videos",
    },
  });

  if (res.status !== 200) {
    throw new Error("TMDB movie details fetch failed");
  }
  console.log("getMovieDetails"+res.data)
  return res.data;
};
