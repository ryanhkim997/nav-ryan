import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App.jsx';
import Intro from './Components/Intro/Intro.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import About from './Components/About/About.jsx';


ReactDOM.render(<Navbar />, document.getElementById('nav-root'));
ReactDOM.render(<Intro />, document.getElementById('intro-root'));
ReactDOM.render(<About />, document.getElementById('about-root'));