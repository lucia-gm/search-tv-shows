import React, { Component } from 'react';

class Show extends Component {
  
  render() { 
    const { showInfo } = this.props;
    const imgLink = `https://image.tmdb.org/t/p/w500/${showInfo.poster_path}`;

    return (
      <li>
        <img src={imgLink} alt={showInfo.name}></img>
        <h4>{showInfo.name}</h4>    
        <p>{showInfo.vote_average}</p>
        <p>{showInfo.first_air_date}</p>
      </li>
    )
  }
}


export default Show;