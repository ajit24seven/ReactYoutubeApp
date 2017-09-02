import React from 'react';
import VideoListItem from '../video-list-item/video-list-item.component';

const VideoList = (props) => {
    const videoItem = props.videos.map((video) => {
        return (
        <VideoListItem 
        onVideoSelect = {props.onVideoSelect}
        activeVideo = {props.activeVideo}
        key={video.etag} video={video} />
        );
    });
    return (
        <ul className="col-md-4 list-group">
            {videoItem}
        </ul>
    )
}

export default VideoList;