import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends Component {
   render() {
      return (
         <div>
            <ReactCSSTransitionGroup transitionName = "example"
               transitionAppear = {true} transitionAppearTimeout = {500}
               transitionEnter = {false} transitionLeave = {false}>
               <h1>INDIA</h1>
            </ReactCSSTransitionGroup>
         </div>      
      );
   }
}

render(<App />, document.getElementById('root'));
