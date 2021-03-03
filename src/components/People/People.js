import React from 'react';

import Person from './Person';
import Title from './../Common/Title';

const People = ({people, text}) => {
    return (
        <div className='container-person'>
            <Title text={text} />
            <div className='cards'>
                {
                    people.map(person => {
                        const {
                            id,
                            profile_path,
                            known_for,
                            name,
                            popularity,
                        } = person;

                        return (
                            <Person 
                                key={id}
                                profile_path={profile_path}
                                known_for={known_for}
                                name={name}
                                popularity={popularity}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default People;