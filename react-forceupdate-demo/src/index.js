import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends React.Component {
   constructor() {
      super();
      this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
   }
   
   forceUpdateHandler() {
      this.forceUpdate();
   }

   render() {
      return (
         <div>
            <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
            <h4>Random number: {Math.random()}</h4>
         </div>
      );
   }
}

render(<App />, document.getElementById('root'));
