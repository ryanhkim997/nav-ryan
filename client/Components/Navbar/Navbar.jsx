import React from 'react';
import SigninModal from '../Modals/Signin/SigninModal.jsx'
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
      showModal: false,
      showAddressSearch: false,
      showPopularSearch: false
    };
    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleHideModal = this.handleHideModal.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handlePopularSearch = this.handlePopularSearch.bind(this);
  }

  handleShowModal() {
    this.setState({
      showModal: true
    });
  }

  handleHideModal() {
    this.setState({
      showModal: false
    });
  }

  handleAddress() {
    this.setState({
      showAddressSearch: !this.state.showAddressSearch
    });
  }

  handleShowPopularSearch() {
    this.setState({
      showPopularSearch: true
    });
  }

  handlePopularSearch() {
    this.setState({
      showPopularSearch: !this.state.showPopularSearch
    });
  }

  render() {

    const modal = this.state.showModal ? 
    (<SigninModal handleHide={this.handleHideModal}></SigninModal>) : null;

    const addressSearch = this.state.showAddressSearch ? 
    (<div className="nav-address-input">
      <span className="nav-input-icon"><MdLocationOn /></span>
      <input type="text" placeholder="Enter a new address"></input>
    </div>) : null;

    const popularSearch = this.state.showPopularSearch ? 
    (<div className="nav-popular-search">
      <div className="nav-popular-header">Popular Searches</div>
      <div className="nav-popular-option">
        pizza
        <span className="nav-popular-icon"><GoSearch /></span> 
      </div>
      <div className="nav-popular-option">
        thai
        <span className="nav-popular-icon"><GoSearch /></span> 
      </div>
      <div className="nav-popular-option">
        sushi
        <span className="nav-popular-icon"><GoSearch /></span> 
      </div>
      <div className="nav-popular-option">
        vegan
        <span className="nav-popular-icon"><GoSearch /></span> 
      </div>
      <div className="nav-popular-option">
        chinese
        <span className="nav-popular-icon"><GoSearch /></span> 
      </div>
    </div>) : null;

    return(
      <div className="nav-app">
        {modal}
        <div className="nav-navbar">
          <div className="nav-brand">
            <img src="https://s3-us-west-1.amazonaws.com/kayjayhogan/GH.png"></img>
          </div>
          <div className="nav-search">
            <div className="nav-search-address-container">
              <div className="nav-search-address" onClick={this.handleAddress}>
                <span className="nav-loc-icon"><MdLocationOn /></span>
                <span className="nav-search-address-text">6060 Center Dr</span>
                <span className="nav-down-arrow"><GoChevronDown /></span>
              </div>
            </div>
            {addressSearch}
            <div className="nav-search-input-container">
              <div className="nav-search-flex">
                <span className="nav-search-icon"><GoSearch /></span>          
                <input placeholder="Pizza, sushi, chinese" onClick={this.handlePopularSearch}></input>
                <span className="nav-close-icon"><MdClose /></span>
                {popularSearch}
              </div>
            </div>
          </div>
          <div className="nav-buttons">
            <div className="nav-sign-in">
              <button className="nav-sign-in-btn" onClick={this.handleShowModal}><strong>Sign In</strong></button>
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