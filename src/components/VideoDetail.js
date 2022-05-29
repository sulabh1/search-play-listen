import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <h4 className="ui header">
        <div className="ui segment"> {video.snippet.title}</div>
      </h4>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default VideoDetail;
