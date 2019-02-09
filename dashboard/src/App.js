import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Styles/widget.css';
import Sidebar from './Components/sidebar/Sidebar.js';
import ManageSubscriptions from './Components/manage-subscriptions/manage-subscriptions.js';
import { SubscriptionTable } from './Components/subscription-table/Subscription-table.js';
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
              <Route exact={true} path="/" component={SubscriptionTable}/>
              <Route path="/Manage-Subscriptions" component={ManageSubscriptions}/>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
