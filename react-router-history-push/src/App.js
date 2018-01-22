import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { User } from "./components/User";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path={"/"} component={Root} />
                    <Route path={"/home"} component={Home} />
                    <Route path="/user/:id" component={User} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

