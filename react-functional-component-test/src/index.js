import React from 'react';
import { render } from 'react-dom';

// CHILD CLASS COMPONENT (STATELESS)

function Child({ name, children }) {
  return ([
    console.log("*CHILD THIS* ", window),
    console.log("*CHILD THIS.PROPS.name* ", name),
    console.log("*CHILD THIS.PROPS.CHILDREN* ", children)
  ]);
}



// PARENT CLASS COMPONENT (STATELESS)
function Parent() {

  let RENIINPUT = null;
  function onClickHandler() {
    return ([
      // this.refs.RENITXT.focus()
      this.RENIINPUT.focus(),
      console.log(this)
    ]);
  }

  return ([
    <input type="text" ref={(reference) => (window.RENIINPUT = reference)} />,
    <input type="button" value="Focus" onClick={onClickHandler.bind(window)} />,
    console.log("*PARENT THIS* ", window),
    <Child name="props here...">CHILDREN HERE...</Child>
  ]);
  // Cant use 'ref' in STATELESS component
  // Pure Javascript can be used inside '[]' (without '{}'), use COMMA to seperate each item
}

render(<Parent />, document.getElementById('root'));