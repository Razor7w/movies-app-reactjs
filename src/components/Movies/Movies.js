import React from 'react';

import Movie from './Movie';
import Title from './../Common/Title';

const Movies = ({movies, text}) => {
    return (
        <div className='container-movie'>
            <Title text={text} />
            <div className='cards'>
                {
                    movies.map(movie => {
                        const {
                            id,
                            original_title,
                            original_language,
                            popularity,
                            poster_path,
                            overview,
                            adult,
                            release_date,
                        } = movie;

                        return (
                            <Movie 
                                key={id}
                                original_title={original_title}
                                original_language={original_language}
                                popularity={popularity}
                                poster_path={poster_path}
                                overview={overview}
                                adult={adult}
                                release_date={release_date}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Movies;