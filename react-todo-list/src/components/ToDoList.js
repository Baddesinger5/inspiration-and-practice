import React from 'react';
import Todo from './Todo';

export default function ToDoList({todos, setTodos, filteredTodos}) {

    return (
        <div className="todo-list-wrapper">
            <ul>
                {filteredTodos.map(function(todo) {
                    return (
                        <Todo todo={todo} setTodos={setTodos} todos={todos} text={todo.text} key={todo.id}/>
                    ) 
                })}
            </ul>
        </div>
    )
}