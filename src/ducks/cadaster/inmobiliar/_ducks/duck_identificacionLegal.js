import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// import FormLabel from "@material-ui/core/FormLabel";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Radio from "@material-ui/core/Radio";
// import Checkbox from "@material-ui/core/Checkbox";
import Today from "@material-ui/icons/Today";
import Datetime from "react-datetime";


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
                <h4 className={classes.cardTitle}>2. Identificación Legal - Tenencia</h4>
              </CardText>
            </CardHeader>
            <CardBody>
              <form>
                <GridContainer>
                  <GridItem xs={12} sm={4}>
                    <FormControl fullWidth className={classes.selectFormControl} >
                      <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                        Tipo de Institución (2.1)
                      </InputLabel>
                      <Select
                        MenuProps={{
                          className: classes.selectMenu
                        }}
                        classes={{
                          select: classes.select
                        }}
                        inputProps={{
                          name: "simpleSelect",
                          id: "simple-select"
                        }}
                      >
                        <MenuItem disabled classes={{ root: classes.selectMenuItem }}>
                          seleccione tipo
                        </MenuItem>
                        <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Participación Mixta
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Función Ejucutiva
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem xs={12} sm={4}>
                    <FormControl fullWidth className={classes.selectFormControl} >
                      <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                        Forma de adquisición (2.2)
                      </InputLabel>
                      <Select
                        MenuProps={{
                          className: classes.selectMenu
                        }}
                        classes={{
                          select: classes.select
                        }}
                        inputProps={{
                          name: "simpleSelect",
                          id: "simple-select"
                        }}
                      >
                        <MenuItem disabled classes={{ root: classes.selectMenuItem }}>
                          seleccione forma
                        </MenuItem>
                        <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Compra-venta
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Incautación
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Donación
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Fideicomisa
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          ...etc
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem xs={12} sm={4}>
                    <FormControl fullWidth className={classes.selectFormControl} >
                      <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                        Estado del bien Inmueble (2.4)
                      </InputLabel>
                      <Select
                        MenuProps={{
                          className: classes.selectMenu
                        }}
                        classes={{
                          select: classes.select
                        }}
                        inputProps={{
                          name: "simpleSelect",
                          id: "simple-select"
                        }}
                      >
                        <MenuItem disabled classes={{ root: classes.selectMenuItem }}>
                          seleccione estado
                        </MenuItem>
                        <MenuItem value="publico" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Público
                        </MenuItem>
                        <MenuItem value="privado" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Privado
                        </MenuItem>
                        <MenuItem value="sinuso" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Sin uso
                        </MenuItem>
                        <MenuItem value="invadido" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Invadido
                        </MenuItem>
                        <MenuItem value="posesion" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Posesión
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <h3 className={classes.title}>
                    Contratos (2.3)
                  </h3>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={3}>
                    <FormControl fullWidth className={classes.selectFormControl} >
                      <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                        Tipo de contrato
                      </InputLabel>
                      <Select
                        MenuProps={{
                          className: classes.selectMenu
                        }}
                        classes={{
                          select: classes.select
                        }}
                        inputProps={{
                          name: "simpleSelect",
                          id: "simple-select"
                        }}
                      >
                        <MenuItem disabled classes={{ root: classes.selectMenuItem }}>
                          seleccione contrato
                        </MenuItem>
                        <MenuItem value="comodato" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Comodato
                        </MenuItem>
                        <MenuItem value="arriendo" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Arriendo
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem xs={12} sm={3}>
                      <CardBody>
                        <FormControl fullWidth className={classes.selectFormControl}>
                          <Datetime
                            inputProps={{ placeholder: "Inicio de Contrato" }}
                          />
                        </FormControl>
                      </CardBody>
                  </GridItem>
                  <GridItem xs={12} sm={3}>
                    <CardBody>
                      <FormControl fullWidth>
                        <Datetime
                          inputProps={{ placeholder: "Fin de Contrato" }}
                        />
                      </FormControl>
                    </CardBody>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={3}>
                    <CustomInput
                      id="help-text"
                      labelText="Beneficiario"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text"
                      }}
                      helpText="Beneficiario"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={3}>
                    <CustomInput
                      id="help-text"
                      labelText="RUC"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text"
                      }}
                      helpText="RUC"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={3}>
                    <CustomInput
                      id="help-text"
                      labelText="Area terreno"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text"
                      }}
                      helpText="Area terreno"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={3}>
                    <CustomInput
                      id="help-text"
                      labelText="Area construcción"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text"
                      }}
                      helpText="Area construcción"
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <h3 className={classes.title}>
                    Avalúo Municipal (2.5)
                  </h3>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={4}>
                    <CustomInput
                      id="help-text"
                      labelText={"Terreno"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text"
                      }}
                      helpText="Nomenclatura del predio"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={4}>
                    <CustomInput
                      id="help-text"
                      labelText="Construccón"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text"
                      }}
                      helpText="Número de predio "
                    />
                  </GridItem>
                  <GridItem xs={12} sm={4}>
                    <CustomInput
                      id="help-text"
                      labelText={"Avalúo Total"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text"
                      }}
                      helpText="Texto que contenga el nombre del predio"
                    />
                  </GridItem>
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
