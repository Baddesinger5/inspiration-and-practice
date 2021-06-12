import React from 'react';
import LeftSide from './leftSide/LeftSide';
import './MainContent.css';

export default function MainContent({allTasks, setAllTasks, modalData, setModalsData, setWarning, setEditWindow}) {
    return (
        <div className="main_content_wrapper">
            <LeftSide modalData={modalData} setModalsData={setModalsData} allTasks={allTasks} setAllTasks={setAllTasks} setWarning={setWarning} setEditWindow={setEditWindow}/>            
        </div>
    )
}
//просто оболочка для главного контента