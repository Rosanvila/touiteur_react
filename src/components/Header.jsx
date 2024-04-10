import React, { Component } from "react";
import logo from "./img/Logo.png"; 

class Header extends Component {
  render() {
    return (
        <header className="main-header">
          <div className="container header-container">
            <h1>
              <img src={logo} alt="logo" />
              Minuit <br />
              l'heure du Touit
            </h1>
          </div>
        </header>
    );
  }
}

export default Header;
