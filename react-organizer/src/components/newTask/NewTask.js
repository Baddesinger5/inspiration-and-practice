import React from 'react';
import './NewTask.css';


export default function NewTask({titleValue, setTitleValue, shortDescValue, setShortDescValue, textArea, setTextArea, allTasks, setAllTasks, setCloseModal, setConfirmTask, setValidate}) {
    
    function closeModalBtn() {
        setCloseModal(false)
    }

    function titleValueChange(e) {
        setTitleValue(e.target.value);
    }
    function shortDescValueChange(e) {
        setShortDescValue(e.target.value);
    }
    function textareaValueChange(e) {
        setTextArea(e.target.value);
    }

    function createNewTask() {

        let date = new Date();
        let monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let setMonthName = date.getMonth();

        if (titleValue.trim() === ''|| shortDescValue.trim() === '' || textArea.trim() === '') {
            setCloseModal(null);
            setConfirmTask(null);
            setValidate(true);

        } else {
            setCloseModal(true);
            setValidate(false);

            setAllTasks([
                ...allTasks,
                {
                    title: titleValue, 
                    shortDesc: shortDescValue, 
                    desc: textArea, 
                    id: Math.random() * 100000,
                    time: {
                        year: date.getFullYear().toString(),
                        month: monthArray[setMonthName],
                        day: date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
                        hour: date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
                        minute: date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
                    }
                }
            ])
            setConfirmTask(true);
            setCloseModal(false)
            setTitleValue('');
            setShortDescValue('');
            setTextArea('');
        }  
    }

    return (
        <div className="newTask-wrapper">
            
            <div className="new-task">
                <h1 className="newTask-title">NewTask</h1>

                <div className="inputs-wrapper">
                    <input value={titleValue} onChange={titleValueChange} type="text" placeholder="Yout title here..."/>
                    <input value={shortDescValue} onChange={shortDescValueChange} type="text" placeholder="Yout short description here..."/>
                    <textarea value={textArea} onChange={textareaValueChange} type="text" placeholder="Yout description here..."></textarea>
                    <button onClick={createNewTask} type="submit" className="add-btn">Add new task</button>
                </div>

                <button onClick={closeModalBtn} className="close-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
                </button>
            </div>

        
        </div>
    )
}