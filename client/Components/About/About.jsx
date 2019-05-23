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
    let { name, categories, priceRange } = this.state.restaurant;
    let listOfCategories = categories ? 
    (categories.map((category, i) => {
      if (i === categories.length - 1) {
        return <span className="about-category">{category}</span>
      } else {
        return <span className="about-category">{category}, </span>
      }
    })) : null;

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

    return(
    <div className="about-app">
      <h3>About {name}</h3>
      {listOfCategories}
      <div className="about-price-container">
        <div className="about-price-range">{price}</div>
        <div className="about-price-base">$$$$$</div>
      </div>
    </div>);
  }
}



export default About;