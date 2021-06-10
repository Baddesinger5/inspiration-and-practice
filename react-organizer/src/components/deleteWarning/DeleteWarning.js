import React from 'react';
import './DeleteWarning.css';

export default function DeleteWarning({modalData, setModalsData, setWarning, setAllTasks, allTasks}) {

    function deleteTask() {
        setAllTasks(allTasks.filter(function(item) {
            return item.id !== modalData.id;
        }))
        setModalsData(null);
        setWarning(false);          
    }

    function closeWarning() {
        setWarning(false)
    }

    return (
        <div className="warning-wrapper">
            <h1 className="warning-title">Do you really want to delete the task?</h1>

            <div className="warning_buttons-wrapper">
                <button className="yes-btn" onClick={deleteTask}>Yes</button>
                <button className="no-btn" onClick={closeWarning}>No</button>
            </div>
        </div>
    )
}