import "./App.css";
import "./Components/landingpage";
import React, { Component } from "react";

class App extends Component {
  state = {
    loggedIn: false,
  };
  changeState = () => {
    this.setState({ loggedIn: !this.state.loggedIn });
    console.log(this.state.loggedIn);
  };

  render() {
    return <div className="App">HEY THERE</div>;
  }
}

export default App;
