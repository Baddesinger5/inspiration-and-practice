import React from 'react';
import './OpenVideo.css';

function OpenVideo({id, setOpenVideo, setOverlay}) {

    function closeVideoModal() {
        setOpenVideo(false)
        setOverlay(false)
    }

    return (
        <>
        <div className="openVideo-wrapper" >         
            
            <button className="openVideo-close_btn" onClick={closeVideoModal} type="button" >X</button>            
            <iframe className="iframe"  allowFullScreen title="video"  frameBorder="no"  src={`https://www.youtube.com/embed/${id}`}></iframe>
        
        </div>
        </>
        
    )
}

export default OpenVideo;