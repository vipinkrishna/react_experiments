import React, { Component } from 'react';
import { render } from 'react-dom';

var DataSource = { data: 'HOC data' }

class App extends Component {
  render() {
    console.log(this.state);//NULL //WORKS
    return (<div><h1>APP</h1></div>);
  }
  componentDidMount() {
    this.setState({ data: "STATE DATA" });
    console.log(this.state);//NULL
  }
}

render(<App />, document.getElementById('root'));
