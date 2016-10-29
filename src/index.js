import React from 'react';
import ReactDOM from 'react-dom';

// Create new component. This component should produce some HTML
const App = () => { // ES6 way of defining a function; same as function ()
  return <div>Hi</div>;
}

// Take this component's generated HTML and put it
// on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));
