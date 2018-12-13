import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/lib/Button'
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup'
import { withNamespaces } from 'react-i18next'

import { COUNTRIES_DISPLAY_TYPES } from '../../actions'

const CountryDisplayType = ({ t, displayType, setDisplayType }) => (
  <ButtonGroup className="mb-3">
    <Button
      value={COUNTRIES_DISPLAY_TYPES.MAP}
      active={displayType === COUNTRIES_DISPLAY_TYPES.MAP}
      onClick={setDisplayType}
    >
      {t('countries.toolbar.map')}
    </Button>
    <Button
      value={COUNTRIES_DISPLAY_TYPES.GRID}
      active={displayType === COUNTRIES_DISPLAY_TYPES.GRID}
      onClick={setDisplayType}
    >
      {t('countries.toolbar.grid')}
    </Button>
    <Button
      value={COUNTRIES_DISPLAY_TYPES.TABLE}
      active={displayType === COUNTRIES_DISPLAY_TYPES.TABLE}
      onClick={setDisplayType}
    >
      {t('countries.toolbar.table')}
    </Button>
  </ButtonGroup>
)

CountryDisplayType.propTypes = {
  t: PropTypes.func.isRequired,
  displayType: PropTypes.string.isRequired,
  setDisplayType: PropTypes.func.isRequired
}

export default withNamespaces()(CountryDisplayType)
