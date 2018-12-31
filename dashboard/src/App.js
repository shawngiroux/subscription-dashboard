import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/sidebar/Sidebar.js';
import About from './page2.js';
import Home from './page1.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { faTools } from '@fortawesome/free-solid-svg-icons';

library.add(faTachometerAlt, faTools)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Sidebar />
            <div className="content">
              <Route exact={true} path="/" component={Home}/>
              <Route path="/About" component={About}/>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
