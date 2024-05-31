import React, { useState } from 'react';

// Custom Hook: useTodo
const useTodo = (initialState = []) => {
  const [todos, setTodos] = useState(initialState);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isDone: false }];
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos);
  };

  const countTodos = () => todos.length;

  const countPendingTodos = () => todos.filter((todo) => !todo.isDone).length;

  return { todos, addTodo, deleteTodo, toggleTodo, countTodos, countPendingTodos };
};

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
const TodoItem = ({ todo, index, toggleTodo, deleteTodo }) => (
  <div className="todo">
    <span style={{ textDecoration: todo.isDone ? 'line-through' : '' }} onClick={() => toggleTodo(index)}>
      {todo.text}
    </span>
    <button onClick={() => deleteTodo(index)}>Delete</button>
  </div>
);

// Component 3: TodoList
const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
  <div className="todo-list">
    {todos.map((todo, index) => (
      <TodoItem key={index} index={index} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    ))}
  </div>
);

// Main TodoApp component
const TodoApp = () => {
  const { todos, addTodo, deleteTodo, toggleTodo, countTodos, countPendingTodos } = useTodo();

  return (
    <div className="app">
      <div className="todo-app">
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        <div>Total todos: {countTodos()}</div>
        <div>Pending todos: {countPendingTodos()}</div>
      </div>
    </div>
  );
};

export default TodoApp;
