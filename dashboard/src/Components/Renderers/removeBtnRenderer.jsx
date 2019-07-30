import React, {Component} from "react";

export default class RemoveBtnRenderer extends Component {
    removeRow = () => {
        let rows = [this.props.data];
        this.props.api.updateRowData({ remove: rows });
    }

    render() {
        return (
            <button style={ btnStyle } onClick={this.removeRow}>x</button>
        )
    }

};

const btnStyle = {
    backgroundColor: "red",
    fontWeight: "bold",
    color: "white",
    border: "none",
    width: "2em",
    height: "2em",
    borderRadius: "25%",
    textAlign: "center",
    padding: "0px",
    margin: "0px"
}