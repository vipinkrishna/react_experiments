import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [
        {
          component: 'First',
          id: 1
        },
        {
          component: 'Second',
          id: 2
        },
        {
          component: 'Third',
          id: 3
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <div>
          {this.state.data.map((dynamicComponent, i) => <Content key={i} componentData={dynamicComponent} />)}
        </div>
      </div>
    );
  }
}



class Content extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div>{this.props.componentData.component}</div>
        <div>{this.props.componentData.id}</div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
