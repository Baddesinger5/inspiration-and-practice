import React from 'react';
import './Todo.css';

export default function Todo({text, todo, todos, setTodos}) {

    const styleTodo = {
        display: 'flex',
        alignItems: 'center'
    }

    function deleteHandler() {
        setTodos(todos.filter(function(el){
            return el.id !== todo.id;
        }))
    }
    function completeHandler() {
        setTodos(todos.map(function(item) {
            if (item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item
        }))
    }
    return (
        <div style={styleTodo} className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
            <button onClick={completeHandler}>got it</button>
            <button onClick={deleteHandler}>delete</button>
        </div>
    )
}