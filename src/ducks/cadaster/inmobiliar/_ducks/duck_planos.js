import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// import FormLabel from "@material-ui/core/FormLabel";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Radio from "@material-ui/core/Radio";
// import Checkbox from "@material-ui/core/Checkbox";
import Today from "@material-ui/icons/Today";
import Datetime from "react-datetime";
import Assignment from "@material-ui/icons/Assignment";


// @material-ui/icons
// import MailOutline from "@material-ui/icons/MailOutline";
// import Check from "@material-ui/icons/Check";
// import Contacts from "@material-ui/icons/Contacts";
// import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardText from "components/Card/CardText.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import Switch from "@material-ui/core/Switch";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import Check from "@material-ui/icons/Check";
import Table from "components/Table/Table.jsx";

// import Button from "components/CustomButtons/Button.jsx";
// import CardIcon from "components/Card/CardIcon.jsx";


import regularFormsStyle from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle";

class CDSTRInmobiliar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <GridContainer>
        <Card>
          <GridItem xs={12} sm={12} md={12}>
            <CardHeader color="primary" text>
              <CardText color="primary">
                <h4 className={classes.cardTitle}>5. Planos del Predio - Implantación</h4>
              </CardText>
            </CardHeader>
            <CardBody>
              <form>
                <GridContainer>
                  <form>
                    <GridContainer>
                      <GridItem xs={12}>
                        <Card>
                          <CardHeader fullWidth color="rose" icon>
                            <CardIcon color="rose">
                              <Assignment />
                            </CardIcon>
                            <h4 className={classes.cardIconTitle}>Ubicación</h4>
                          </CardHeader>
                          <CardBody>
                            F o t o s  ........................................................... ........................................
                          </CardBody>
                        </Card>
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12}>
                        <Card>
                          <CardHeader fullWidth color="rose" icon>
                            <CardIcon color="rose">
                              <Assignment />
                            </CardIcon>
                            <h4 className={classes.cardIconTitle}>Implantación de plantas para cada piso</h4>
                          </CardHeader>
                          <CardBody>
                            F o t o s  ........................................................... ........................................
                          </CardBody>
                        </Card>
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12}>
                        <Card>
                          <CardHeader fullWidth color="rose" icon>
                            <CardIcon color="rose">
                              <Assignment />
                            </CardIcon>
                            <h4 className={classes.cardIconTitle}>Identificación de propiedad horizontal</h4>
                          </CardHeader>
                          <CardBody>
                            F o t o s  ........................................................... ........................................
                          </CardBody>
                        </Card>
                      </GridItem>
                    </GridContainer>
                  </form>
                </GridContainer>
              </form>
            </CardBody>
          </GridItem>
        </Card>
      </GridContainer>

    )
  }
}

export default withStyles(regularFormsStyle)(CDSTRInmobiliar);
