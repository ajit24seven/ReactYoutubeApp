import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar/search-bar.component';
import VideoList from './components/video-list/video-list.component';
import VideoDetails from './components/video-details/video-details.component';

const API_KEY = 'AIzaSyAbg5M6xCT8PvwOjKfVH-0ASCkc_GMiJus';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
        videos: [],
        selectedVideo: null,
        activeVideo: null,
    };

    this.videoSearch("angularjs");
  }

videoSearch(term){
  YTSearch({key:API_KEY, term:term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo:videos[0]
      });
  });
}


  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 600);
    return (
      <div className="row">
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetails video = {this.state.selectedVideo} />
        <VideoList 
        onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
        activeVideo = {this.state.selectedVideo}
        videos = {this.state.videos} />
      </div> 
   );
  };
};


ReactDOM.render(<App />, document.querySelector('.container'));