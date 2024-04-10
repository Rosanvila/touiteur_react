import React, { Component } from "react";
import Touit from "./Touit";
import TouiteurAPI from "./API/TouiteurAPI";

export default class TouitContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      touit: "",
    };
  }
  componentDidMount() {
    const listTouit = new TouiteurAPI();
    listTouit.getTouit().then((data) => {
      this.setState({
        touit: data,
      });
    });
  }
  render() {
    return (
      <div className="container touit-container">
        {this.state.touit ? (
          this.state.touit.messages
            .slice(-10)
            .sort((t1, t2) => t2.ts - t1.ts)
            .map((list) => (
              <Touit
              key={list.id}
              name={list.name}message={list.message} />
            ))
        ) : (
          <div>Chargement !</div>
        )}
      </div>
    );
  }
}
