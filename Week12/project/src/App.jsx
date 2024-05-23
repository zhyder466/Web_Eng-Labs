import React, { useState } from 'react';
import './index.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');
  const [todoStatus, setTodoStatus] = useState('Backlog');

  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      setTodos([...todos, { text: todoText, status: todoStatus }]);
      setTodoText('');
    }
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const groupedTodos = todos.reduce((acc, todo) => {
    acc[todo.status] = [...(acc[todo.status] || []), todo];
    return acc;
  }, {});

  return (
    <div className="todo-list-container">
      <h1>Hyder's Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Enter todo item"
          className="todo-input"
        />
        <select value={todoStatus} onChange={(e) => setTodoStatus(e.target.value)} className="status-select">
          <option value="Backlog">Backlog</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button onClick={handleAddTodo} className="add-button">Add Item</button>
      </div>
      <hr />
      <div className="todos-container">
        {Object.keys(groupedTodos).map((status, index) => (
          <div key={index}>
            <h2>{status}</h2>
            {groupedTodos[status].map((todo, todoIndex) => (
              <div key={todoIndex} className="todo-item">
                <span>{todo.text}</span>
                <button onClick={() => handleDeleteTodo(todoIndex)} className="delete-button">❌</button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
