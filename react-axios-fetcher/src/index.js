import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

class App extends Component {
  render() {
    return (
      <div>
        Press F12 to open CONSOLE
      </div>
    );
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/albums").then(RES => { console.log(RES.data) }, ERR => { console.log(ERR) })
  }
}

render(<App />, document.getElementById('root'));
