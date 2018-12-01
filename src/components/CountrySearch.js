import React from 'react';
import { func } from "prop-types";

const CountrySearch = ({ onSearch }) => {
  return <input onChange={e => onSearch(e.target.value)} placeholder="Search countries..." />;
};

CountrySearch.propTypes = {
  onSearch: func.isRequired
};

export default CountrySearch;