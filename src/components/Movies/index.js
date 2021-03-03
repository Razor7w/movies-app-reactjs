import React, { Fragment, useContext } from 'react';

import { MoviesContext } from './../../contexts/MoviesContext';
import SearchMovies from './SearchMovies';
import Movies from './Movies';
import ProgressBar from './../Common/ProgressBar';
import Title from './../Common/Title';

const MovieIndex = () => {
    const { validateQMovie, doneFetch, movies, text } = useContext(MoviesContext);

    return (
        <Fragment>
            <SearchMovies validateQMovie={validateQMovie} />
            {
                doneFetch ? 
                    (movies.length ? <Movies text={text} movies={movies} /> : <Title text={text} />)
                : 
                    <ProgressBar />
            }
        </Fragment>
    );
};

export default MovieIndex;
