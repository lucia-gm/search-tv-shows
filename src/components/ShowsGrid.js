import React from 'react';
import Show from './Show.js';

const ShowsGrid = (props) => (
  <main>
    <h2 className="shows-grid-heading">{props.heading}</h2>
    <ul className="shows-grid">
      {props.shows.map(show => (
        <Show showInfo={show} key={show.id}/>
      ))}
    </ul>
  </main>
) 

export default ShowsGrid;