import React, { Component } from 'react';
import * as ShowsAPI from '../ShowsAPI';
import ShowsGrid from './ShowsGrid';
import '../css/App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      popularShows: [],
    }
  }

  componentDidMount() {
    ShowsAPI.getPopular()
    .then(response => {
      this.setState({popularShows: response})})
  }

  render() {
    const {popularShows} = this.state
    console.log(popularShows)

    return (
      <div className="App">
        <ShowsGrid shows={popularShows}/>
      </div>
    );
  }
}

export default App;
