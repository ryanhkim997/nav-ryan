import React from 'react';
import axios from 'axios';
import { FaAngleLeft } from 'react-icons/fa';
import { FaShareAlt } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';
import './Intro.css';

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {}
    };
    this.fetchRestaurant = this.fetchRestaurant.bind(this);
  }

  // NOTE: Had to have intro component fetch restaurant instead of receiving prop from App because the image
  // was being fetched asynchronously and wasn't responding to CSS styling.
  fetchRestaurant() {
    let url = window.location.href;
    axios.get(`${url}info`)
    .then(({ data }) => {
      let restaurantInfo = data[0];
      this.setState({
        restaurant: restaurantInfo
      });
    })
    .catch((err) => {
      console.log('Could not fetch restaurant: ', err);
    })
  }

  componentDidMount() {
    this.fetchRestaurant();
  }

  render() {
    let { name, image, address, phone, ratings } = this.state.restaurant;
    let address1 = null;
    let stars = null;
    let starSource = null;
    let numRatings = 0;
    let good = 0;
    let timely = 0;
    let correct = 0;
    if(address && ratings) {
      address1 = address['line1'];
      stars = ratings['stars'];
      numRatings = ratings['number'];
      good = ratings['good'];
      timely = ratings['timely'];
      correct = ratings['correct'];
    } 
    if(stars === 2.5) {
      starSource = "https://s3-us-west-1.amazonaws.com/kayjayhogan/Stars/2halfstars.png";
    } else if(stars === 3) {
      starSource = "https://s3-us-west-1.amazonaws.com/kayjayhogan/Stars/3stars.png";
    } else if(stars === 3.5) {
      starSource = "https://s3-us-west-1.amazonaws.com/kayjayhogan/Stars/3halfstars.png";
    } else if(stars === 4) {
      starSource = "https://s3-us-west-1.amazonaws.com/kayjayhogan/Stars/4stars.png";
    } else if(stars === 4.5) {
      starSource = "https://s3-us-west-1.amazonaws.com/kayjayhogan/Stars/4halfstars.png";
    } else {
      starSource = "https://s3-us-west-1.amazonaws.com/kayjayhogan/Stars/5stars.png";
    }
    return(<div className="intro-app">
      <div className="intro-img-container" style={{backgroundImage: `url(${image})`}}>
        <div className="intro-icon-container">         
          <button className="intro-back-btn"><FaAngleLeft /></button>
        </div>
        <div className="intro-icon-container">
          <button className="intro-share-btn"><FaShareAlt /></button>
          <button className="intro-save-btn"><FaBookmark /></button>
        </div>
      </div>
      <div className="intro-summary">
        <div className="intro-logo-container">
          <img src="https://s3-us-west-1.amazonaws.com/kayjayhogan/default-img.png"></img>
        </div>
        <h1>{name}</h1>
        <p><span className="intro-add">{address1}</span><span>{phone}</span></p>
        <img src={starSource} className="intro-stars"></img>
        <span className="intro-num-ratings">{numRatings} ratings</span>
        <span className="intro-rating-breakdown">
          <span className="intro-percent"><strong>{good}</strong>%</span> Food was good 
          <span className="intro-percent"><strong>{timely}</strong>%</span> Delivery was on time 
          <span className="intro-percent"><strong>{correct}</strong>%</span> Order was correct
        </span>
      </div>
    </div>);
  }
}

export default Intro;