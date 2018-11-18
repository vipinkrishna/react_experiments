// https://github.com/vipinkrishna

import React, {useState} from 'react';
import './App.css';

const inputAddTodoRef = React.createRef();


//TODO
function Todo({index, todo, doneTodo, deleteTodo}) {
  return (
    <div style={todo.isCompleted ? {textDecoration: 'line-through', color: 'blue'} : {textDecoration: 'none', color: 'black'}} className="todo" onClick={() => doneTodo(index)}>
      {todo.text}
      <div>
        <button className="button delete" onClick={(e) => {e.stopPropagation();return deleteTodo(index)}}>x</button>
      </div>
    </div>
  )
}


//ADD TODO
function AddTodo({addTodo}) {
  const [value, setValue] = useState(['']);

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" value={value} placeholder="Add..." onChange={e => setValue(e.target.value)} autoFocus ref={inputAddTodoRef} maxLength="60" />
    </form>
  );
}


//APP
function App() {
  const [todos, setTodos] = useState([
    {
      text: 'React Hooks by https://github.com/vipinkrishna',
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted: false}];
    setTodos(newTodos);
  }

  const doneTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  }

  const deleteTodo = index => {
    let newTodos = [...todos];
    // newTodos.filter(function(todo, i) {return (i !== index) });  //CHECK THIS!
    newTodos.splice(index, 1);
    setTodos(newTodos);
    // inputAddTodoRef.current.select();
    // inputAddTodoRef.current.focus();
  }

  return (
    <div className="app">
      <div className="todo-list">
      <h2 className="appTitle">The Reminder</h2>
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} doneTodo={doneTodo} deleteTodo={deleteTodo} />
        ))}
        <AddTodo addTodo={addTodo}/>
      </div>
    </div>
  );
}

export default App;