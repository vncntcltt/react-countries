import React from 'react';
import PropTypes from "prop-types";
import Form from 'react-bootstrap/lib/Form';

const CountrySearch = ({ onSearch }) => {
  return <Form.Control onChange={e => onSearch(e.target.value)} placeholder="Search countries..." />;
};

CountrySearch.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default CountrySearch;