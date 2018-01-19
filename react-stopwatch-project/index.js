
import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

//========================================================================================
//COPYLEFT 2018 VIPINKRISHNA (https://github.com/vipinkrishna) (+918943547260)
//========================================================================================

class App extends Component {

  constructor() {
    this.state = { laps: {}, counter: 0, speedCounter: 0 };
    this.temp = 0;
  }

  startstop = (e) => {
    if (e.target.innerHTML == "START") {
      e.target.innerHTML = "STOP";
      this.x = setInterval(() => {
        this.temp++;
        this.setState({ speedCounter: this.temp });
        if (this.temp == 10) {
          this.temp = 0;
          this.setState({ speedCounter: this.temp });
          this.setState({ counter: this.state.counter + 1 });
        }
      }, 100);
      this.refs.LAP.style.display = "table-cell";
    } else {
      clearInterval(this.x);
      e.target.innerHTML = "START";
      this.refs.LAP.style.display = "none";
    }
  }

  reset = (e) => {
    if (this.refs.STARTSTOP.innerHTML == "STOP") {
      clearInterval(this.x);
      this.refs.STARTSTOP.innerHTML = "START";
      this.refs.LAP.style.display = "none";
    }
    this.setState({ laps: {}, counter: 0, speedCounter: 0 });
  }

  Lap = (e) => {
    var timestamp = (new Date()).getTime(); //1515854502384
    var tlaps = this.state.laps;
    var tcounter = this.state.counter;
    tlaps['lap-' + timestamp] = ((tcounter > 9) ? tcounter : ("0" + tcounter)) + "." + this.state.speedCounter;
    this.setState({ laps: tlaps });
  }

  render() {
    return (
      <div className="fullview">
        <div id="parenttimer">
          <div id="child">
            {(this.state.counter > 9) ? this.state.counter : ("0" + this.state.counter)}.{this.state.speedCounter}
          </div>
        </div>
        <div id="parentbutton">
          <div id="child">
            <button onClick={this.startstop} ref="STARTSTOP">START</button>
            <button onClick={this.reset}>RESET</button>
          </div>
        </div>
        <div id="parentlap">
          <div id="child">
            <button onClick={this.Lap} ref="LAP">LAP</button>
          </div>
        </div>
        <LapList laps={this.state.laps} />
      </div>
    );
  }

  componentDidMount() {
    this.refs.LAP.style.display = "none";
  }
}

//========================================================================================

const LapList = (props) => (
  <div>
    <ul>
      {Object.keys(props.laps).map((k, i) => (<li><span>{((i + 1) > 9) ? (i + 1) : "0" + (i + 1)} <sup>LAP</sup></span>{props.laps[k]}</li>))}
    </ul>
  </div>
);

//========================================================================================

render(<App />, document.getElementById('root'));
