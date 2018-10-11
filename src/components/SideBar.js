import React from 'react';

const SideBar = (props) => (
  <div className="sidebar">
    <input
      className="search"
      autoFocus={true}
      type="text"
      placeholder="Search by title"
      onChange={event => props.updateSearch(event.target.value)}
    />
  </div>
)

export default SideBar;