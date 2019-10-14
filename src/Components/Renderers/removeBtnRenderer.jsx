import React, { Component } from "react";
import { PropTypes } from "prop-types";

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
        );
    }

}

RemoveBtnRenderer.propTypes = {
    reactContainer: PropTypes.object,
    data: PropTypes.object,
    api: PropTypes.object
};

const btnStyle = {
    backgroundColor: "#f27e68",
    color: "white",
    border: "none",
    height: "95%",
    width: "75%",
};
