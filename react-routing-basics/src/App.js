import React from "react";
import { BrowserRouter as Switch, Link, Route } from 'react-router-dom';

const Home = () => (
    <div>
        <Link to='/about'>About </Link>
        <Link to='/frameworks'> Frameworks</Link>
        <h1>Home</h1>
    </div>
)

const About = () => (
    <div>
        <Link to='/'>Back</Link>
        <h1>About</h1>
    </div>
)

const Frameworks = () => (
    <div>
        <Link to='/'>Back</Link>
        <h1>Frameworks</h1>
        <Link to='/frameworks/angular'>Angular</Link><br />
        <Link to='/frameworks/vue'>Vue</Link>
    </div>
)

const Angular = () => (
    <div>
        <h1>Angular</h1>
    </div>
)

const Vue = () => (
    <div>
        <h1>Vue</h1>
    </div>
)

class App extends React.Component {
    render() {
        return (
            <Switch>
                <div>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/frameworks' component={Frameworks} />
                    <Route path='/frameworks/angular' component={Angular} />
                    <Route path='/frameworks/vue' component={Vue} />
                </div>
            </Switch>
        );
    }
}

export default App;