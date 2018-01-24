import React, { Component } from 'react';
import { render } from 'react-dom';


class Child extends Component {
  render() {
    return (
      <div>
        CHILD: {this.props.name}
      </div>
    );
  }
}

const Brother = ({ name: BrotherName, details: Brother, mob:mobile, land: landline, ...subjects }) => (
  <div>
    BROTHER: {BrotherName}<br />
    PLACE: {Brother.place}<br />
    GENDER: {Brother.gender}<br />
    PHYSICS:{subjects.physics}<br />
    CHEMISTRY:{subjects.chemistry}<br />
    BIOLOGY:{subjects.biology}<br />
    MATHS:{subjects.maths}<br />
    MOBILE:{mobile}<br />
    LANDLINE:{landline}<br />
  </div>
)

class App extends Component {
  render() {
    var details = {place:"Kasaragod", gender:"Male"};
    var phone = {mob:"9293874923", land:"0029348733432"};
    return (
      <div>
        PARENT: Bahubali
        <Child name="Jarvis" />
        <Brother name="Olonga" details={details} physics={33} chemistry={34} biology={50} maths={49} {...phone}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
