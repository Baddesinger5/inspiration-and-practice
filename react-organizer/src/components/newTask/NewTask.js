import React from 'react';
import './NewTask.css';


export default function NewTask({titleValue, setTitleValue, shortDescValue, setShortDescValue, textArea, setTextArea, allTasks, setAllTasks, setCloseModal, setConfirmTask, setValidate}) {
    
    function closeModalBtn() { //функция для закрытия окна создания (крестик)
        setCloseModal(false)   //тут устанавливаем значение для "закрыть"
    }

    function titleValueChange(e) { // тут мы прослушиваем изменения и меняем стейт с каждым изменением
        setTitleValue(e.target.value); //для названия
    }
    function shortDescValueChange(e) {// тут мы прослушиваем изменения и меняем стейт с каждым изменением
        setShortDescValue(e.target.value); //для короткого названия
    }
    function textareaValueChange(e) {// тут мы прослушиваем изменения и меняем стейт с каждым изменением
        setTextArea(e.target.value); //для текста
    }

    function createNewTask() { //тут функция для создания нового элемента в стейте

        let date = new Date(); //получаем объект даты
        let monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; //именнованные месяцы 
        let setMonthName = date.getMonth(); //переменная для получения из даты - месяца

        if (titleValue.trim() === ''|| shortDescValue.trim() === '' || textArea.trim() === '') { //легкая валидация для пустых полей - если какое-то из полей пустое, то
            setCloseModal(null); //закрываем окно создания таска
            setConfirmTask(null); //убираем окно с подтверждением о создании таска, т.к. мы нажимаем на кнопку "создать таск"
            setValidate(true); //показываем варнинг, что надо заполнить все

        } else { //иначе
            setCloseModal(true); // тут обратно показываем окно создания такса
            setValidate(false);//закрываем варнинг с "заполнить все поля"

            setAllTasks([ //в стейт закидываем
                ...allTasks, // разворачиваем все таски что там есть
                { // а далее создаем новый
                    title: titleValue, //который принимает какие-то поля
                    shortDesc: shortDescValue, 
                    desc: textArea, 
                    id: Math.random() * 100000, //рандомный айди
                    time: { //вреемя
                        year: date.getFullYear().toString(), //год
                        month: monthArray[setMonthName], //именнованный месяц
                        day: date.getDate() < 10 ? '0' + date.getDate() : date.getDate(), //условия для отображения с нулем
                        hour: date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
                        minute: date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
                    }
                }
            ])
            setConfirmTask(true); //показываем окно, которое подтверждаем что мы создали таск
            setCloseModal(false) //закрываем окно создания такса
            setTitleValue(''); //сбрасываем все поля внутри окна создания тасков
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
//ну и тут мы присваиваем функции которые создали