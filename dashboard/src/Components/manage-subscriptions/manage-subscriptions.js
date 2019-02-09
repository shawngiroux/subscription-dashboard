import React, { Component } from 'react';
import './manage-subscriptions.css';

export class ManageSubscriptions extends Component {
  constructor(props) {
    super (props)

  }

  render() {
    return (
      <div className="widget">
        <div class="widget-header">
          <span>Manage Subscriptions</span>
        </div>
        <div class="widget-body"></div>
      </div>
    );
  }
}

export default ManageSubscriptions;
