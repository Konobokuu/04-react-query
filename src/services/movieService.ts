import axios from "axios";
import type { FetchMoviesResponse } from "../types/movie";

const movieAxios = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    // Звертаємось до змінної оточення у Vite:
    api_key: import.meta.env.VITE_TMDB_API_KEY, 
    language: "en-US",
  },
});

interface FetchMoviesParams {
  query: string;
  page: number;
}

export const fetchMovies = async ({
  query,
  page,
}: FetchMoviesParams): Promise<FetchMoviesResponse> => {
  const response = await movieAxios.get<FetchMoviesResponse>("/search/movie", {
    params: {
      query,
      page,
    },
  });
  return response.data;
};