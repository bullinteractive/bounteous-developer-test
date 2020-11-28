import React from "react";
import SearchShows from "../components/SearchShows";

const Home = () => {

  const endpoint = 'http://api.tvmaze.com/search/shows?q=';

  return (
    <div>
      <SearchShows endpoint={endpoint} />
    </div>
  )
}

export default Home;