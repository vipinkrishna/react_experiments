import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  render() {
    var myStyle = {
      fontSize: 60,
      color: 'red',
      border: '2px solid blue',
      padding: '5px',
      width: '200px',
      height: '100px',
      textAlign: 'center',
      display: 'table-cell',
      verticalAlign: 'middle'
    }
    return (
      <div>
        <h1 style={myStyle}>Header</h1>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
