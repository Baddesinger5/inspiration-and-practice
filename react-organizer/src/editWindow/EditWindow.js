import React from 'react';
import './EditWindow.css';

export default function EditWindow({modalData, setModalsData, allTasks, setEditWindow, setAllTasks, newTitleValue, setNewTitleValue, newShortDescValue, setNewShortDescValue, newTextArea, setNewTextArea, setEditWarning}) {

    function showEditWindow() { //функция для закрытия окна редактирования (опять надо бы переименовать с show на close)
        setEditWindow(false) //меняем стейт
    }

    function setNewtitle(e) { //как и создании такса, слушаем изменения в инпутах
        setNewTitleValue(e.target.value) //закидываем в новый стейт для прослушки
    } 

    function setNewShortDesc(e) {//как и создании такса, слушаем изменения в инпутах
        setNewShortDescValue(e.target.value)//закидываем в новый стейт для прослушки
    }
     
    function setNewText(e) {//как и создании такса, слушаем изменения в инпутах
        setNewTextArea(e.target.value)//закидываем в новый стейт для прослушки
    } 

    function editingTask() { //редактируем
        let date = new Date(); //оставляем тут дату (поменятся если отредачить такс)
        let monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let setMonthName = date.getMonth(); 

        setAllTasks(allTasks.map(function(item) { //тут мы меняем стейт с нашими исходными тасками, и перебираем его
            
            if (item.id === modalData.id) { //если у перебранного элемента и инфы справа равный айди
                return {
                    ...item, //мы разворачиваем тут же этот перебарнный жлемент
                    title: newTitleValue.trim() === '' ? item.title : newTitleValue, //если поле пустое (не отредачено) мы оставляем исходный тайтл, иначе берем новый
                    shortDesc: newShortDescValue.trim() === '' ? item.shortDesc : newShortDescValue, //так же с которким описанием
                    desc: newTextArea.trim() === '' ? item.desc : newTextArea, //и текстом
                    time: { //дату так же оставляем
                        year: date.getFullYear().toString(),
                        month: monthArray[setMonthName],
                        day: date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
                        hour: date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
                        minute: date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
                    }
                }
            }  
            return item   //не забываем вернуть по итогу наш перебранный элемент     
        }))

        setNewTitleValue(''); //очищаем поля
        setNewShortDescValue('');
        setNewTextArea('');    
        showEditWindow(false); //закрываем окно редактирования
        setModalsData(null); //закрываем правую часть
        setEditWarning(true); //показываем окно, что мы отредактировали такс
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
//раскидываем все по кнопкам и инпутам