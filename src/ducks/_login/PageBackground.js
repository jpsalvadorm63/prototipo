import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import pagesStyle from "assets/jss/material-dashboard-pro-react/layouts/pagesStyle.jsx";
import bgImage from "assets/img/register.jpeg";

class PageBackground extends React.Component {

  render() {
    const { classes} = this.props;
    return(
      <div
        className={classes.fullPageBackground}
        style={{ backgroundImage: "url(" + bgImage + ")" }}
      />
    )
  }
}

export default withStyles(pagesStyle)(PageBackground);
