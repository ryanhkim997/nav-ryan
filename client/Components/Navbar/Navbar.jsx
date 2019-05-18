import React from 'react';
import SigninModal from './Modal/SigninModal'
import { GoSearch } from 'react-icons/go';
import { GoChevronDown } from 'react-icons/go';
import { MdClose } from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';
import { FaShoppingBag } from 'react-icons/fa';
import './Navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleShow() {
    this.setState({
      showModal: true
    });
  }

  handleHide() {
    this.setState({
      showModal: false
    });
  }

  render() {

    const modal = this.state.showModal ? 
    (<SigninModal>
      <div className="sign-in-modal-container">
        <div className="sign-in-modal">
          <span className="signin-modal-close" onClick={this.handleHide}><MdClose /></span>
          <h2>Sign in with your Grubhub account</h2>
          <div className="signin-form">
            <input className="signin-form-input" type="text" placeholder="Email"></input>
            <input className="signin-form-input" type="password" placeholder="Password"></input>
            <div>
              <label className="signin-checkbox-container">
                <input type="checkbox"/>
                <span className="signin-form-check"></span>
                Keep me signed in
              </label>
              <span className="forgot-pass">Reset password</span>
            </div>
          </div>
        </div>
      </div>
    </SigninModal>) : null;

    return(
      <div className="nav-app">
        {modal}
        <div className="nav-navbar">
          <div className="nav-brand">
            <img src="https://s3-us-west-1.amazonaws.com/kayjayhogan/GH.png"></img>
          </div>
          <div className="nav-search">
            <div className="nav-search-address-container">
              <div className="nav-search-address">
                <span className="nav-loc-icon"><MdLocationOn /></span>
                <span className="nav-search-address-text">6060 Center Dr</span>
                <span className="nav-down-arrow"><GoChevronDown /></span>
              </div>
            </div>
            <div className="nav-search-input-container">
              <div className="nav-search-flex">
                <span className="nav-search-icon"><GoSearch /></span>          
                <input placeholder="Pizza, sushi, chinese"></input>
                <span className="nav-close-icon"><MdClose /></span>
              </div>
            </div>
          </div>
          <div className="nav-buttons">
            <div className="nav-sign-in">
              <button className="nav-sign-in-btn" onClick={this.handleShow}><strong>Sign In</strong></button>
            </div>
            <div className="nav-bag">
              <span className="nav-bag-icon"><FaShoppingBag /></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;