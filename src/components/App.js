import React from 'react';
import Search from './Search';

const App = () => {
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
