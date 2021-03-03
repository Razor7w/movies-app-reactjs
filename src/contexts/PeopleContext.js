import React, { createContext, useState, useEffect } from 'react';

import { peoplePopularGet, personSearch } from './../constants';

export const PeopleContext = createContext();

const PeopleContextProvider = ({children}) => {
    const [doneFetch, setDoneFetch] = useState();
    const [currentQPerson, setCurrentQPerson] = useState('');
    const [text, setText] = useState('Popular People');
    const [people, setPeople] = useState([]);

    useEffect(() => {
        getPopularPeople()
    }, []);

    const getPopularPeople = () => {
        fetch(peoplePopularGet())
            .then(res => res.json())
            .then(data => {
                setDoneFetch(true);
                setPeople(data.results);
            }).catch(err => console.log(err));
    };

    const getSearchPerson = q_person => {
        fetch(personSearch(q_person))
            .then(res => res.json())
            .then(data => {
                const { results } = data;
                setDoneFetch(true);
                setText(results.length ? 'Results' : 'No Results');
                setPeople(results);
            }).catch(err => console.log(err));
    };

    const validateQPerson = (e, q_person = document.querySelector('#q_person').value.toLowerCase().trim()) => {
        if (e.type === 'keypress' && e.key !== 'Enter') return ;

        const words = q_person.match(/\w+/g);
        q_person = words && words.join(' ');

        if (q_person && q_person !== currentQPerson) {
            setCurrentQPerson(q_person);
            setDoneFetch(false);
            getSearchPerson(q_person);
        };
    };

    return (
        <PeopleContext.Provider value={{ doneFetch, text, people, validateQPerson }}>
            {children}
        </PeopleContext.Provider>
    );
};

export default PeopleContextProvider;