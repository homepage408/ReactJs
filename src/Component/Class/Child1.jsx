import React, { Component } from "react";

class Parent extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    minBeli = 1;
    render() {
        return (
            <div>
                <h3>Child Component</h3>
                <p>Stock Produk : {this.props.stock}</p>
                <button
                    onClick={() => this.props.fungsi(this.minBeli)}>Beli</button>
            </div>
        );
    }
}

export default Parent;
