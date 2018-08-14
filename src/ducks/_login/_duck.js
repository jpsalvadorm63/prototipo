import React from "react";
import PropTypes from "prop-types";
import {compose} from "redux";
import { connect } from "react-redux";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import PagesHeader from "components/Header/PagesHeader.jsx";
import Footer from "components/Footer/Footer.jsx";
// styles
import pagesStyle from "assets/jss/material-dashboard-pro-react/layouts/pagesStyle.jsx";
// assets
// import bgImage from "assets/img/register.jpeg";
// local components
import LoginPage from "./LoginPage";
import PageBackground from "./PageBackground";

// Action
export const APP_LOGIN  = "APP_LOGIN";
export const APP_LOGOUT = "APP_LOGOUT";

// Action creators
const appLogin =   (data) => { return { type: APP_LOGIN,  data }};
const appLogout =  (data) => { return { type: APP_LOGOUT, data }};

// Reducer
export const reducer = (state = {logedIn:false, logedOut:true, data:{}}, action) => {
  switch(action.type) {
    case APP_LOGIN:
      return {...state, logedIn:true, logedOut: false, data: action.data};
    case APP_LOGOUT:
      return {...state, logedIn:false, logedOut: true, data: action.data};
    default :
      return state;
  }
};

// Middleware

// Thunks
export const handleAppLogin = (data) => {
  return (dispatch) => {
    dispatch(appLogin(data));
  }
};


export const handleLogout = (data) => {
  return (dispatch) => {
    dispatch(appLogout(data));
  }
};

// widget
class Pages extends React.Component {

  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    const { dispatch } = this.props;
    dispatch(handleAppLogin({}))
  };

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      1700
    );
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <div className={classes.wrapper} ref="wrapper">
          <div className={classes.fullPage}>
            <PagesHeader {...rest}/>
            <LoginPage onClick={this.handleClick}/>
            <Footer white />
            <PageBackground />
          </div>
        </div>
      </div>
    );
  }
}

Pages.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(pagesStyle),
  connect((state) => ({...state.logInfo}))
)(Pages);
