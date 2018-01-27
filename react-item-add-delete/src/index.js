import React, { Component } from 'react';
import { render } from 'react-dom';


class App extends Component {

  constructor() {
    this.state = { items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'] }
    this.handleAdd = this.handleAdd.bind(this);
  };

  handleAdd() {
    var newItems = this.state.items;
    newItems.push(this.refs.input.value);
    this.refs.input.select();
    this.setState({ items: newItems });
  }

  handleRemove(i) {
    var newItems = this.state.items;
    newItems.splice(i, 1);
    this.setState({ items: newItems });
  }

  render() {
    var items = this.state.items.map((item, i) => (
      <div key={i} onClick={() => this.handleRemove(i)}>
        {item}
      </div>
    ));
    return (
      <div>
        <input ref="input" placeholder="Enter items.." onFocus={()=>this.refs.input.select()} />
        <button onClick={this.handleAdd}>Add Item</button>
        {items}
      </div>
    );
  }

}

render(<App />, document.getElementById('root'));
