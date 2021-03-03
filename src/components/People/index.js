import React, { Fragment, useContext } from 'react';

import { PeopleContext } from './../../contexts/PeopleContext';
import SearchPeople from './SearchPeople';
import People from './People';
import ProgressBar from './../Common/ProgressBar';
import Title from './../Common/Title';

const PeopleIndex = () => {
    const { validateQPerson, doneFetch, people, text } = useContext(PeopleContext);

    return (
        <Fragment>
            <SearchPeople validateQPerson={validateQPerson} />
            {
                doneFetch ? 
                    (people.length ? <People text={text} people={people} /> : <Title text={text} />)
                : 
                    <ProgressBar />
            }
        </Fragment>
    );
};

export default PeopleIndex;
