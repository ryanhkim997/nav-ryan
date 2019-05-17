import React from 'react';
import { GoSearch } from 'react-icons/go';
import { MdClose } from 'react-icons/md';
import './Navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
    <div className="nav-navbar">
      <div className="nav-brand">
        <img src="https://s3-us-west-1.amazonaws.com/kayjayhogan/GH.png"></img>
      </div>
      <div className="nav-search">
        <div className="nav-search-address"></div>
        <div className="nav-search-input-container">
        <div className="test">
          <span className="search-icon"><GoSearch /></span>          
          <input></input>
          <span className="close-icon"><MdClose /></span>
        </div>
        </div>
      </div>
    </div>);
  }
}

export default Navbar;