import React from 'react';
import './WasCreated.css';

export default function WasCreated({confirmTask, setConfirmTask}) {

    function closeConfirm() {
        setConfirmTask(false)
    }
    return (
        <div className="was_created-wrapper">
            <h2 className="was_created-title">New task was created</h2>
            <button onClick={closeConfirm} className="was-created-button">Ok</button>
        </div>
    )
} 