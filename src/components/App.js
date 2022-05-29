import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

export default class App extends Component {
  state = { video: [], selectedVideo: null };
  onTermSubmit = async (term) => {
    const youtubeData = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ video: youtubeData.data.items });
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.video}
        />
      </div>
    );
  }
}
