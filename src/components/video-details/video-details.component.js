import React from 'react';

const VideoDetail = ({video}) => {
    if(!video){
        return <div>Loading...</div>
    }
    const videoId = video.id.videoId;
    console.log(videoId)
    const url = 'https://www.youtube.com/embed/'+ videoId;
    return(
        <div className="video-details col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={url} className="embed-responsive-item"></iframe>
            </div>
            <div className="details">
                <h6>{video.snippet.title}</h6>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}
export default VideoDetail;
