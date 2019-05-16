import React from 'react';
import ReactDOM from 'react-dom';
import  './index.css';

const mystyle = {
  color: "orange"
}

const App = () => {
  return(
    <div>
    <h1 style={{color: "white"}}> inline styling</h1>
    <p style={mystyle}>inline styling 2</p>
    <p className="james">from css file</p>
  </div>);
}

ReactDOM.render(<App />, document.getElementById('app'));