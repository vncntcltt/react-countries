import React from 'react';

function CountryDisplayType(props) {
  return (
    <>
      <button value='map' onClick={props.onChange}>Map</button>
      <button value='grid' onClick={props.onChange}>Grid</button>
      <button value='table' onClick={props.onChange}>Table</button>
    </>
  );
}

export default CountryDisplayType;