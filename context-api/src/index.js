// CONTEXT API
// https://github.com/vipinkrishna


import React, { Component } from 'react'
import {render} from 'react-dom';

const ContextApi = React.createContext();


class App extends Component {
  render() {
    return (
      <div>
        <ContextApi.Provider value={{text: "INDIA"}}>
          <Child/>
        </ContextApi.Provider>
        <TestComponent/>
      </div>
    );
  }
}


const TestComponent = (props) => {
  return (
      <ContextApi.Consumer>
        {obj => console.log(obj)}
      </ContextApi.Consumer>
  );
}

const Child = (props) => {
  return (
    <div>
      <ContextApi.Consumer>
        {obj => console.log(obj)}
      </ContextApi.Consumer>
      <ChildChild/>
    </div>
    );
}


const ChildChild = (props) => {
  return (
    <ContextApi.Consumer>
      {text => <Button text={text.text}/>}
    </ContextApi.Consumer>
  );
}

const Button = (props) => {
  return (
    <button>{props.text}</button>
  );
}


var container = document.querySelector('#container');
render(<App/>, container);