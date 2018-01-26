import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

class App extends React.Component {
   constructor() {
      super();
      this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
   };
   findDomNodeHandler() {
      var myDiv = document.getElementById('myDiv');
      // ReactDOM.findDOMNode(myDiv).style.color = 'green';
      myDiv.style.color = 'red';
   }
   render() {
      return (
         <div>
            <button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
            <div id = "myDiv">NODE</div>
         </div>
      );
   }
}

render(<App />, document.getElementById('root'));
