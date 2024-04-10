import React, { Component } from "react";

export default class Trending extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="touit">
            <div className="touit-info">
              <img src="" alt="" className="avatar" />
              <p className="name"></p>
              <p className="message"></p>
            </div>
            <div className="touit-img">
              <button className="like-btn">
                <img src="./img/heart-svgrepo-com.svg" alt="like" />
              </button>
              <button className="dislike-btn">
                <img src="./img/dislike-svgrepo-com.svg" alt="dislike" />
              </button>
              <p className="nbr-likes"></p>
            </div>
          </div>
          <h2>Tendance !</h2>
          <div className="words-container">
            <p className="trending-words"></p>
          </div>
        </section>
      </div>
    );
  }
}
