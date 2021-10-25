import React from 'react';
import { MdSearch } from 'react-icons/md';

const SearchBar = ({handleSearch}) => {
  return (
    <div className='container flex p-3 bg-gray-200 rounded-lg mb-4'>
      <MdSearch size="1.5em" />
      <input
        type="text" 
        placeholder='search your note...' 
        className="pl-1 w-full outline-none bg-gray-200 text-black placeholder-gray-400 focus:placeholder-opacity-0"
        onChange={(e) => handleSearch(e.target.value)}
        />
    </div>
  );
};

export default SearchBar;