import React, {Component} from "react";

export default class RemoveBtnRenderer extends Component {
    constructor(props) {
        super(props);

        // Setting container style properties
        this.props.reactContainer.style.display = "flex";
        this.props.reactContainer.style.flexDirection = "center";
        this.props.reactContainer.style.justifyContent = "center";
    }

    removeRow = () => {
        let rows = [this.props.data];
        this.props.api.updateRowData({ remove: rows });
    }

    render() {
        return (
            <button style={ btnStyle } onClick={this.removeRow}>Remove</button>
        )
    }

};

const btnStyle = {
    backgroundColor: "#f27e68",
    color: "white",
    border: "none",
    height: "95%",
    width: "75%",
}