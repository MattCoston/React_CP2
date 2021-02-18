import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "./App.css";
import ButtonAppBar from "./Components/buttonappbar";
import UsernameField from "./Components/usernamefield";
import "./Components/landingpage";
import React, { Component } from "react";
import { Switch, Router } from "react-router";
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
