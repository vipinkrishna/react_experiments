import React, { Component } from 'react';
import { render } from 'react-dom';

import { Home } from "./components/Home";

class App extends Component {
  constructor() {
    this.age = 55;
  }

  onSayHello() {
    alert("Hello!");
  }

  render() {
    return (
      <div>
        <Home name={"Ronaldo"} age={this.age} greet={this.onSayHello} />
      </div>
    );
  }
}

export default App;