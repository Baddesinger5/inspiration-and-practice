import React, { useEffect, useState } from 'react';
import './SearchItem.css';
import ChannelItem from '../channeltem/ChannelItem';
import VideoItem from '../videoItem/VideoItem';
import axios from 'axios';
import Overlay from '../overlay/Overlay';
import OpenVideo from '../openVideo/OpenVideo';

function SearchItem({snippet, id, handleSubmit}) {
    
    const [videoStat, setVideoStat] = useState([])
    const [openVideo, setOpenVideo] = useState(false);
    const [overlay, setOverlay] = useState(false);

    const KEY = 'AIzaSyDQTEa3GqKX0y58H-8RlmT1onzRjboyW4s';

    useEffect( () => {
        axios.get(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${id.videoId}&key=${KEY}`)
          .then(stats => setVideoStat(stats.data.items[0].statistics))
          .catch(err => console.log(err))
    }, [handleSubmit])
    
    return (
        <div className="seactItem-wrapper">
            {id.kind === 'youtube#channel' ? <ChannelItem snippet={snippet}/> : null}
            {id.kind === 'youtube#video' ? <VideoItem openVideo={openVideo} overlay={overlay} setOpenVideo={setOpenVideo} setOverlay={setOverlay} snippet={snippet} id={id.videoId} videoStat={videoStat}/> : null}
        
             
            {openVideo ? <OpenVideo id={id.videoId} setOpenVideo={setOpenVideo} setOverlay={setOverlay}/> : null}
            {overlay ? <Overlay /> : null}
        </div>
    )
}

export default SearchItem;