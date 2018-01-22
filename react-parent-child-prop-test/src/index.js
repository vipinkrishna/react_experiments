import React, { Component } from 'react';
import { render } from 'react-dom';

class Child extends Component {
  constructor(propy) {
    console.log(propy.place);
  }

  render() {
    console.log(this.props.place);
    return (
      <div>
        <h1>CHILD: {this.props.place}</h1>
      </div>

    )
  }
}

class Parent extends Component {
  constructor(property) {
    console.log(property.name);
  }

  render() {
    console.log(this.props.name);
    return (
      <div>
        <h1>PARENT: {this.props.name}</h1>
        <Child place="SOUTH AFRICA" />
      </div>
    );
  }
}

render(<Parent name="INDIAN CRICKET TEAM" />, document.getElementById('root'));
