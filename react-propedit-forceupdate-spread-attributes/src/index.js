import React, { Component } from 'react';
import { render } from 'react-dom';



class Child extends Component {

  update = () => {
    this.props.person.planet = "Alien";
    this.props.person.galaxy = "Andromeda";
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
      person: { planet: 'Earth', galaxy: 'Milkyway' }
    };
  }

  render() {
    return (
      <div>
        <Child {...this.state} />
      </div>
    );
  }
}

render(<Parent />, document.getElementById('root'));
