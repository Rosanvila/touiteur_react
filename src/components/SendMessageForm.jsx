import React, { Component } from "react";
import TouiteurAPI from "./API/TouiteurAPI";

export default class SendMessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modif: "",
    };
  }

  componentDidMount() {
    const sendTouit = new TouiteurAPI();
    sendTouit.pushTouit().then((data) => {
      this.setState({
        modif: data,
      });
    });
  }

  render() {
    return (
      <>
        <form id="touit-form">
          <div className="name-form">
            <label htmlFor="name">name:</label>
            <input type="text" id="name" name="name" maxLength="16" required />
          </div>
          <div className="message-form">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              maxLength="256"
              required
            ></textarea>
          </div>
          <button id="form-btn" type="button">
            Envoyer Touit
          </button>
        </form>
      </>
    );
  }
}
