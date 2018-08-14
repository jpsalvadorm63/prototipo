import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// import FormLabel from "@material-ui/core/FormLabel";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Radio from "@material-ui/core/Radio";
// import Checkbox from "@material-ui/core/Checkbox";


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
                <h4 className={classes.cardTitle}>1. Ubicación Geográfica</h4>
              </CardText>
            </CardHeader>
            <CardBody>
              <form>

                <GridContainer>
                  <h3 className={classes.title}>
                    Denominación y Catastro
                  </h3>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12}>
                    <CustomInput
                      id="help-text"
                      labelText="Nombre del predio (1.5)"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text"
                      }}
                      helpText="Nombre del Inmueble"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={6}>
                    <CustomInput
                      id="help-text"
                      labelText="Código Catastral (1.1)"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text"
                      }}
                      helpText="Código Catastral de Inmobiliar"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={6}>
                    <CustomInput
                      id="help-text"
                      labelText="Clave Catastral Municipal, Inmobiliar (1.3)"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text"
                      }}
                      helpText="Clave Catastral Municipal"
                    />
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <h3 className={classes.title}>
                    Dirección <small><i>(Inmobiliar 1.2)</i></small>
                  </h3>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={6}>
                    <FormControl fullWidth className={classes.selectFormControl} >
                      <InputLabel htmlFor="select-provincia" className={classes.selectLabel}>
                        Provincia
                      </InputLabel>
                      <Select
                        MenuProps={{
                          className: classes.selectMenu
                        }}
                        classes={{
                          select: classes.select
                        }}
                        inputProps={{
                          name: "selectProvincia",
                          id: "select-provincia"
                        }}
                      >
                        <MenuItem disabled classes={{ root: classes.selectMenuItem }}>
                          provincias
                        </MenuItem>
                        <MenuItem value="1" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Azuay
                        </MenuItem>
                        <MenuItem value="9" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Guayas
                        </MenuItem>
                        <MenuItem value="17" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Pichincha
                        </MenuItem>
                        <MenuItem value="99" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          ... otras
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem xs={12} sm={6}>
                    <FormControl fullWidth className={classes.selectFormControl} >
                      <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                        Cantón
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
                          cantones
                        </MenuItem>
                        <MenuItem value="1" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Biblian
                        </MenuItem>
                        <MenuItem value="9" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Guayaquil
                        </MenuItem>
                        <MenuItem value="17" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Pedro Moncayo
                        </MenuItem>
                        <MenuItem value="99" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          ... otras
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={4}>
                    <CustomInput
                      id="help-text"
                      labelText={"Parroquia"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text"
                      }}
                      helpText="Texto basado en dígitos ..."
                    />
                  </GridItem>
                  <GridItem xs={12} sm={4}>
                    <CustomInput
                      id="help-text"
                      labelText={"Ciudad"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text"
                      }}
                      helpText="Texto basado en dígitos ..."
                    />
                  </GridItem>
                  <GridItem xs={12} sm={4}>
                    <CustomInput
                      id="help-text"
                      labelText={"Código Postal"}
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
                <GridContainer>
                  <GridItem xs={12} sm={12}>
                    <CustomInput
                      id="help-text"
                      labelText={"Calle pricipal"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text"
                      }}
                      helpText="Calle principal"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={4}>
                    <CustomInput
                      id="help-text"
                      labelText={"Nomenclatura"}
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
                      labelText="Número de predio (1.4)"
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
                      labelText={"Placa"}
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
                <GridContainer>
                  <h3 className={classes.title}>
                    Coordenadas: SIRGAS (WGS84), UTM, 17S
                  </h3>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={4}>
                    <CustomInput
                      id="help-text"
                      labelText={"Este (1.6)"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text"
                      }}
                      helpText="Coordenada Geográfica Norte"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={4}>
                    <CustomInput
                      id="help-text"
                      labelText={"Norte (1.6)"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text"
                      }}
                      helpText="Coordenada Geográfica Norte"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={4}>
                    <CustomInput
                      id="help-text"
                      labelText={"Altura Elipsoidal (1.6)"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text"
                      }}
                      helpText="altura elipsoidal"
                    />
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <h3 className={classes.title}>
                    1.7 El predio es
                  </h3>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      Zona
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={4}>
                    <FormControl fullWidth className={classes.selectFormControl} >
                      <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                        Seleccione Zona
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
                          Urbana
                        </MenuItem>
                        <MenuItem value="1" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Rural
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem xs={12} sm={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      Uso original
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={4}>
                    <FormControl fullWidth className={classes.selectFormControl} >
                      <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                        Seleccione Uso
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
                          Auditorio
                        </MenuItem>
                        <MenuItem value="1" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Departamento
                        </MenuItem>
                        <MenuItem value="1" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Infraestructura eléctrica}
                        </MenuItem>
                        <MenuItem value="1" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Oficina
                        </MenuItem>
                        <MenuItem value="1" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          ...etc
                        </MenuItem>
                      </Select>
                    </FormControl>
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
