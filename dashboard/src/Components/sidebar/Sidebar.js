import React, { Component } from 'react';
import './Sidebar.css';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Sidebar extends React.Component {
  getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? 'active' : '';
  }

  render() {
    return (
      <div className="Sidebar">
          <div className="header">
            <div className="logo">
              <span className="logo-name">Dashboard</span>
            </div>
            <div className="user">
              <span className="profile-icon"></span>
              <div className="user-info">
                <span className="user-name">Shawn Giroux</span>
                <span className="app-name">Subscription Calculator</span>
              </div>
            </div>
          </div>
          <ul>
            <li className={this.getNavLinkClass("/")}>
              <NavLink to="/">
                <FontAwesomeIcon icon="tachometer-alt" />
                Dashboard
              </NavLink>
            </li>
            <li className={this.getNavLinkClass("/About")}>
              <NavLink to="About">
                <FontAwesomeIcon icon="tools" />
                Settings
              </NavLink>
            </li>
          </ul>
      </div>
    );
  }
}
Sidebar = withRouter(Sidebar);
export default Sidebar;
