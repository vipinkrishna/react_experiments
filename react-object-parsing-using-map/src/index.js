import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    this.state = {
      person: { name: "lullubi", address: { city: "kullulu", phone: "9778797987" } }
    };
  }

  render() {
    return (
      <div>
        {Object.keys(this.state.person).map((v) => (<div>{[v,": ",JSON.stringify(this.state.person[v]),<br />]}</div>))}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
