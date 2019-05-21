import React from 'react';
import Modal from '../Modal.jsx';
import { MdClose } from 'react-icons/md';
import './SigninModal.css';

const SigninModal = (props) => {
  return(<Modal>
    <div className="sign-in-modal-container">
      <div className="sign-in-modal">
        <span className="signin-modal-close" onClick={props.handleHide}><MdClose /></span>
        <h3>Sign in with your Grubhub account</h3>
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
          <button className="nav-modal-signin-btn">
            <img className="btn-gh-logo" src="https://www.grubhub.com/img-hashed/grubhub_logo_img-f32224c65999bc87a7d65983e133e9fd.svg"></img>
            Sign in
          </button>
          <p>or</p>
          <button className="nav-fb-btn">
            <img className="btn-fb-logo" src="https://www.grubhub.com/img-hashed/facebook_logo-ec6f96d886d9fa036497b29ba8b9421d.svg"></img>
            Continue with Facebook
          </button>
          <button className="nav-google-btn">
            <img className="btn-google-logo" src="https://www.grubhub.com/img-hashed/google_logo-3892242713d78c209d3433f31634e504.svg" />
            Continue with Google
          </button>
          <p className="create-acct">Create your account</p>
        </div>
      </div>
    </div>
  </Modal>);
}

export default SigninModal;