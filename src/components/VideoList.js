import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <div>
      {videos.map((video) => {
        return <VideoItem video={video} />;
      })}
    </div>
  );
};

export default VideoList;
