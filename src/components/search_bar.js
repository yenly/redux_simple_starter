import React, { Component } from 'react';

// ES6 class based component
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' }; // only done this way in constructor method
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}

export default SearchBar;
