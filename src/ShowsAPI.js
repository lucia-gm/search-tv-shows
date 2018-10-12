import * as Configuration from './config.js';

const api = 'https://api.themoviedb.org/3';

export const getPopular = () => 
  fetch(`${api}/trending/tv/week?api_key=${Configuration.apiKey}`)
  .then(response => response.json())
  .then(data => data.results)

export const search = (query) => 
  fetch(`${api}/search/tv?api_key=${Configuration.apiKey}&language=en-US&query=${query}&page=1`)
  .then(response => response.json())
  .then(data => data.results)

export const getGenres = () => 
  fetch(`${api}/genre/tv/list?api_key=${Configuration.apiKey}`)
  .then(response => response.json())
  .then(data => data.genres)
