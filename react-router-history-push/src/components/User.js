import React from "react";
export class User extends React.Component {
  render() {
    return (
      <div>
        <h3>THE USER PAGE</h3>
        <p>USER ID: {this.props.match.params.id}</p>
        <button onClick={()=>{this.props.history.push("/home")}}>GO HOME!</button>
      </div>
    );
  }
}
