import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBD5drlqpKAx4sR_RsbHZ8WVAQaIpld7R0';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

	  YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
		  this.setState({ videos });
	  });
  }

  render() {
		return (
			<div>
				<SearchBar />
			</div>
		);
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
