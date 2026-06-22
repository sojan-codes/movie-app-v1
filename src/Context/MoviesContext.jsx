import React, { createContext, useEffect, useState } from 'react'
import { fetchGenre, fetchMovieByGenre, fetchPopularMovies, fetchTopRatedMovies, fetchTrendingMovies } from '../Services/api.js'

export const userMoviesContext = createContext()

const MoviesContext = ({ children }) => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedMovieID, setSelectedMovieID] = useState(null);

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                setLoading(true);
                const [trending, popular, topRated, genreList] = await Promise.all([
                    fetchTrendingMovies(),
                    fetchPopularMovies(),
                    fetchTopRatedMovies(),
                    fetchGenre(),
                ])

                setTrendingMovies(trending)
                setPopularMovies(popular)
                setTopRatedMovies(topRated)
                setGenres(genreList)
            } catch (err) {
                console.log("Error fetching Movie Data: ", err)
            } finally {
                setLoading(false);
            }
        }
    }, [])

    const openMoviesDetails = (movieDetail) => {
        selectedMovieID(movieDetail);
        document.body.style.overflow = 'hidden';
    }

    const closeMoviesDetails = () => {
        selectedMovieID(null);
        document.body.style.overflow = 'auto';
    }

    return (
        <userMoviesContext.Provider value={{ trendingMovies, popularMovies, topRatedMovies, genres, loading, error, selectedMovieID, openMoviesDetails, closeMoviesDetails }}>
            {children}
        </userMoviesContext.Provider>
    )
}

export default MoviesContext
