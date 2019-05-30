import React from 'react';
import Modal from '../Modal.jsx';
import { MdClose } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaBolt } from 'react-icons/fa';
import './ShareModal.css';

class ShareModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      copyLinkLabel: 'Copy link'
    }
    this.handleCopy = this.handleCopy.bind(this);
  }

  handleCopy() {
    this.setState({
      copyLinkLabel:'Link copied'
    });
  }

  render() {
    let copyLinkLabelStyle = null;
    if(this.state.copyLinkLabel === 'Copy link') {
      copyLinkLabelStyle = {color: "#0070eb"}
    } else {
      copyLinkLabelStyle = {color: "#13aa37"}
    }
    return(<Modal>
      <div className="share-modal-container">
        <div className="share-modal">
          <span className="share-modal-close" onClick={this.props.handleHide}><MdClose /></span>
          <h3>Share {this.props.restaurant}</h3>
          <div className="share-options-container">
            <div className="share-option">
              <FaFacebookSquare /> 
              <span className="share-option-label">Facebook</span>
            </div>
            <div className="share-option">
              <FaTwitter /> 
              <span className="share-option-label">Twitter</span>
            </div>
            <div className="share-option">
              <MdEmail /> 
              <span className="share-option-label">Email</span>
            </div>
            <div className="share-option" id="share-copy-link" onClick={this.handleCopy}>
              <FaBolt/> 
              <span style={copyLinkLabelStyle} className="share-option-label">{this.state.copyLinkLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </Modal>);
  }
}

export default ShareModal;