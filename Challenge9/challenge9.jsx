import React, { useState } from 'react';

// Component 1: TodoForm
const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

// Component 2: TodoItem
const TodoItem = ({ todo }) => <div className="todo">{todo.text}</div>;

// Component 3: TodoList
const TodoList = ({ todos }) => (
  <div className="todo-list">
    {todos.map((todo, index) => (
      <TodoItem key={index} index={index} todo={todo} />
    ))}
  </div>
);

// Main TodoApp component
const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-app">
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default TodoApp;
