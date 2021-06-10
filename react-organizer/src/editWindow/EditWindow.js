import React from 'react';
import './EditWindow.css';

export default function EditWindow({modalData, setModalsData, allTasks, setEditWindow, setAllTasks, newTitleValue, setNewTitleValue, newShortDescValue, setNewShortDescValue, newTextArea, setNewTextArea, setEditWarning}) {

    function showEditWindow() {
        setEditWindow(false)
    }

    function setNewtitle(e) {
        setNewTitleValue(e.target.value)
    } 

    function setNewShortDesc(e) {
        setNewShortDescValue(e.target.value)
    }
     
    function setNewText(e) {
        setNewTextArea(e.target.value)
    } 

    function editingTask() {
        let date = new Date();
        let monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let setMonthName = date.getMonth();

        setAllTasks(allTasks.map(function(item) {
            
            if (item.id === modalData.id) {
                return {
                    ...item,
                    title: newTitleValue.trim() === '' ? item.title : newTitleValue, 
                    shortDesc: newShortDescValue.trim() === '' ? item.shortDesc : newShortDescValue, 
                    desc: newTextArea.trim() === '' ? item.desc : newTextArea, 
                    time: {
                        year: date.getFullYear().toString(),
                        month: monthArray[setMonthName],
                        day: date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
                        hour: date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
                        minute: date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
                    }
                }
            }  
            return item          
        }))

        setNewTitleValue('');
        setNewShortDescValue('');
        setNewTextArea('');    
        showEditWindow(false);
        setModalsData(null);
        setEditWarning(true);
    }

    return(
        <div className="edit_window-wrapper">
            <h1 className="edit_window-title">Edit your task</h1>

            <div className="inputs-wrapper">
                <label for="new-title">New title:</label>
                <input onChange={setNewtitle} className="edit-title" placeholder="New title here..." id="new-title"/>
            
                <label for="new-shotDesc">New short description:</label>
                <input onChange={setNewShortDesc} className="new-shotDesc" placeholder="New title here..." id="new-shotDesc"/>
            
                <label for="new-textarea">New text:</label>
                <textarea onChange={setNewText} className="new-textarea" id="new-textarea"></textarea>
            </div>
            
            <div className="edit-window-btns">
                <button className="save-btn" onClick={editingTask}>Save</button>
                <button className="cancel-btn" onClick={showEditWindow}>Cancel</button>
            </div>
        </div>
    )
}