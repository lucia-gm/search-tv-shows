import * as Configuration from './config.js';

const api = 'https://api.themoviedb.org/3';

export const getPopular = () => 
  fetch(`${api}/discover/tv?api_key=${Configuration.apiKey}&language=en-US&sort_by=popularity.desc&page=1`)
  .then(response => response.json())
  .then(data => data.results)
