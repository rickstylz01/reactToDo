import React from "react";
import './App.css';

function Todo({ todo }) {
  return (
    <div className="todo">
      {todo.text}
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return(
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}

function App() {
  const [todos, setTodos] = React.useState([
    { text: "Learn about React",
      isCompleted: false
    },
    { text: "Meet friend for lunch",
      isCompleted: false
    },
    { text: "Build really cool todo app",
      isCompleted: false
    },
  ]);

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
  }


  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  }

  return (
    <div className="App">
        <div className="todo-list">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
            />
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
    </div>
  );
}

export default App;
