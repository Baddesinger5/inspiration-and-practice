import React from 'react';

export default function AddBtn({setCloseModal}) {

    function showModal() {
        setCloseModal(true)
    }

    const style ={
        position: 'absolute', 
        bottom: '5%', 
        right: '5%', 
        border: 'none', 
        backgroundColor: '#3F8CFF', 
        zIndex: 10, 
        borderRadius: '50%',
        padding: 0, 
        width: '48px',
        height: '48px',
        cursor: 'pointer'
    }
    return (
        <button style={style} onClick={showModal}>
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
        </button>
    )
}