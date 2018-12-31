import React, { Component } from 'react';
import './Sidebar.css';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Sidebar extends React.Component {
  getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? 'active' : '';
  }

  render() {
    return (
      <div className="Sidebar">
          <div className="header">
            Placeholder
          </div>
          <ul>
            <li className={this.getNavLinkClass("/")}>
              <FontAwesomeIcon icon="tachometer-alt" size="lg" />
              <NavLink to="/">DASHBOARD</NavLink>
            </li>
            <li className={this.getNavLinkClass("/About")}>
              <NavLink to="About">ABOUT</NavLink>
            </li>
          </ul>
      </div>
    );
  }
}
Sidebar = withRouter(Sidebar);
export default Sidebar;
