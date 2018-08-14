import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import loginPageStyle from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.jsx";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";

// core components
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CardBody from "components/Card/CardBody.jsx";

class LoginForm extends React.Component {
  render() {
    const { classes } = this.props;
    return(
      <form>
        <CardBody>
          <CustomInput
            labelText="Nombre..."
            id="firstname"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Face className={classes.inputAdornmentIcon} />
                </InputAdornment>
              )
            }}
          />
          <CustomInput
            labelText="Email..."
            id="email"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Email className={classes.inputAdornmentIcon} />
                </InputAdornment>
              )
            }}
          />
          <CustomInput
            labelText="Password"
            id="password"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <LockOutline
                    className={classes.inputAdornmentIcon}
                  />
                </InputAdornment>
              )
            }}
          />
        </CardBody>
      </form>
    );
  }
}

// Connector
export default withStyles(loginPageStyle)(LoginForm);
