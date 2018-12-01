import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

import CountryCard from './CountryCard';

class CountryDetailsModal extends React.Component {

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Country details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.country && <CountryCard country={this.props.country} />}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
}

export default CountryDetailsModal;