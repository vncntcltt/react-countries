import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import { withNamespaces } from 'react-i18next';

import { COUNTRIES_DISPLAY_TYPES, setCountryDisplayType} from '../actions';

const mapStateToProps = state => {
  return {
    displayType: state.countries.displayType
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDisplayType: e => {
      dispatch(setCountryDisplayType(e.target.value))
    }
  };
};

const CountryDisplayType = ({ t, displayType, setDisplayType }) => {
  return (
    <ButtonGroup className="mb-3">
      <Button 
        value={COUNTRIES_DISPLAY_TYPES.MAP}
        active={displayType === COUNTRIES_DISPLAY_TYPES.MAP} 
        onClick={setDisplayType}>
        {t('countries.toolbar.map')}
      </Button>
      <Button 
        value={COUNTRIES_DISPLAY_TYPES.GRID} 
        active={displayType === COUNTRIES_DISPLAY_TYPES.GRID} 
        onClick={setDisplayType}>
        {t('countries.toolbar.grid')}
      </Button>
      <Button 
        value={COUNTRIES_DISPLAY_TYPES.TABLE} 
        active={displayType === COUNTRIES_DISPLAY_TYPES.TABLE} 
        onClick={setDisplayType}>
        {t('countries.toolbar.table')}
      </Button>
    </ButtonGroup>
  );
};

export default withNamespaces()(connect(mapStateToProps, mapDispatchToProps)(CountryDisplayType));