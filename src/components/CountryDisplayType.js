import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import { withNamespaces } from 'react-i18next';

const CountryDisplayType = ({ t, onChange }) => {
  return (
    <ButtonGroup className="mb-3">
      <Button value='map' onClick={onChange}>{t('countries.toolbar.map')}</Button>
      <Button value='grid' onClick={onChange}>{t('countries.toolbar.grid')}</Button>
      <Button value='table' onClick={onChange}>{t('countries.toolbar.table')}</Button>
    </ButtonGroup>
  );
};

CountryDisplayType.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default withNamespaces()(CountryDisplayType);