import React from "react";
import SearchForm from "../components/SearchForm";

const Home = () => {

  const endpoint = 'http://api.tvmaze.com/search/shows?q';

  return (
    <div>
      <h1>Home</h1>
      <SearchForm endpoint={endpoint} />
    </div>
  )
}

export default Home;