import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedVideo = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        videos={video}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedVideo}</div>;
};

export default VideoList;
