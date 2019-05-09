import React, { Component } from "react";

export default class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loaded: false
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json,
          loaded: true
        });
      });
  }
  render() {
    var { loaded, items } = this.state;

    if (!loaded) {
      return <div>Wait...</div>;
    } else {
      return (
        <div>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <p> Name : {item.name}</p>
                <p>Email : {item.email}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}
