import React, {useState} from 'react';

function Search({searchRecordsByKeyword}) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`${searchTerm} ready to send`);
    searchRecordsByKeyword(searchTerm);
  }
  return (
    <form onSubmit= { handleSubmit }>
      <label>
        Search by keyword:
      <input
        type= "text"
        value= {searchTerm}
        require
        onChange= { e => setSearchTerm(e.target.value) }
        />
      </label>
      <input
        type= "submit"
        value= "Search"
        />
    </form>
  );
};

export default Search;