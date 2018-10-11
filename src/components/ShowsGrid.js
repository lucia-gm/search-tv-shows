import React from 'react';
import Show from './Show.js';

const ShowsGrid = (props) => (
  <ul className="shows-grid">
    {props.shows.map(show => (
      <Show showInfo={show} key={show.id}/>
    ))}
  </ul>
) 

export default ShowsGrid;