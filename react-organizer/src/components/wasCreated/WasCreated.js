import React from 'react';
import './WasCreated.css';

export default function WasCreated({setConfirmTask}) {

    function closeConfirm() { //функция для закрытия окна подтверждения
        setConfirmTask(false) //тут меняем стейт
    }
    return (
        <div className="was_created-wrapper">
            <h2 className="was_created-title">New task was created</h2>
            
            <div className="was-created-btn-wrapper">
                <button onClick={closeConfirm} className="was-created-button">Ok</button>
            </div>
        </div>
    )
} 
//закидываем в кнопку функцию