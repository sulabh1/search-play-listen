import React from "react";
import "./VideoItem.css";

const VideoItem = ({ videos, onVideoSelect }) => {
  //   console.log(video);
  return (
    <div onClick={() => onVideoSelect(videos)} className="video-item item">
      <img
        className="ui image"
        src={videos.snippet.thumbnails.medium.url}
        alt={videos.snippet.title}
      />
      <div className="content">
        <div className="header">{videos.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
