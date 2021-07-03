import React from 'react';
import './ChannelItem.css';

export default function ChannelItem({snippet}) {
    // console.log(snippet);

    return (
        <div className="channelItem-wrapper">
            <a className="linkStyle" href={`https://www.youtube.com/channel/${snippet.channelId}`} rel="noreferrer" target="_blank">{null}</a>

            <div className="channelImage-wrapper">
                <img className='channelImage' src={snippet.thumbnails.high.url} alt="channel"/>
            </div>

            <div className="channelInfo-wrapper">
                <h1 className="channelInfo-title">{snippet.channelTitle}</h1>
                <p className="channelInfo-desc">{snippet.description}</p>
            </div>
            
        </div>
    )
}