import axios from "axios";
import { useEffect } from "react";

const API_KEY = '3cdc0d83651348593f9db8c46144c5a0';
const BASE_URL = 'https://api.themoviedb.org/3'

export const fetchTrendingMovies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
        console.log(response.data)
        const data = response.data;
        return data.results;
    } catch (e) {
        console.error("Error while fetching API", e)
    }
}

export const fetchPopularMovies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/popular/movie/day?api_key=${API_KEY}`)
        console.log(response.data)
        const data = response.data;
        return data.results;
    } catch (e) {
        console.error("Error while fetching API", e)
    }
}

export const fetchTopRatedMovies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/top_rated/movie/day?api_key=${API_KEY}`)
        console.log(response.data)
        const data = response.data;
        return data.results;
    } catch (e) {
        console.error("Error while fetching API", e)
        return [];
    }
}

export const fetchMovieByGenre = async (genreID) => {
    try {
        const responce = axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`);
        console.log(responce.data)
        const data = response.data;
        return data.results;
    } catch (e) {
        console.error('Error fetching the data', e)
        return []
    }
}

export const fetchGenre = async () => {
    try {
        const response = await axios.get(
            `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
        );
        const data = response.data;
        return data.genres;

    } catch (e) {
        console.error('Error fetching the data', e)
        return [];
    }
}

export const fetchMovieDetails = async (movie_id) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}`
        );
        const data = response.data;
        return data;

    } catch (e) {
        console.error('Error fetching the data', e)
        return [];
    }
}

export const searchMovies = async (movieName) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${movieName}`
        );
        const data = response.data;
        return data.results;

    } catch (e) {
        console.error('Error fetching the data', e)
        return [];
    }
}

export const getImgageURL = (path, size = 'original') => {
    if (!path) {
        return 'https://placehold.co/400x600?text=No+Image+Available';
    }
    return `https://image.tmdb.org/t/p/${size}${path}`;
}
