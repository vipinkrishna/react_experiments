import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  state = { name: 'React' };

  render() {
    return (
      <div>
        {this.state.name}<br />
        <button onClick={() => this.setState({ name: "REACT" })}>Update State</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
