import React, { Component } from 'react';
import { render } from 'react-dom';

var Parent = Parameter => class extends Component {
  render() {
    return <Parameter />;
  }
}

var Child = class extends Component {
  render() {
    return (<div><h1>Child Component</h1></div>);
  }
}

const App = Parent(Child);

render(<App />, document.getElementById('root'));
