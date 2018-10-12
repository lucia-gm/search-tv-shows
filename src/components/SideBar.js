import React, { Component } from 'react';

class SideBar extends Component{
  onMenuClick = (event) => {
    event.preventDefault();
    const menuIcon = document.getElementById('burger-icon');
    menuIcon.classList.toggle('open');
    menuIcon.nextSibling.classList.toggle('open');
  }

  render() {
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
            onChange={event => this.props.updateSearch(event.target.value)}
          />
        </div>
      </div>
    )
  }
}

export default SideBar;