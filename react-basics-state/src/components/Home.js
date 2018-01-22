import React from "react";

export class Home extends React.Component {
  constructor(property) {
    this.age = property.age;
    // console.log(property); //TEST
  }
  onMakeOlder() {
    this.age += 3;
    console.log(this.age);
  }

  render() {
    const age = this.age + 1;
    // console.log(this); //TEST
    return (
      <div>
        <h3>Hello {this.props.name}!</h3>
        <p>You're almost {age}</p>
        <button onClick={this.onMakeOlder.bind(this)}>Make me older!</button>
        <hr />
        <button onClick={this.props.greet}>Greet me!</button>
      </div>
    );
  }
}