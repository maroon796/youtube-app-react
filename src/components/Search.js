import React, { useState } from 'react';

const Search = ({ onFormSubmit }) => {
  const [searchWord, setSearchWord] = useState('');

  const onInputChange = (e) => {
    setSearchWord(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    onFormSubmit(searchWord);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Search Video</label>
          <input type="text" value={searchWord} onChange={onInputChange} />
        </div>
      </form>
    </div>
  );
};

export default Search;
