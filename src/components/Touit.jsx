import React, { Component } from "react";
import like from "./img/dislike-svgrepo-com.svg"
import dislike from "./img/heart-svgrepo-com.svg"

export default class Touit extends Component {
  render() {
    const { name, message } = this.props;
    return (
      <div className="touit" >
        <div className="touit-info" >
          <img src="" alt="" id="avatar" className="avatar" />
          <p className="name">
            {name}
          </p>
          <p className="message">
            {message}
          </p>
        </div>
        <div className="touit-img">
          <button  className="like-btn">
            <img src={like} alt="like" />
          </button>
          <button  className="dislike-btn">
            <img src={dislike} alt="dislike" />
          </button>
          <p className="nbr-likes"></p>
        </div>
      </div>
    );
  }
}
