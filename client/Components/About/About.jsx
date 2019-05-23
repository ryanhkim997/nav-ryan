import React from 'react';
import axios from 'axios';
import './About.css';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {}
    };
    this.fetchRestaurant = this.fetchRestaurant.bind(this);
  }

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
    let { name, categories, priceRange, address, phone } = this.state.restaurant;
    // handle getting categories despite async
    let listOfCategories = categories ? 
    (categories.map((category, i) => {
      if (i === categories.length - 1) {
        return <span className="about-category">{category}</span>
      } else {
        return <span className="about-category">{category}, </span>
      }
    })) : null;
    // handle getting price range despite async
    let price;
    if (priceRange === 1) {
      price = "$";
    } else if (priceRange === 2) {
      price = "$$";
    } else if (priceRange === 3) {
      price = "$$$";
    } else if (priceRange === 4) {
      price = "$$$$";
    } else {
      price = "$$$$$";
    }
    // handle getting address despite async
    let address1 = null;
    let address2 = null;
    let miles = null;
    if(address) {
      address1 = address['line1'];
      address2 = address['line2'];
      miles = address['milesAway'] + " mi";
    }

    return(
    <div className="about-app">
      <div className="about-column">
        <h3>About {name}</h3>
        {listOfCategories}
        <div className="about-price-container">
          <div className="about-price-range">{price}</div>
          <div className="about-price-base">$$$$$</div>
        </div>
        <img src="https://s3-us-west-1.amazonaws.com/kayjayhogan/map-default.png"></img>  
        <div className="about-address-container">
          <p>{address1}</p>
          <p>{address2}</p>
          <p>{miles}</p>
        </div>      
        <div className="about-phone-container">
          <p>{phone}</p>
        </div>
      </div>
      <div className="about-column">
      hi
      </div>
    </div>);
  }
}



export default About;