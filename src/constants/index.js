// const cors_anywhere = 'https://cors-anywhere.herokuapp.com/';
const base_url = 'https://api.themoviedb.org/3';
const api_key = '?api_key=APIKEY';

const get_movie_popular = '/movie/popular';
const movie_search = '/search/movie/';

// const page_param = '&page=1';

const person_search = '/search/person';
const get_person_popular = '/person/popular';

const search_param = '&query=';



// movies
export const moviesPopularGet = () => `${base_url}${get_movie_popular}${api_key}`;
export const movieSearch = q_movie => `${base_url}${movie_search}${api_key}${search_param}${q_movie}`;

// people
export const peoplePopularGet = () => `${base_url}${get_person_popular}${api_key}`;
export const personSearch = q_person => `${base_url}${person_search}${api_key}${search_param}${q_person}`;


