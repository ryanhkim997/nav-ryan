import React from 'react';
import Intro from './Intro/Intro.jsx';
import Navbar from './Navbar/Navbar.jsx';
import About from './About/About.jsx';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Navbar />
        <Intro />
        <About />
      </div>
    );
  }
}

export default App;