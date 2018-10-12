import React, { Component } from 'react';
import * as ShowsAPI from '../ShowsAPI';

class SideBar extends Component{
  constructor() {
    super()
    this.state = {
      genres: [],
    }
  }

  componentDidMount = () => {
    ShowsAPI.getGenres()
    .then(response => this.setState({genres: response}))
  }

  onMenuClick = (event) => {
    event.preventDefault();
    const menuIcon = document.getElementById('burger-icon');
    menuIcon.classList.toggle('open');
    menuIcon.nextSibling.classList.toggle('open');
  }

  render() {
    const { genres } = this.state
    console.log(this.state.genres)

    return (
      <div className="sidebar">
        <div id="burger-icon" className="open" onClick={this.onMenuClick}>
          <div className="burger-icon-bar1"></div>
          <div className="burger-icon-bar2"></div>
          <div className="burger-icon-bar3"></div>
        </div>

        <div className="menu open">
          <input
            className="search"
            autoFocus={true}
            type="text"
            placeholder="Search by title"
            onChange={event => this.props.onUpdateSearch(event.target.value)}
          />
          <select onChange={event => this.props.onGenreChange(event.target.value)}>
            {genres.map(genre => (
              <option key={genre.id} value={genre.id}>{genre.name}</option>
            ))}
          </select>
        </div>
      </div>
    )
  }
}

export default SideBar;