import React from 'react';
import Modal from '../Modal.jsx';
import { MdClose } from 'react-icons/md';
import './ShareModal.css';

const ShareModal = (props) => {
  return(<Modal>
    <div className="share-modal-container">
      <div className="share-modal">
        <span className="share-modal-close" onClick={props.handleHide}><MdClose /></span>
        <h3>Share {props.restaurant}</h3>
      </div>
    </div>
  </Modal>);
}

export default ShareModal;