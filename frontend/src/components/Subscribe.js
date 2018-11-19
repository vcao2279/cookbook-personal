import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

class TakeMyMoney extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <StripeCheckout>{this.props.children}</StripeCheckout>;
  }
}

export default TakeMyMoney;
