import axios from 'axios';

const API_ENDPOINT = `https://imdb-api.com/en/API/SearchTitle/${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`;
const API_ENDPOINT2 = `https://imdb-api.com/en/API/Title/${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`;

const API_ENDPOINT3 = `https://imdb-api.com/en/API/SearchAll/${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`;

export const fetchMovies = async (movieName) => axios.get(`${API_ENDPOINT}/${movieName}`);

export const fetchMovie = async (movieId) => axios.get(`${API_ENDPOINT2}/${movieId}`);

export const fetchSearchMovies = async (searchMovieName) => axios.get(`${API_ENDPOINT3}/${searchMovieName}`);

