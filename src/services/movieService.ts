import axios from 'axios';
import type { TMDBResponse } from '../types/movie';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjdkNGQwZjk2ZGQzYmMzNWIxOWViODgwNGJmNjVkYSIsIm5iZiI6MTc3ODY5MTAxNS43NTcsInN1YiI6IjZhMDRhYmM3OTA2MTk0OGI2ZjM1ZjU2MiIsInNjb3BlcyI6WyJhcGxfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zG5JzHNZPFw0wsF2nFvUBu5bNbCfpHdHBPJvhEczEz4`;

export const fetchMovies = async (query: string, page: number = 1): Promise<TMDBResponse> => {
  const response = await axios.get<TMDBResponse>('/search/movie', {
    params: {
      query: query,
      page: page,
    },
  });
  return response.data;
};