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
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then(res => res.json())
      .then(json => {
        this.setState({
          item: json,
          loaded: true
        });
      });
  }
  render() {
    const { loaded, item } = this.state;

    if (!loaded) {
      return <div>Wait...</div>;
    } else {
      return <div>Data has been loaded</div>;
    }
  }
}
