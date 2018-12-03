import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import { withNamespaces } from 'react-i18next';

import CountryCard from './CountryCard';

class CountryDetailsModal extends React.Component {

  render() {
    const { t, country, onHide, tReady, i18nOptions, defaultNS, reportNS,  ...rest } = this.props;
    return (
      <Modal
        {...rest}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{t('dialog.title.details')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {country && <CountryCard country={country} />}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>{t('dialog.button.close')}</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
}

export default withNamespaces()(CountryDetailsModal);