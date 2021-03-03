import React from 'react';

const Movie = ({id, original_title, original_language, popularity, poster_path, overview, adult, release_date}) => {
        
        const img_base_url = 'https://image.tmdb.org/t/p/w500/';
    
        return (
            <div className='card card-gradient'>
                <div className='container'>
                    <img src={img_base_url + poster_path} alt={original_title} />
                </div>

                <div className='details'>
                    <h3>{original_title}</h3>
                    <p><span>Adult: </span>{ adult === true ? 'Apta para mayores de 18 años' : 'Apta para todo público' }</p>
                    <p><span>Original Language: </span>{original_language}</p>
                    <p><span>Popularity: </span>{popularity}</p>
                    <p><span>Release Date: </span>{release_date}</p>
                    <p><span>Overview: </span>{overview}</p>
                </div>
            </div>
        );
};

export default Movie;
