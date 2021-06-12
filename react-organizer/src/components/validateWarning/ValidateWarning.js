import React from 'react';
import './ValidateWarning.css';

export default function ValidateWarning({setValidate, setCloseModal}) {

    function showValidate() { //функция для закрытия окна "запонить все поля" (надо было назвать не showValidate, a closeValidate)
        setValidate(false);  //закрываем окно валидации
        setCloseModal(true) //открываем обратно окно создания таска
    }

    return (
        <div className="validate_warning-wrapper">
            <h1 className="validate-title">Fill in all inputs!</h1>

            <div className="validate-btn-wrapper">
                <button className="validate-btn" onClick={showValidate}>Ok</button>
            </div>
        </div>
    )
}

//по кнопке зазкрываем окно валидации