import React from 'react';
import './EditWarning.css';

export default function EditWarning({setEditWarning}) {
    return (
        <div className="edit_warning-wrapper">
            <h1 className="edit_warning-title">Task has been changed!</h1>

            <div className="edit_warning-btn-wrapper">
                <button className="edit_warning-btn" onClick={() => setEditWarning(false)}>Done!</button>
            </div>
        </div>
    )
}
//это окно всплывает, когда такс был отредачен и по кнопке мы его закрываем