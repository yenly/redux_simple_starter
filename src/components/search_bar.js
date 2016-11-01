import React, { Component } from 'react';

// ES6 class based component
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' }; // only done this way in constructor method
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
