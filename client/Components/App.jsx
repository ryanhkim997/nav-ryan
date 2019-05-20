import React from 'react';
import Intro from './Intro/Intro.jsx';
import Navbar from './Navbar/Navbar.jsx';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {}
    };
    // this.fetchRestaurant = this.fetchRestaurant.bind(this);
  }

  // fetchRestaurant() {
  //   let url = window.location.href;
  //   axios.get(`${url}info`)
  //   .then(({ data }) => {
  //     let restaurantInfo = data[0];
  //     this.setState({
  //       restaurant: restaurantInfo
  //     });
  //   })
  //   .catch((err) => {
  //     console.log('Could not fetch restaurant: ', err);
  //   })
  // }

  // componentDidMount() {
  //   this.fetchRestaurant();
  // }

  render() {
    return(
      <div>
        <Navbar />
        <Intro /*restaurant={this.state.restaurant}*/ />
      </div>
    );
  }
}

export default App;