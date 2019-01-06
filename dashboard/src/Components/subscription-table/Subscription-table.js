import React, { Component } from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';
import './Subscription-table.css';

export class SubscriptionTable extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
			columnDefs: [
				{headerName: "Make", field: "make"},
				{headerName: "Model", field: "model"},
				{headerName: "Price", field: "price"}

			],
			rowData: [
				{make: "Toyota", model: "Celica", price: 35000},
				{make: "Ford", model: "Mondeo", price: 32000},
				{make: "Porsche", model: "Boxter", price: 72000}
			]
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
            onFirstDataRendered={this.onFirstDataRendered.bind(this)}
          >
          </AgGridReact>
        </div>
      </div>
    );
  }
}

export default SubscriptionTable; 
