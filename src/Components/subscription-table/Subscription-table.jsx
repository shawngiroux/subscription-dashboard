import React, { Component } from "react";
import DashboardTable from "./../DashboardTable.jsx";
import RemoveBtnRenderer from "../Renderers/removeBtnRenderer.jsx";

export class SubscriptionTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [
                { headerName: "Subscription", field: "subscription" },
                { headerName: "Cost", field: "cost" },
                { headerName: "Renewel Date", field: "renewelDate" },
                { headerName: "Status",
                    field: "status",
                    cellRenderer: "removeBtnRenderer",
                }
            ],
            rowData: [
                { subscription: "Hulu", cost: "$7.99", renewelDate: "2019-01-27" },
                { subscription: "Netflix", cost: "$9.99", renewelDate: "2019-01-21" }
            ],
            frameworkComponents: {
                removeBtnRenderer: RemoveBtnRenderer
            },
        };
    }

    render() {
        return (
            <DashboardTable
                columnDefs={ this.state.columnDefs }
                rowData={ this.state.rowData }
                frameworkComponents={ this.state.frameworkComponents }
            >
            </DashboardTable>
        );
    }
}

export default SubscriptionTable;
