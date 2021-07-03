import React from 'react';
import './VideoItem.css';

export default function VideoItem({snippet, videoStat, id, setOpenVideo, setOverlay}) {

    function showVideoModal() {
        setOpenVideo(true)
        setOverlay(true)
    }
    return (
        <div className="videoItem-wrapper" onClick={showVideoModal}>

            <div className="videoItem-preview-wrapper">
                <img className="videoItem-preview" src={snippet.thumbnails.high.url} alt="/"/>
            </div>
            
            <div className="videoItem-desc-wrapper">
                <h1 className="videoItem-title">{snippet.title}</h1>

                <div className="videoItem-stats">
                    <p className="videoItem-chanelName">{snippet.channelTitle}</p>
                    <p className="videoItem-views">{videoStat.viewCount} просмотров</p>
                </div>
                
            </div>
           
            
        </div>
    )
}