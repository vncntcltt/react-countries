import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';

const CountryDisplayType = ({ onChange }) => {
  return (
    <ButtonGroup>
      <Button value='map' onClick={onChange}>Map</Button>
      <Button value='grid' onClick={onChange}>Grid</Button>
      <Button value='table' onClick={onChange}>Table</Button>
    </ButtonGroup>
  );
};

CountryDisplayType.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default CountryDisplayType;