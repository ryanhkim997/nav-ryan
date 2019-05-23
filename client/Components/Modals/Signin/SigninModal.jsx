import React from 'react';
import Modal from '../Modal.jsx';
import { MdClose } from 'react-icons/md';
import { FaArrowLeft } from 'react-icons/fa';
import './SigninModal.css';

class SigninModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      forgotPassword: false,
      createAccount: false,
      showPassword: false
    };
    this.handleForgotPassword = this.handleForgotPassword.bind(this);
    this.handleAccount = this.handleAccount.bind(this);
    this.handleShowPassword = this.handleShowPassword.bind(this);
  }

  handleForgotPassword() {
    this.setState({
      forgotPassword: !this.state.forgotPassword,
      createAccount: false
    });
  }

  handleShowPassword() {
    this.setState({
      showPassword: !this.state.showPassword
    });
  }

  handleAccount() {
    this.setState({
      createAccount: !this.state.createAccount,
      forgotPassword: false
    });
  }

  render() {
    let modal;
    if(this.state.forgotPassword) {
      modal = (
        <div className="password-modal">
          <span className="password-modal-back" onClick={this.handleForgotPassword}><FaArrowLeft /></span>
          <div className="password-modal-text">
            <h2>Forgot your password?</h2>
            <h5>We got you. Just enter your email below and we'll send you a link to get in.</h5>
          </div>
          <input type="email" placeholder="Email"></input>
          <button>Submit</button>
          <p>Contact Customer Care</p>
        </div>)
    } else if(this.state.createAccount) {
      modal = (
      <div className="account-modal">
        <span className="signin-modal-close" onClick={this.props.handleHide}><MdClose /></span>
        <h2>Create your account</h2>
        <input type="text" className="signin-form-name" style={{marginRight: "1%"}} placeholder="First name"></input>
        <input type="text" className="signin-form-name" style={{marginLeft: "1%"}} placeholder="Last name"></input>
        <input type="email" className="signin-form-input" placeholder="Email"></input>
        <div style={{position: "relative"}}>
          <input type={this.state.showPassword ? "text" : "password"} className="signin-form-input" placeholder="Password (8 character minimum)"></input>
          <span className="account-show-password" onClick={this.handleShowPassword}>Show</span>
        </div>
        <label className="signin-checkbox-container">
          <input type="checkbox"/>
          <span className="signin-form-check"></span>
          Keep me signed in
        </label>
        <button className="nav-modal-create-btn">
          Create your account
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
        <p>Have an account? <span className="account-modal-signin" onClick={this.handleAccount}>Sign in</span></p>
        <span className="legal-bs">By creating your Grubhub account, you agree to the <span>Terms of Use</span> and <span>Privacy Policy</span>.</span>
      </div>)
    } else {
      modal = (     
        <div className="sign-in-modal">
          <span className="signin-modal-close" onClick={this.props.handleHide}><MdClose /></span>
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
              <span className="forgot-pass" onClick={this.handleForgotPassword}>Reset password</span>
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
            <p className="create-acct" onClick={this.handleAccount}>Create your account</p>
          </div>
        </div>)
    }
    return(<Modal><div className="sign-in-modal-container">{modal}</div></Modal>);
  }
  
}

export default SigninModal;