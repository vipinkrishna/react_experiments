import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {

  render() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
}

App.defaultProps = {
name: "Default Props Example"
}

render(<App />, document.getElementById('root'));
