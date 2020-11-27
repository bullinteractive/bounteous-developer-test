import React, { useState, useEffect } from "react";
import { Loader } from "../utilities/Loader";
import { NoResults } from "../utilities/NoResults";

const SearchForm = (endpoint) => {

  const [ searchQuery, setSearchQuery ] = useState("");
  const [ searchResults, setSearchResults ] = useState([]);
  const [ searchEndpoint, setEndpoint ] = useState(endpoint);
  const [ isLoading, setLoading ] = useState(false);
  const [ hasError, setError ] = useState(false);
  const [ searchStatus, setStatus ] = useState(false);
  
  useEffect(() => {
    const getTVShowNames = async() => {
      
      setLoading(true);

      try {
        const response = await fetch(`http://api.tvmaze.com/search/shows?q=${searchQuery}`);
        const data = await response.json();
        if(!data.status) {
          setSearchResults(data);
        } else {
          setError(true);
          setStatus(data.message);
        }
      } catch(err) {
        setError(true);
        setStatus(err.message);
      }
      
      setLoading(false);

    };

    if(!searchQuery) { 
      setSearchResults([]);
      return
    };
    
    getTVShowNames();

  }, [searchQuery]);

  const orderedResults = searchResults && searchResults.sort((a, b) => a.show.name > b.show.name ? 1 : -1);

  const showList = orderedResults.length > 0 && orderedResults.map(result => {
    
    const {id, name, image } = result.show;
    
    if(image) {
      
      const { medium: thumbnail } = image;
      
      return (
        <div key={id}>
          {name}
          <img src={thumbnail} loading="lazy" alt={`A thumbnail for the show ${name}`} />
        </div>
      )

    }

    return []

  });

  const handleChange = e => {
    const { value } = e.target;
    setEndpoint(value);
    setSearchQuery(value);
  };


  const printToConsole = (e) => {
    e.preventDefault();
    console.table(orderedResults.map(result => result.show.name));
  };
  
  return (
    <>
      <form action={searchEndpoint} >
        <input 
          type="text" 
          placeholder="Search for TV show by name" 
          onChange={handleChange} 
          value={searchQuery} 
          name="showName"
          id="showName"
          autoComplete="off"
        />
        <button type="submit" 
          onClick={printToConsole} 
          disabled={!showList}
        >Print Shows</button>
        
      </form>

      {isLoading 
        ? <Loader /> 
        : (searchQuery.length > 0 && !showList) && 
          <NoResults />
      }

      { ( !hasError && searchQuery.length ) ? showList : searchStatus }

    </>
  )
}

export default SearchForm;