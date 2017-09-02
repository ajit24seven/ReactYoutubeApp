import React, {Component} from 'react';
export default class VideoListItem extends Component{
    
    constructor(props){
        super(props);
    };
   
    render(){

        const activeVideo = this.props.activeVideo.id.videoId;
        const video = this.props.video;
        const onVideoSelect = this.props.onVideoSelect;
        const imageUrl = video.snippet.thumbnails.default.url; 
      
        return (
            <li  onClick={() => onVideoSelect(video)} className={'list-group-item '+ (video.id.videoId === activeVideo ? "active" : "")}>
                <div className="video-list-media">
                    <div className="media-left">
                        <img src={imageUrl} className="media-object" />
                    </div>
                    <div className="media-body">
                        <div className="media-heading">
                            {video.snippet.title}
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

