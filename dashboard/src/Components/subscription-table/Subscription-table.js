import React, { Component } from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './Subscription-table.css';

export class SubscriptionTable extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      columnDefs: [
        {headerName: "Subscription",  field: "subscription",  sortable: true},
        {headerName: "Cost",          field: "cost",          sortable: true},
        {headerName: "Renewel Date",  field: "renewelDate",   sortable: true},
        {headerName: "Status",        field: "status",        sortable: true}

      ],
      rowData: [
        {subscription: "Hulu",     cost: "$7.99",  renewelDate: "2019-01-27"},
        {subscription: "Netflix",  cost: "$9.99",  renewelDate: "2019-01-21"}
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
      <div className="subscription-table">
        <div className="ag-theme-balham">
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            onGridReady={this.state.onGridReady}
            onFirstDataRendered={this.onFirstDataRendered.bind(this)}
          >
          </AgGridReact>
        </div>
      </div>
    );
  }
}

export default SubscriptionTable; 
