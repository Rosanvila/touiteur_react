import React from "react";
import "./components/img/Plan_de-travail 1.jpg";
import Header from "./components/Header";
import SendMessageForm from "./components/SendMessageForm";
import Trending from "./components/Trending";
import TouitContainer from "./components/TouitContainer";


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header />

        <main>
          <section>
            <div className="container touiteur-container">

              <TouitContainer />
              <div id="heure-actuelle" className="heure-actuelle"></div>
            </div>
          </section>
          <div className="container trending-container">
            <Trending />
          </div>
        </main>
      </>
    );
  }
}

export default App;
