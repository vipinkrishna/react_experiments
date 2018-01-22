import React from "react";
import Home, {Java} from "./components/component";


class Php extends React.Component {
  constructor(property) {
    this.x = property.what;
  }
    render() {
        return (
            <div>
                PHP{this.props.what}{this.x.toUpperCase()}
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Php what = " Programming"/>
            </div>
        );
    }
}
export default App;

