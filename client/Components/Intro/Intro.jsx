import React from 'react';
import axios from 'axios';
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
    let { name, image, address, phone } = this.state.restaurant;
    let address1 = null;
    if(address) {
      address1 = address['line1'];
    } 
    return(<div className="intro-app">
      <div className="intro-img-container" style={{backgroundImage: `url(${image})`}}></div>
      <div className="intro-summary">
        <h1>{name}</h1>
        <p><span className="intro-add">{address1}</span><span>{phone}</span></p>
      </div>
    </div>);
  }
}

export default Intro;