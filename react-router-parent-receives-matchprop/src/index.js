import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';


class App extends Component {
  constructor() {
    this.state = { receivedprop: null };
  }

  viewx = (parameter) => {
    if (this.state.receivedprop != parameter) {
      this.setState({ receivedprop: parameter });
    }
  }

  render() {
    console.log(this);
    return (
      <div>
        <h1>{this.state.receivedprop} REACT ROUTER</h1>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={() => <div>Please append /user to URL</div>} />
            <Route path="/users" component={(match) => <UsersPage viewx={this.viewx} {...match} />} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

const UsersPage = (props) => {
  props.viewx(props.match.url);
  return (<div>{props.match.url} USERS PAGE </div>);
}

render(<App />, document.getElementById('root'));
