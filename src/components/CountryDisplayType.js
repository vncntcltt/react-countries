import React from 'react';
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

export default CountryDisplayType;