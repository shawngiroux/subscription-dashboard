import React, { Component } from "react";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './subscription-table/Subscription-table.css';

class DashboardTable extends Component {
    state = {
        columnDefs: this.props.columnDefs,
        rowData: this.props.rowData,
        frameworkComponents: this.props.frameworkComponents,
        onGridReady: function (params) {
            params.api.sizeColumnsToFit();
            window.addEventListener("resize", function () {
                setTimeout(function () {
                    params.api.sizeColumnsToFit();
                });
            });
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
                                enableSorting={ true }
                                pagination={ true }
                                columnDefs={ this.state.columnDefs }
                                rowData={ this.state.rowData }
                                onGridReady={ this.state.onGridReady }
                                frameworkComponents={ this.state.frameworkComponents }
                                onFirstDataRendered={ this.onFirstDataRendered.bind(this) }
                            >
                            </AgGridReact>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardTable;