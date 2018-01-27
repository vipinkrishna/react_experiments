import React, { Component } from 'react';
import { render } from 'react-dom';


var DataSource = { data: 'HOC data' }


var HOC = Parameter => class extends Component {
  render() {
    return <Parameter {...this.state} />;
  }
  componentDidMount() {
    this.setState({ data: DataSource.data });
  }
}


class Parent extends Component {
  render() {
    return (<div><h1>PARENT</h1>PROPS: {this.props.data}</div>);
  }
}


const App = HOC(Parent);


render(<App />, document.getElementById('root'));
