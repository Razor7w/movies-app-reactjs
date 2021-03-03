import React from 'react';

import PersonMovieList from './PersonMovieList';

const Person = ({ profile_path, known_for, name, popularity }) => {
        
        const img_base_url = 'https://image.tmdb.org/t/p/w500/';

        // let movies_person = [];

        // movies_person = known_for.map(item => {
        //     const {
        //         id,
        //         original_title,
        //     } = item;

        //     cont++;

        //     return cont, original_title;
        // });
    
        return (
            <div className='card card-gradient'>
                <div className='container'>
                    <img src={img_base_url + profile_path} alt={name} />
                </div>

                <div className='details'>
                    <h3>{name}</h3>
                    
                    <span>Movies Appearances: </span>

                    {
                        known_for.map(movie_person => {
                            const {
                                id,
                                original_title,
                            } = movie_person;
    
                            return (
                                <PersonMovieList
                                    key={id}
                                    original_title={original_title}
                                />
                            );
                        })
                    }
                    

                    <p><span>Popularity: </span>{popularity}</p>
                </div>
            </div>
        );
};

export default Person;
