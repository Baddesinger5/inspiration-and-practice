import React from 'react';
import './ValidateWarning.css';

export default function ValidateWarning({setValidate, setCloseModal}) {

    function showValidate() {
        setValidate(false);
        setCloseModal(true)
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