import React from 'react';

export default function Overlay() {
    const style = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(59, 59, 59, 0.6)',
        zIndex: 10
    }
    return (
        <div style={style} className="overlay"></div>
    )
}