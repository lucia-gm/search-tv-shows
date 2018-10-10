import React from 'react';

const ShowsGrid = (props) => (
  <ul className="shows-grid">
    {props.shows.map(show => (
      <li key={show.id}>{show.name}</li>
    ))}
  </ul>
) 

export default ShowsGrid;