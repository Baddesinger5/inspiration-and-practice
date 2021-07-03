import React from 'react';

export default function UnavaibleScreen() {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#ffffff',
        backgroundColor: '#3a3a3a',
        border: '1px solid #ff0000',
        borderRadius: '5px',
        height: 'auto',
        padding: '30px 5px',
        zIndex: 100,
        fontSize: '20px'
    }
    return (
        <div style={style}>
            This application doesn`t support devices with large screen width.
        </div>
    )
}