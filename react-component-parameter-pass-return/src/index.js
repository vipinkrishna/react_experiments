import React, { Component } from 'react';
import { render } from 'react-dom';



class ClassComponent extends Component {
  render() { return <div>INDIA IS MY COUNTRY</div> }
}

const FunctionComponent = () => <div>INDIA IS MY COUNTRY</div>;

// const App = Comp(function () { return React.createElement('div', null, 'INDIA IS MY COUNTRY') }); //WORKS
// const App = Comp(()=>("INDIA IS MY COUNTRY")); //WORKS
// const App = Comp("OOPS!"); //NOT WORKS
// const App = Comp(FunctionComponent); //WORKS
// const App = Comp(ClassComponent); //WORKS

var Comp = Parameter => Parameter;

var Dummy = Parameter => () => Parameter;

// const App = Dummy("NOW WORKS!"); //WORKS
// const App = FunctionComponent //WORKS

// const App = <ClassComponent /> //NOT WORKS
// const App = () => <ClassComponent /> //WORKS

// const App = "CRICKET" //NOT WORKS
const App = ()=>"CRICKET" //WORKS

render(<App />, document.getElementById('root'));
