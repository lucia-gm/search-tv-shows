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
      query:'',
    }
  }

  componentDidMount = () => {
    ShowsAPI.getPopular()
    .then(response => this.setState({popularShows: response}));
  }

  handleUpdateSearch = (query) => {
    if (query.length > 0) {
      ShowsAPI.search(query)
      .then(response => this.setState({searchedShows: response,
                                      query: query
      }));
   } else {
     this.setState({searchedShows: [],
                    query: query});
   }
  }

  render() {
    const { popularShows, searchedShows, query } = this.state;
    let featuredShows = (searchedShows && searchedShows.length > 0) ? searchedShows : popularShows;
    let heading = (query.length > 0) ? (searchedShows.length > 0 ? `Search results for: ${query}` : `There are no movies that matched your query. \n These are the popular TV Shows:`) : 'Popular TV Shows';
    console.log(popularShows);

    return (
      <div className="App">
        <div className="App-content">
          <SideBar updateSearch={this.handleUpdateSearch}/>
          <ShowsGrid shows={featuredShows} heading={heading}/>
        </div>
        <footer>
          <img src={require("../images/TMDb-logo.png")} alt="TMDb logo"/>
          <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
        </footer>
      </div>
    );
  }
}

export default App;
