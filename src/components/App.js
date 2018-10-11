import React, { Component } from 'react';
import * as ShowsAPI from '../ShowsAPI';
import ShowsGrid from './ShowsGrid';
import SideBar from './SideBar';
import '../css/App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      popularShows: [],
      searchedShows: [],
    }
  }

  componentDidMount = () => {
    ShowsAPI.getPopular()
    .then(response => this.setState({popularShows: response}))
  }

  handleUpdateSearch = (query) => {
    ShowsAPI.search(query)
    .then(response => this.setState({searchedShows: response}))
    
  }

  render() {
    const { popularShows, searchedShows } = this.state;
    let featuredShows = (searchedShows.length > 1) ? searchedShows : popularShows;
    console.log(popularShows);

    return (
      <div className="App">
        <SideBar updateSearch={this.handleUpdateSearch}/>
        <ShowsGrid shows={featuredShows}/>
      </div>
    );
  }
}

export default App;
