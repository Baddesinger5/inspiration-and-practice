import React from 'react';

export default function Form({setInputText, todos, setTodos, inputText, setStatus}) {

    function inputTextHandler(e) {
        setInputText(e.target.value)
    }

    function submitTodoHandler(e) {
        e.preventDefault();
        setTodos([
            ...todos,
            {text: inputText, completed: false, id: Math.random() * 1000}
        ]);

        setInputText('');
    }

    function statusHandler(e) {
        setStatus(e.target.value);
    }

    return (
        <div>
            <input value={inputText} onChange={inputTextHandler} type="text"/>
            <button onClick={submitTodoHandler} type="submit">Add</button>
            <select onChange={statusHandler}>
                <option value="all">All</option>
                <option value="completed">completed</option>
                <option value="uncompleted">uncompleted</option>
            </select>
        </div>
    )
}