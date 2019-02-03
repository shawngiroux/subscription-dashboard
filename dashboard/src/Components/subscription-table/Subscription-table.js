import React, { Component } from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './Subscription-table.css';

export class SubscriptionTable extends Component {
  constructor(props) {
    super(props);

    function createBtn() {
      return document.createElement("BUTTON");
    }
    
    this.state = {
      columnDefs: [
        {headerName: "Subscription",  field: "subscription"},
        {headerName: "Cost",          field: "cost"},
        {headerName: "Renewel Date",  field: "renewelDate"},
        {headerName: "Status",        field: "status"}

      ],
      rowData: [
        {subscription: "Hulu",     cost: "$7.99",  renewelDate: "2019-01-27", status:createBtn()},
        {subscription: "Netflix",  cost: "$9.99",  renewelDate: "2019-01-21", status:createBtn()}
      ],
      onGridReady: function(params) {
        params.api.sizeColumnsToFit();
        window.addEventListener("resize", function() {
          setTimeout(function() {
            params.api.sizeColumnsToFit();
          });
        });
      }
    }
  }
  
  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }

  render() {
    return (
      <div className="widget">
        <div className="widget-header">
          <span>Your Subscriptions</span>
        </div>
        <div className="widget-body">
          <div className="subscription-table">
            <div className="ag-theme-balham">
              <AgGridReact
                enableSorting={true}
                pagination={true}
                columnDefs={this.state.columnDefs}
                rowData={this.state.rowData}
                onGridReady={this.state.onGridReady}
                onFirstDataRendered={this.onFirstDataRendered.bind(this)}
              >
              </AgGridReact>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SubscriptionTable; 
