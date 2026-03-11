export type MediaType = "movie" | "tv";

export type FetcherKey = 
  | "popular"
  | "topRated"
  | "discover"
  | "trending"
  | "upcoming"
  | "nowPlaying"
  | "search";

export type RowConfig = {
  title: string;
  mediaType: MediaType;
  fetcher: FetcherKey;
  params?: Record<string, unknown>;
  options?: Record<string, unknown>;
};

export const ROW_CONFIG: RowConfig[] = [
  // =========================
  // MOVIES
  // =========================
  {
    title: "Recommended Movies",
    mediaType: "movie",
    fetcher: "trending",
    options: { timeWindow: "week" },
  },
  {
    title: "Top Rated Movies",
    mediaType: "movie",
    fetcher: "topRated",
  },
  {
    title: "Latest Movie Releases",
    mediaType: "movie",
    fetcher: "discover",
    params: {
      sort_by: "primary_release_date.desc",
      "vote_count.gte": 50,
    },
  },
  {
    title: "Popular Movies",
    mediaType: "movie",
    fetcher: "popular",
  },

  // =========================
  // TV SHOWS
  // =========================
  {
    title: "Recommended TV Shows",
    mediaType: "tv",
    fetcher: "trending",
    options: { timeWindow: "week" },
  },
  {
    title: "Top Rated TV Shows",
    mediaType: "tv",
    fetcher: "topRated",
  },
  {
    title: "Latest TV Shows",
    mediaType: "tv",
    fetcher: "discover",
    params: {
      sort_by: "first_air_date.desc",
      "vote_count.gte": 50,
    },
  },
  {
    title: "Popular TV Shows",
    mediaType: "tv",
    fetcher: "popular",
  },

  // =========================
  // SCALABILITY EXAMPLES
  // =========================
  {
    title: "Malayalam Hits",
    mediaType: "movie",
    fetcher: "discover",
    params: {
      with_original_language: "ml",
      sort_by: "popularity.desc",
    },
  },
  {
    title: "Action Thrillers",
    mediaType: "movie",
    fetcher: "discover",
    params: {
      with_genres: "28", // Action
      sort_by: "vote_average.desc",
      "vote_count.gte": 100,
    },
  },
];
