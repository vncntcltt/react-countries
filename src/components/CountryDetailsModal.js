import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import { NamespacesConsumer } from 'react-i18next';

import CountryCard from './CountryCard';

class CountryDetailsModal extends React.Component {

  render() {
    const { country, onHide } = this.props;
    return (
      <NamespacesConsumer>
        {
          t => (
            <Modal
              {...this.props}
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
          )
        }
      </NamespacesConsumer>
    );
  }
  
}

export default CountryDetailsModal;