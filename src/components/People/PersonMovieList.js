import React from 'react';

const PersonMovieList = ({original_title}) => {

    return (
        <div className='container-person-appearances'>
            <ul>
                <li>{original_title}</li>
            </ul>
        </div>
    );
};

export default PersonMovieList;
