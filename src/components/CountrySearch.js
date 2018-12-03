import React from 'react';
import PropTypes from "prop-types";
import Form from 'react-bootstrap/lib/Form';
import { withNamespaces } from 'react-i18next';

const CountrySearch = ({ t, onSearch }) => {
  return <Form.Control onChange={e => onSearch(e.target.value)} placeholder={t('toolbar.label.search')} />;
};

CountrySearch.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default withNamespaces()(CountrySearch);