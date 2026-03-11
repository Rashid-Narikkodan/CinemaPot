import tmdb from "../api/tmdb";
import type { RowConfig } from "../config/rowConfig";

/**
 * Dynamically builds TMDb endpoints and fetches content.
 * 
 * @param {RowConfig} rowConfig - Configuration for the row
 * @param {number} page - Page number for pagination
 * @returns {Promise<any>} - The fetched data
 */
export const fetchMovies = async (rowConfig: RowConfig, page: number = 1): Promise<any> => {
  const { mediaType, fetcher, params = {}, options = {} } = rowConfig;

  let endpoint = "";

  switch (fetcher) {
    case "popular":
      endpoint = `/${mediaType}/popular`;
      break;
    case "topRated":
      endpoint = `/${mediaType}/top_rated`;
      break;
    case "discover":
      endpoint = `/discover/${mediaType}`;
      break;
    case "trending":
      const timeWindow = (options.timeWindow as string) || "day";
      endpoint = `/trending/${mediaType}/${timeWindow}`;
      break;
    case "upcoming":
      endpoint = `/${mediaType}/upcoming`;
      break;
    case "nowPlaying":
      endpoint = mediaType === "movie" ? "/movie/now_playing" : "/tv/on_the_air";
      break;
    case "search":
      endpoint = `/search/${mediaType}`;
      break;
    default:
      throw new Error(`Unsupported fetcher: ${fetcher}`);
  }


  const finalParams = {
    ...params,
    page,
  };

  try {
    const response = await tmdb.get(endpoint, {
      params: finalParams,
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${mediaType} with ${fetcher}:`, error);
    throw error;
  }
};
