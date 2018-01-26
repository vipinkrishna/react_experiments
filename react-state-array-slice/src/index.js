import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  constructor() {
    this.state = {
      data: []
    }

    this.setStateHandler = this.setStateHandler.bind(this);
  }

  setStateHandler() {
    var item = "java";  
    var myArray = this.state.data;
    myArray.push(item);
    this.setState({ data: myArray })
  }

  render() {
    return (
      <div>
        <button onClick={this.setStateHandler}>SET STATE</button>
        <h4>[{this.state.data.slice()}]</h4>
        <h4>[{this.state.data.toString()}]</h4>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
