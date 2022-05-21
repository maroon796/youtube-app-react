import React, { useState } from 'react';
import Search from './Search';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const onWordSubmit = (word) => {
    console.log(word);
  };
  return (
    <div className="ui container">
      <Search onFormSubmit={onWordSubmit} />
    </div>
  );
};

export default App;
