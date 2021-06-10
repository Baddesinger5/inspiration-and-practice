import React from 'react';
import './LeftSide.css';

export default function LeftSide({allTasks, modalData, setModalsData, setWarning, setEditWindow}) {
        
        function onClick(e) {
            e.preventDefault();
            setModalsData(allTasks[e.target.dataset.index])             
        }
        
        function onClose() {
            setModalsData(null)
        }
    
        function showWarning() {
            setWarning(true)
        }
    
        function showEditWindow() {
            setEditWindow(true)
        }
    
        if(document.documentElement.clientWidth < 500 && document.querySelector('.left_side-wrapper')) {
            document.querySelector('.left_side-wrapper').style.width = 100 + '%';
        }
        if (document.documentElement.clientWidth < 500 && document.querySelector('.left_side-wrapper') && modalData !== null) {
            document.querySelector('.left_side-wrapper').style.width = 30 + '%';
        }

        
    
        return (
            <div className="left_side-wrapper">
                <ul className="left_side_list-wrapper">
    
                    {allTasks.map(function(item, index) {
                        return (
                            <div className="list_item-wrapper" key={index}>
                                <a href="/" alt="task" className="for-show-right" key={index} data-index={index} onClick={onClick}>{null}</a>
                                <div className="left-part" >
                                    <li className="list-item">{item.title}</li>
                                    <li className="list-item">{item.shortDesc}</li>
                    
                                    <div className="date-wrapper">
                                        <span>{item.time.month}</span><span>{item.time.day}</span> <span>{item.time.year}</span><span>{item.time.hour}</span> : <span>{item.time.minute}</span>          
                                    </div>
                                </div>
                    
                                <div className="right-part">
                                    <span>
                                        <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  fill="#3F8CFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
                                    </span>
                                </div>    
                            </div>
                        )
                    })}
                </ul>
                
                <div className="rightside_bar-item-wrapper" >
                    {modalData && (
                        
                        <>
                        <div className="tools-bar">
    
                            <div className="button-wrapper">
                                <button className="edit-tool" onClick={showEditWindow}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="tools-icon"   viewBox="0 0 24 24"  fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/></svg>
                                    Edit this task
                                </button>
    
                                <button className="delete-tool" onClick={showWarning}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="tools-icon" viewBox="0 0 24 24"  fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg>
                                    Delete this task
                                </button>
    
                                <button className="close-tool" onClick={onClose}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="tools-icon" viewBox="0 0 24 24"  fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
                                    Close this task
                                </button>
                            </div>
                            
                        </div>
                        
                        <div className="data-wrapper">
                            <h1 className="data-title">Task title: <span>{modalData.title}</span> </h1>
                            <h3 className="data-short_desc">Short Description: <span>{modalData.shortDesc}</span></h3>
                            <p className="data-full_info">Task text: <span>{modalData.desc}</span> </p>
                        </div>
    
                        <div className="date-wrapper">
                            <span className="inside-span">{modalData.time.month}</span>
                            <span className="inside-span">{modalData.time.day}</span> 
                            <span className="inside-span">{modalData.time.year}</span>
                            <span className="inside-span">{modalData.time.hour}</span> 
                            : 
                            <span className="inside-span">{modalData.time.minute}</span>          
                        </div>
                        </>
          
                    )}
                </div>
            </div>
        )

    
  
    

}