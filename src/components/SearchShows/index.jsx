import React, { useState, useEffect } from "react";
import './index.css';
import { Loader } from "../../utilities/Loader";
import { NoResultsComponent } from "../../utilities/NoResults";
import { SearchResult } from "./components/SearchResults/SearchResult";
import { ButtonComponent } from "./components/SearchForm/SearchFormButton";
import { InputComponent } from "./components/SearchForm/SearchFormInput";

const SearchShows = ({endpoint}) => {

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

  const orderedResults = searchResults && searchResults
    .sort((a, b) => a.show.name > b.show.name ? 1 : -1);

  const showList = orderedResults.length > 0 && orderedResults.map((result, index) => {
    const { image } = result.show;
    if(image && image !== null) return <SearchResult key={index} result={result} />
  });

  const handleChange = e => {
    const { value } = e.target;
    setEndpoint(endpoint + value);
    setSearchQuery(value);
  };

  const printToConsole = (e) => {
    e.preventDefault();
    console.table(orderedResults.map(result => result.show.name));
  };
  
  return (
    <div className="main-container">
      
      <div className="form-container">
        
        <h1 className="form-title">Bounteous JavaScript Coding Challenge</h1>
        
        <form action={`${searchEndpoint}`} className="show-search-form">
          
          <InputComponent 
            type="text" 
            placeholder="Search for TV show by name" 
            onChange={handleChange} 
            value={searchQuery} 
            name="showName"
            id="showName"
            autoComplete="off"
          />
          
          <ButtonComponent 
            onClick={printToConsole} 
            disabled={!showList}
          >Print Shows</ButtonComponent>
          
        </form>

      </div>

      <div className="results-container">
        
        {isLoading 
          ? <Loader className="loader"/> 
          : (searchQuery.length > 0 && !showList) && 
            <NoResultsComponent />
        }

        { ( !hasError && searchQuery.length ) ? showList : searchStatus }

      </div>

    </div>

  )
}

export default SearchShows;