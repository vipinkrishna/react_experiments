import React from "react";
import { BrowserRouter, Link, Route } from 'react-router-dom';

const Home = () => (
  <div>
    <hr />
    <h1>/</h1>
    <Link to='/'>/</Link>
    <hr />
  </div>
)

const About = () => (
  <div>
    <hr />
    <h1>/ABOUT</h1>
    <Link to='/'>/</Link>
    <hr />
  </div>
)

const Frameworks = () => (
  <div>
    <hr />
    <h1>/FRAMEWORKS</h1>
    <Link to='/'>/</Link>
    <hr />
  </div>
)

const FrameworksSlash = () => (
  <div>
    <hr />
    <h1>/FRAMEWORKS/</h1>
    <Link to='/'>/</Link>
    <hr />
  </div>
)

const Angular = () => (
  <div>
    <hr />
    <h1>/FRAMEWORKS/ANGULAR</h1>
    <Link to='/'>/</Link>
    <hr />
  </div>
)

const Vue = () => (
  <div>
    <hr />
    <h1>/FRAMEWORKS/VUE</h1>
    <Link to='/'>/</Link>
    <hr />
  </div>
)

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to='/'>/</Link><br />
          <Link to='/about'>/ABOUT</Link><br />
          <Link to='/frameworks'>/FRAMEWORKS</Link><br />
          <Link to='/frameworks/'>/FRAMEWORKS/</Link><br />
          <Link to='/frameworks/angular'>/FRAMEWORKS/ANGULAR</Link><br />
          <Link to='/frameworks/vue'>/FRAMEWORKS/VUE</Link><br />
          <Route path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/frameworks' component={Frameworks} />
          <Route path='/frameworks/' component={FrameworksSlash} />
          <Route path='/frameworks/angular' component={Angular} />
          <Route path='/frameworks/vue' component={Vue} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;