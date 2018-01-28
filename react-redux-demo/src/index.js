import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';

//REDUCER FUNCTION
const reducer = (state = 9, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    default:
      return state;
  }
};

//STORE
var store = createStore(reducer);

//APP
const App = ({ value }) => {
  return (
    <div>
      <button onClick={() => { store.dispatch({ type: 'INC' }) }}>+</button>
      <div>{value}</div>
      <button onClick={() => { store.dispatch({ type: "DEC" }) }}>-</button>
    </div>
  )
};

const render = () => ReactDom.render(<App value={store.getState()} />, document.getElementById('root'));
render();

store.subscribe(render); //SUBSCRIBE