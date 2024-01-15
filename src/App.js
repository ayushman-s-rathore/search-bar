
import './App.css';
import Search from './searchBar';
import { useState } from 'react';
import SearchResult from './searchResult';

function App() {
  const [ results , setResults ] = useState([]);
 
  return (
    <div className="App">
       <div className='search-container'>
          <Search setResults={setResults} />
          <SearchResult results={results}/>
       </div>
    </div>
  );
}

export default App;
