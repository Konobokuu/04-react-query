import axios from "axios";
import type { Movie } from "../types/movie";

export interface FetchMoviesResponse {
  results: Movie[];
  total_pages: number;
  total_results: number;
  page: number;
}

interface FetchMoviesParams {
  query: string;
  page: number;
}
const TMDB_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const movieAxios = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${TMDB_TOKEN}`,
    Accept: "application/json",
  },
  params: {
    language: "en-US",
  },
});

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