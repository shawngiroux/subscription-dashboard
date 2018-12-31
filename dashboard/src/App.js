import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './page2.js';
import Home from './page1.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="About">About</Link></li>
          </ul>
      </div>
    );
  }
}

//ReactDOM.render((
//   <Router history = {browserHistory}>
//      <Route path = "/" component = {App}>
//         <IndexRoute component = {Home} />
//         <Route path = "home" component = {Home} />
//         <Route path = "about" component = {About} />
//      </Route>
//   </Router>
//), document.getElementById('app'))

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Route exact={true} path="/" component={Home}/>
            <Route path="/About" component={About}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
