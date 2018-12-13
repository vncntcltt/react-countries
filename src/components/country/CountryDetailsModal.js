import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button'
import { withNamespaces } from 'react-i18next'

import CountryCard from './CountryCard'
import { countryPropType } from '../common/propTypes'

const CountryDetailsModal = ({ t, country, onHide, ...restProps }) => (
  <Modal {...restProps} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">{t('dialog.title.details')}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{country && <CountryCard country={country} />}</Modal.Body>
    <Modal.Footer>
      <Button onClick={onHide}>{t('dialog.button.close')}</Button>
    </Modal.Footer>
  </Modal>
)

CountryDetailsModal.propTypes = {
  t: PropTypes.func.isRequired,
  country: countryPropType.isRequired,
  onHide: PropTypes.func.isRequired
}

export default withNamespaces()(CountryDetailsModal)
