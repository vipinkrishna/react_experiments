import React, { Component } from 'react';
import { render } from 'react-dom';

class Parent extends React.Component {
  constructor() {
    this.state = { data: '' }
  };
  updateStateFn(e) {
    this.setState({ data: e.target.value });
  }
  render() {
    return (
      <div>
        <Child stateProp={this.state.data} updateStateFnProp={this.updateStateFn} that={this} />
      </div>
    );
  }
}





class Child extends React.Component {
  constructor() {
    this.state = { data: '' }
  }

  two = (e) => {
    this.props.updateStateFnProp.bind(this)(e);
    this.props.updateStateFnProp.bind(this.props.that)(e);
  }
  render() {
    return (
      <div>
        <input type="text" value={this.props.stateProp} onChange={this.two} />
        <h3>Parent State: {this.props.stateProp}</h3>
        <h3>Child State: {this.state.data}</h3>
      </div>
    );
  }
}

render(<Parent />, document.getElementById('root'));
