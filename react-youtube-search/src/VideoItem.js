import React from 'react';

export default function VideoItem({item}) {
    console.log(item);
    return (
        <div>
            <img src={item.snippet.thumbnails.default.url}/>
        </div>
    )
}