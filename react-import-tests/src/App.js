import React from "react";
import { Print, Output } from './components/import';
import Angular from './components/import';

class App extends React.Component {
  render() {
    return (
      <div>
        {Print("Sachin")}
        <br />
        {Print()}
        <br />
        {Print(123)}
        <br />
        <Output />
        <br />
        {Output()}
        <br />
        {Angular.io("is awesome!")}
        <br />
      </div>
    );
  }
}

export default App;