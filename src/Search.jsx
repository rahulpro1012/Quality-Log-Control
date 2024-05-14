import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import SearchBar from './SearchBar';

function Search() {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (query) => {
        // Perform search operation here, update searchResults state
        console.log('Search query:', query);
      };
  return (
    <div>
        <Header/>
    <div className='flex justify-end mr-3 mt-3'>
        <Link to="/create"><button className='bg-blue-500 hover:bg-blue-700 px-3 py-2 text-white rounded-md '>To Create Log</button></Link>
    </div>
    <SearchBar onSearch={handleSearch} />
    </div>
  )
}

export default Search