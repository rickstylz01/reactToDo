import React from "react";
import './App.css';

function Todo({ todo, index, completeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  // Sets the state's name (value) and defaults it to an empty string
  const [value, setValue] = React.useState("");

  // event function to handle when a new task is submitted
  const handleSubmit = e => {
    e.preventDefault();
    // if the value is empty it doesnt add the task and resets to empty an string
    if (!value) return;
    addTodo(value);
    // after adding the new task, it resets to an empty string
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
  // name and set the state with React's useState hook
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

  // Takes the list of todos, by index, and sets their isCompleted state to true
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  // Takes the list of todos and their text and adds them to the list of todos
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
              completeTodo={completeTodo}
            />
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
    </div>
  );
}

export default App;
