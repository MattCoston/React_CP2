import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

export default function UsernameField() {
  return (
    <div className="">
      <div>
        <TextField
          label="Username"
          id="margin-dense"
          className=""
          helperText="Enter your Username"
          margin=""
        />
        <TextField
          type="password"
          label="Password"
          id="margin-dense"
          className=""
          helperText="Enter your Password"
          margin=""
        />
      </div>
      <button onChange="">Log In</button>
    </div>
  );
}
