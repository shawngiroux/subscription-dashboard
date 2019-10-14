import React, { Component } from "react";
import { SubscriptionTable } from "../subscription-table/Subscription-table.jsx";
import "./manage-subscriptions.css";

export class ManageSubscriptions extends Component {
    render() {
        return (
            <div className="container">
                <div className="container-item">
                    <SubscriptionTable/>
                </div>
                <div className="container-item">
                    <div className="widget">
                        <div className="widget-header">
                            <span>Manage Subscriptions</span>
                        </div>
                        <div className="widget-body subscriptions">
                            <div className="input-group">
                                <span>Add Subscription</span>
                                <input type="text"></input>
                            </div>
                            <button className="btn">Add Subscription</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ManageSubscriptions;
