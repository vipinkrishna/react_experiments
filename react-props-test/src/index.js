import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Earth from './Earth';

class App extends Component {
  render() {
    return (
      <div>
        <Hello name={"World"} />
        <Earth name={"Earth"} />

      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
