import React from 'react';
import Intro from './Intro/Intro.jsx';
import Navbar from './Navbar/Navbar.jsx';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div>
        <Navbar />
        <Intro />
      </div>
    );
  }
}

export default App;