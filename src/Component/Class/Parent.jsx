import React, { Component } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

class Parent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stock: 10,
            disabled: false
        };
    }

    beliProduk = (jumlah) => {
        this.setState({
            stock: this.state.stock - jumlah,
        });
        if (this.state.stock === 1) {
            this.setState({
                disabled: true,
            });
        }
    };
    render() {
        return (<div>

            <Child1 stock={this.state.stock} fungsi={this.beliProduk.bind(this)} />
            <Child2 stock={this.state.stock} />
        </div>
        );
    }
}

export default Parent;
