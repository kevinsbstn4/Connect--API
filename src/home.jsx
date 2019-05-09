import React, { Component } from "react";

export default class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      loaded: false
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums");
  }
  render() {
    return <div />;
  }
}
