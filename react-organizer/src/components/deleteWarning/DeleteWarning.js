import React from 'react';
import './DeleteWarning.css';

export default function DeleteWarning({modalData, setModalsData, setWarning, setAllTasks, allTasks}) {

    function deleteTask() { //тут по кнопке мы удаляем таск
        setAllTasks(allTasks.filter(function(item) { //фильтруем стейст с тасками
            return item.id !== modalData.id; // если не совпадают айди то тогда удаляем таск
        }))
        setModalsData(null); //тут мы очищаем правую сторону нашего приложения
        setWarning(false);  //тут убираем наше окно с предупреждением        
    }

    function closeWarning() {
        setWarning(false) //по кнопке "нет" мы убираем наше предупреждение об удалении
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