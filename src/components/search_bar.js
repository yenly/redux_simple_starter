import React, { Component } from 'react';

// ES6 class based component
class SearchBar extends Component {
  render() {
    return <input onChange={this.onInputChange} />;
  }

  onInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar;
