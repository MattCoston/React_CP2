import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import UsernameField from "./usernamefield";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(8),
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
  },
}));
function SetState() {
  const [logIn, setLogIn] = useState(false);
}
function ButtonAppBar() {
  const classes = useStyles();

  function handleSubmit() {
    console.log("STUFF HERE");
    return <UsernameField />;
  }
  return (
    <div className={classes.root}>
      <Card className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Login Page
            </Typography>
            <div>
              <Button color="inherit" onClick={() => handleSubmit()}>
                Login
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </Card>
    </div>
  );
}

export default ButtonAppBar;
