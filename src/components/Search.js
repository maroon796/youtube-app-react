import React, { useState } from 'react';

const Search = () => {
  const [searchWord, setSearchWord] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();

    //make sure calling callback from parent
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Search Video</label>
          <input type="text" value={searchWord} onChange={(e) => setSearchWord(e.target.value)} />
        </div>
      </form>
    </div>
  );
};

export default Search;
