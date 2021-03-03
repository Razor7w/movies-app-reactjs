import React, { createContext, useState, useEffect } from 'react';

import { moviesPopularGet, movieSearch } from './../constants';

export const MoviesContext = createContext();

const MoviesContextProvider = ({children}) => {
    const [doneFetch, setDoneFetch] = useState();
    const [currentQMovie, setCurrentQMovie] = useState('');
    const [text, setText] = useState('Popular Movies');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getPopularMovies()
    }, []);

    const getPopularMovies = () => {
        fetch(moviesPopularGet())
            .then(res => res.json())
            .then(data => {
                setDoneFetch(true);
                setMovies(data.results);
            }).catch(err => console.log(err));
    };

    const getSearchMovies = q_movie => {
        fetch(movieSearch(q_movie))
            .then(res => res.json())
            .then(data => {
                const { results } = data;
                setDoneFetch(true);
                setText(results.length ? 'Results' : 'No Results');
                setMovies(results);
            }).catch(err => console.log(err));
    };

    const validateQMovie = (e, q_movie = document.querySelector('#q_movie').value.toLowerCase().trim()) => {
        if (e.type === 'keypress' && e.key !== 'Enter') return ;

        const words = q_movie.match(/\w+/g);
        q_movie = words && words.join(' ');

        if (q_movie && q_movie !== currentQMovie) {
            setCurrentQMovie(q_movie);
            setDoneFetch(false);
            getSearchMovies(q_movie);
        };
    };

    return (
        <MoviesContext.Provider value={{ doneFetch, text, movies, validateQMovie }}>
            {children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;