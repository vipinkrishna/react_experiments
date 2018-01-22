import React from "react";

export class Home extends React.Component {
  constructor(props) {
    this.state = {
      age: props.initialAge,
      status: 0,
      homeLink: props.initialLinkName
    };

    this.x = 1;

    this.timer = setInterval(() => {
      this.setState({
        status: ((this.state.status == 0) ? 1 : 0)
      });
      if (this.x >= 10) {
        clearInterval(this.timer);
      }
      this.x++;
    }, 1000);
  }


  onMakeOlder() {
    this.setState({
      age: this.state.age + 3
    });
    console.log(this);
  }

  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }

  onHandleChange(event) {
    this.setState({
      homeLink: event.target.value
    });
  }

  render() {
    return (
      <div>
        <p>In a new Component!</p>
        <p>Your name is {this.props.name}, your age is {this.state.age}</p>
        <p>Status: {this.state.status}</p>
        <hr />
        <button onClick={() => this.onMakeOlder()}>Make me older!</button>
        <hr />
        <button onClick={this.props.greet}>Greet</button>
        <hr />
        <input type="text" value={this.state.homeLink}
          onChange={(event) => this.onHandleChange(event)} />
        <button onClick={this.onChangeLink.bind(this)}>Change Header Link</button>
      </div>
    );
  }
}
