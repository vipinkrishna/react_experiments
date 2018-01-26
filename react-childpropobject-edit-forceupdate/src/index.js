import React, { Component } from 'react';
import { render } from 'react-dom';



class Child extends Component {

  update = () => {
    this.props.person.name = "Java";
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        {JSON.stringify(this.props.person)}&nbsp;
        <button onClick={this.update}>UPDATE</button>
      </div>
    );
  }
}


class Parent extends Component {
  constructor() {
    this.state = {
      person: { name: 'React' }
    };
  }

  render() {
    return (
      <div>
        <Child person={this.state.person} />
      </div>
    );
  }
}

render(<Parent />, document.getElementById('root'));
