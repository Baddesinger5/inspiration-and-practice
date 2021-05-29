import React, {useState, useEffect} from 'react';
import './App.css'
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  function filterHandler() {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
    }
  }

  useEffect(() => {
    getLocalTodos();
  }, [])

  useEffect(() => {
    saveLocalTodos();
    filterHandler();
  }, [todos, status]);

  
  function saveLocalTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  function getLocalTodos() {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let localTodo = JSON.parse(localStorage.getItem('todos'));
      setTodos(localTodo)
    }
  }
    
  return (
    <div className="app-component-wrapper">
    
      <Form 
          inputText={inputText} 
          todos={todos} 
          setTodos={setTodos} 
          setInputText={setInputText}
          setStatus={setStatus}/> 

      <ToDoList 
            setTodos={setTodos} 
            todos={todos}
            filteredTodos={filteredTodos}
            />
      </div>
  );
}

export default App;
