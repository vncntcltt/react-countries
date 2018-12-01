import React from 'react';
import { func } from "prop-types";
import Form from 'react-bootstrap/lib/Form';

const CountrySearch = ({ onSearch }) => {
  return <Form.Control onChange={e => onSearch(e.target.value)} placeholder="Search countries..." />;
};

CountrySearch.propTypes = {
  onSearch: func.isRequired
};

export default CountrySearch;