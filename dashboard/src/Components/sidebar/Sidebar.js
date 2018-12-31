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
            <span className="profile-icon"></span>
            <div className="user-info">
              <span className="user-name">Shawn Giroux</span>
              <span className="app-name">Subscription Calculator</span>
            </div>
          </div>
          <ul>
            <li className={this.getNavLinkClass("/")}>
              <NavLink to="/">
                <FontAwesomeIcon icon="tachometer-alt" size="md" />
                Dashboard
              </NavLink>
            </li>
            <li className={this.getNavLinkClass("/About")}>
              <NavLink to="About">
                <FontAwesomeIcon icon="tools" size="md" />
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
