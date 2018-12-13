import React from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/lib/Form'
import { withNamespaces } from 'react-i18next'
import i18next from 'i18next'

import { SETTINGS_UNIT_TYPES } from '../../actions'

class Settings extends React.Component {
  static propTypes = {
    selectedUnit: PropTypes.string.isRequired,
    setSelectedUnit: PropTypes.func.isRequired
  }

  onLanguageChange = e => {
    const lang = e.target.value
    i18next.changeLanguage(lang)
  }

  onUnitChange = e => {
    const selectedUnit = e.target.value
    this.props.setSelectedUnit(selectedUnit)
  }

  render() {
    const { t, selectedUnit } = this.props
    return (
      <Form className="p-3">
        <Form.Group>
          <Form.Label>{t('settings.label.language')}</Form.Label>
          <Form.Control as="select" onChange={this.onLanguageChange} value={i18next.language}>
            <option value="en">English</option>
            <option value="fr">Français</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>{t('settings.label.units')}</Form.Label>
          <Form.Control as="select" onChange={this.onUnitChange} value={selectedUnit}>
            <option value={SETTINGS_UNIT_TYPES.METRIC}>{t('settings.units.metric')}</option>
            <option value={SETTINGS_UNIT_TYPES.IMPERIAL}>{t('settings.units.imperial')}</option>
          </Form.Control>
        </Form.Group>
      </Form>
    )
  }
}

export default withNamespaces()(Settings)
