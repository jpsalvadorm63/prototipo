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
                <h4 className={classes.cardTitle}>4. Características de Construcciones</h4>
              </CardText>
            </CardHeader>
            <CardBody>
              <form>
                <GridContainer>
                  <GridItem xs={12}>
                    <Card>
                      <CardHeader color="rose" icon>
                        <CardIcon color="rose">
                          <Assignment />
                        </CardIcon>
                        <h4 className={classes.cardIconTitle}>Bloques y pisos</h4>
                      </CardHeader>
                      <CardBody>
                        <Table
                          tableHeaderColor="primary"
                          tableHead={["Bloque", "Piso", "Nombre", "Código", "Superficie"]}
                          tableData={[
                            ["B01", "P 01",  "Planta baja",  "B01 P01", "233"],
                            ["",    "P 02",  "Primer piso",  "B01 P02", "230"],
                            ["",    "P 03",  "Segundo piso", "B01 P03", "235"],
                            ["",    "S 01",  "Subsuelo 1",   "B01 S01", "201"],
                            ["B02", "P 01",  "Planta baja",  "B02 P01", "237"]
                          ]}
                          coloredColls={[3]}
                          colorsColls={["primary"]}
                        />
                      </CardBody>
                    </Card>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12}>
                    <Card>
                      <CardHeader color="rose" icon>
                        <CardIcon color="rose">
                          <Assignment />
                        </CardIcon>
                        <h4 className={classes.cardIconTitle}>4.1 Principales materiales empleados en estructura</h4>
                      </CardHeader>
                      <CardBody>
                        <GridContainer>
                          <GridItem xs={12} sm={3}>
                            <FormControl fullWidth className={classes.selectFormControl} >
                              <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                                Mampostería soportante
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
                                  Seleccione
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  Adobe
                                </MenuItem>
                                <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Bloque
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Ladrillo
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Piedra
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  ...otros
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </GridItem>
                          <GridItem xs={12} sm={3}>
                            <FormControl fullWidth className={classes.selectFormControl} >
                              <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                                Columnas
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
                                  Seleccione
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  No tiene
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  Acero
                                </MenuItem>
                                <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Hierro perfil IPAG
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Hormigón
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  ...otros
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </GridItem>
                          <GridItem xs={12} sm={3}>
                            <FormControl fullWidth className={classes.selectFormControl} >
                              <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                                Vigas
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
                                  Seleccione
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  No tiene
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  Acero
                                </MenuItem>
                                <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Hierro perfil IPAG
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Hormigón
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  ...otros
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </GridItem>
                          <GridItem xs={12} sm={3}>
                            <FormControl fullWidth className={classes.selectFormControl} >
                              <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                                Contrapiso
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
                                  Seleccione
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  No tiene
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  Hormigón simple
                                </MenuItem>
                                <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Ladrillo visto
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Tierra
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Caña
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </GridItem>
                          <GridItem xs={12} sm={3}>
                            <FormControl fullWidth className={classes.selectFormControl} >
                              <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                                Entrepiso
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
                                  Seleccione
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  No tiene
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  Acero hormigón
                                </MenuItem>
                                <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Madera común
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Madera procesada fina
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  ...otras opciones
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </GridItem>
                          <GridItem xs={12} sm={3}>
                            <FormControl fullWidth className={classes.selectFormControl} >
                              <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                                Pared
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
                                  Seleccione
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  No tiene
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  Bahareque
                                </MenuItem>
                                <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Bloque
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Caña
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Ferro cemento
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  ...otras opciones
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </GridItem>
                          <GridItem xs={12} sm={3}>
                            <FormControl fullWidth className={classes.selectFormControl} >
                              <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                                Cubierta
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
                                  Seleccione
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  No tiene
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  Hierro perfil IPAG
                                </MenuItem>
                                <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Madera común
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  madera procesada fina
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Loza de hormigón armado
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  ...otras opciones
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </GridItem>
                          <GridItem xs={12} sm={3}>
                            <FormControl fullWidth className={classes.selectFormControl} >
                              <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                                Escaleras
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
                                  Seleccione
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  No tiene
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  Hierro perfil IPAG
                                </MenuItem>
                                <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Ladrillo
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Piedra
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Hormigón armado
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  ...otras opciones
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </GridItem>
                        </GridContainer>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12}>
                    <Card>
                      <CardHeader color="rose" icon>
                        <CardIcon color="rose">
                          <Assignment />
                        </CardIcon>
                        <h4 className={classes.cardIconTitle}>4.2 Materiales empleados en acabados</h4>
                      </CardHeader>
                      <CardBody>
                        <GridContainer>
                          <GridItem xs={12} sm={3}>
                            <FormControl fullWidth className={classes.selectFormControl} >
                              <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                                Pisos
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
                                  Seleccione
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  No tiene
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  Baldosas
                                </MenuItem>
                                <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Cerámica
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Encementado
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Flotante
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  ...otras opciones
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </GridItem>
                          <GridItem xs={12} sm={3}>
                            <FormControl fullWidth className={classes.selectFormControl} >
                              <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                                Puertas
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
                                  Seleccione
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  No tiene
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  Aluminio - vidrio 6mm
                                </MenuItem>
                                <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Hierro total
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Madera panelada
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Madera tamborada
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  ...otras opciones
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </GridItem>
                          <GridItem xs={12} sm={3}>
                            <FormControl fullWidth className={classes.selectFormControl} >
                              <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                                Ventanas
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
                                  Seleccione
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  No tiene
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  Aluminio
                                </MenuItem>
                                <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Hierro
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Madera común
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Madera procesada fina
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  ...otras opciones
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </GridItem>
                          <GridItem xs={12} sm={3}>
                            <FormControl fullWidth className={classes.selectFormControl} >
                              <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                                Vidrios
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
                                  Seleccione
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  No tiene
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  Malla
                                </MenuItem>
                                <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Vidrio de 4 mm
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Vidrio de 6 mm
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Vidrio templado de 10 - 12 mm
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  ...otras opciones
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </GridItem>
                          <GridItem xs={12} sm={3}>
                            <FormControl fullWidth className={classes.selectFormControl} >
                              <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                                Revestimiento de pared
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
                                  Seleccione
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  No tiene
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  Calcimina
                                </MenuItem>
                                <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Pintura de caucho
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Pintura de esmalte
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Graniplast
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  ...otras opciones
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </GridItem>
                          <GridItem xs={12} sm={3}>
                            <FormControl fullWidth className={classes.selectFormControl} >
                              <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                                Enlucidos
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
                                  Seleccione
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  No tiene
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  Arena - cal
                                </MenuItem>
                                <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Arena - cemento
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Tierra
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  ...otras opciones
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </GridItem>
                          <GridItem xs={12} sm={3}>
                            <FormControl fullWidth className={classes.selectFormControl} >
                              <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                                Tumbados
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
                                  Seleccione
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  No tiene
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  Caña enlucida
                                </MenuItem>
                                <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Carrizo enlucida
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Fibra mineral Armstrong
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Gypsum
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  ...otras opciones
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </GridItem>
                          <GridItem xs={12} sm={3}>
                            <FormControl fullWidth className={classes.selectFormControl} >
                              <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                                Cubiertas
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
                                  Seleccione
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  No tiene
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  Arena-cemento
                                </MenuItem>
                                <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Asbesto Cemento
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Cady-paja
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Cerámica
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  ...otras opciones
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </GridItem>
                          <GridItem xs={12} sm={3}>
                            <FormControl fullWidth className={classes.selectFormControl} >
                              <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                                Closet
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
                                  Seleccione
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  No tiene
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  Madera panelada
                                </MenuItem>
                                <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Madera tamborada
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  MDF
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  ...otras opciones
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </GridItem>
                          <GridItem xs={12} sm={3}>
                            <FormControl fullWidth className={classes.selectFormControl} >
                              <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                                Elementos decorativos
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
                                  Seleccione
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  No tiene
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  Pared decorativa de madera
                                </MenuItem>
                                <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Pared decorativa de mármol
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Pared decorativa de Alucobond
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  ...otras opciones
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </GridItem>
                          <GridItem xs={12} sm={3}>
                            <FormControl fullWidth className={classes.selectFormControl} >
                              <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                                Cocina
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
                                  Seleccione
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  No tiene
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  Bajo
                                </MenuItem>
                                <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Media
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Normal
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Grande
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Extra grande
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  ...otras opciones
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </GridItem>
                        </GridContainer>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12}>
                    <Card>
                      <CardHeader color="rose" icon>
                        <CardIcon color="rose">
                          <Assignment />
                        </CardIcon>
                        <h4 className={classes.cardIconTitle}>4.3 Disponibilidad de baños, instalaciones eléctricas sanitarias y especiales</h4>
                      </CardHeader>
                      <CardBody>
                        <GridContainer>
                          <GridItem xs={12} sm={4}>
                            <FormControl fullWidth className={classes.selectFormControl} >
                              <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                                Baños
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
                                  Seleccione
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  No tiene
                                </MenuItem>
                                <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  1/2 Baño
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  1 Baño
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  1.5 Baños
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  2.5 Baños
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  ...otras opciones
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </GridItem>
                          <GridItem xs={12} sm={4}>
                            <div className={classes.checkboxAndRadio}>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    tabIndex={-1}
                                    checkedIcon={<Check className={classes.checkedIcon} />}
                                    icon={<Check className={classes.uncheckedIcon} />}
                                    classes={{
                                      checked: classes.checked
                                    }}
                                  />
                                }
                                classes={{
                                  label: classes.label
                                }}
                                label="Aceras"
                              />
                            </div>
                          </GridItem>
                          <GridItem xs={12} sm={4}>
                            <div className={classes.checkboxAndRadio}>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    tabIndex={-1}
                                    checkedIcon={<Check className={classes.checkedIcon} />}
                                    icon={<Check className={classes.uncheckedIcon} />}
                                    classes={{
                                      checked: classes.checked
                                    }}
                                  />
                                }
                                classes={{
                                  label: classes.label
                                }}
                                label="Sanitarias"
                              />
                            </div>
                          </GridItem>
                          <GridItem xs={12} sm={4}>
                            <div className={classes.checkboxAndRadio}>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    tabIndex={-1}
                                    checkedIcon={<Check className={classes.checkedIcon} />}
                                    icon={<Check className={classes.uncheckedIcon} />}
                                    classes={{
                                      checked: classes.checked
                                    }}
                                  />
                                }
                                classes={{
                                  label: classes.label
                                }}
                                label="Aire acondicionado"
                              />
                            </div>
                          </GridItem>
                          <GridItem xs={12} sm={4}>
                            <div className={classes.checkboxAndRadio}>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    tabIndex={-1}
                                    checkedIcon={<Check className={classes.checkedIcon} />}
                                    icon={<Check className={classes.uncheckedIcon} />}
                                    classes={{
                                      checked: classes.checked
                                    }}
                                  />
                                }
                                classes={{
                                  label: classes.label
                                }}
                                label="Ascensor"
                              />
                            </div>
                          </GridItem>
                          <GridItem xs={12} sm={4}>
                            <div className={classes.checkboxAndRadio}>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    tabIndex={-1}
                                    checkedIcon={<Check className={classes.checkedIcon} />}
                                    icon={<Check className={classes.uncheckedIcon} />}
                                    classes={{
                                      checked: classes.checked
                                    }}
                                  />
                                }
                                classes={{
                                  label: classes.label
                                }}
                                label="Montacargas"
                              />
                            </div>
                          </GridItem>
                          <GridItem xs={12} sm={4}>
                            <div className={classes.checkboxAndRadio}>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    tabIndex={-1}
                                    checkedIcon={<Check className={classes.checkedIcon} />}
                                    icon={<Check className={classes.uncheckedIcon} />}
                                    classes={{
                                      checked: classes.checked
                                    }}
                                  />
                                }
                                classes={{
                                  label: classes.label
                                }}
                                label="Circuito cerrado de TV"
                              />
                            </div>
                          </GridItem>
                          <GridItem xs={12} sm={4}>
                            <div className={classes.checkboxAndRadio}>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    tabIndex={-1}
                                    checkedIcon={<Check className={classes.checkedIcon} />}
                                    icon={<Check className={classes.uncheckedIcon} />}
                                    classes={{
                                      checked: classes.checked
                                    }}
                                  />
                                }
                                classes={{
                                  label: classes.label
                                }}
                                label="Sistema alternativo de energía"
                              />
                            </div>
                          </GridItem>
                          <GridItem xs={12} sm={4}>
                            <div className={classes.checkboxAndRadio}>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    tabIndex={-1}
                                    checkedIcon={<Check className={classes.checkedIcon} />}
                                    icon={<Check className={classes.uncheckedIcon} />}
                                    classes={{
                                      checked: classes.checked
                                    }}
                                  />
                                }
                                classes={{
                                  label: classes.label
                                }}
                                label="Sistema contra incendios"
                              />
                            </div>
                          </GridItem>
                          <GridItem xs={12} sm={4}>
                            <div className={classes.checkboxAndRadio}>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    tabIndex={-1}
                                    checkedIcon={<Check className={classes.checkedIcon} />}
                                    icon={<Check className={classes.uncheckedIcon} />}
                                    classes={{
                                      checked: classes.checked
                                    }}
                                  />
                                }
                                classes={{
                                  label: classes.label
                                }}
                                label="Sistema de gas centralizado"
                              />
                            </div>
                          </GridItem>
                          <GridItem xs={12} sm={4}>
                            <div className={classes.checkboxAndRadio}>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    tabIndex={-1}
                                    checkedIcon={<Check className={classes.checkedIcon} />}
                                    icon={<Check className={classes.uncheckedIcon} />}
                                    classes={{
                                      checked: classes.checked
                                    }}
                                  />
                                }
                                classes={{
                                  label: classes.label
                                }}
                                label="Sistema de ventilación"
                              />
                            </div>
                          </GridItem>
                          <GridItem xs={12} sm={4}>
                            <div className={classes.checkboxAndRadio}>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    tabIndex={-1}
                                    checkedIcon={<Check className={classes.checkedIcon} />}
                                    icon={<Check className={classes.uncheckedIcon} />}
                                    classes={{
                                      checked: classes.checked
                                    }}
                                  />
                                }
                                classes={{
                                  label: classes.label
                                }}
                                label="Sistema de voz y datos"
                              />
                            </div>
                          </GridItem>
                        </GridContainer>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12}>
                    <Card>
                      <CardHeader color="rose" icon>
                        <CardIcon color="rose">
                          <Assignment />
                        </CardIcon>
                        <h4 className={classes.cardIconTitle}>4.4 Caracterízación de las construcciones</h4>
                      </CardHeader>
                      <CardBody>
                        <GridContainer>
                          <GridItem xs={12} sm={3}>
                            <FormControl fullWidth className={classes.selectFormControl} >
                              <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                                Bloque Piso
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
                                  B01 S01
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  B01 P01
                                </MenuItem>
                                <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  B01 P02
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  B01 P03
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </GridItem>
                          <GridItem xs={12} sm={4}>
                            <FormControl fullWidth className={classes.selectFormControl} >
                              <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                                Condicion Física
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
                                  seleccione
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  En construcción
                                </MenuItem>
                                <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Sin modificación
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Reconstrucción
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </GridItem>
                          <GridItem xs={12} sm={4}>
                            <FormControl fullWidth className={classes.selectFormControl} >
                              <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                                Valor Cultural
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
                                  seleccione
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  No tiene
                                </MenuItem>
                                <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Valor histórico
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Valor arquitectónico
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </GridItem>
                          <GridItem xs={12} sm={3}>
                          </GridItem>
                          <GridItem xs={12} sm={4}>
                            <FormControl fullWidth className={classes.selectFormControl} >
                              <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                                Estado de conservación
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
                                  seleccione
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  Malo
                                </MenuItem>
                                <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Regular
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Bueno
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Muy bueno
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </GridItem>
                          <GridItem xs={12} sm={4}>
                            <FormControl fullWidth className={classes.selectFormControl} >
                              <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                                Uso del piso
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
                                  seleccione
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  Andenes-terminales
                                </MenuItem>
                                <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Asistencia social
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Bancario financiero
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  ...otros usos
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </GridItem>
                          <GridItem xs={12} sm={3}>
                          </GridItem>
                          <GridItem xs={12} sm={9}>
                            <Table
                              tableHeaderColor="primary"
                              tableHead={["Año de Construcción", "Institución que ocupa", "Construcción", "Número de funcionarios"]}
                              tableData={[
                                ["1985", "Fiscalía...", "Comunal | Exclusiva", 33],
                              ]}
                              coloredColls={[3]}
                              colorsColls={["primary"]}
                            />
                          </GridItem>

                        </GridContainer>
                        <GridContainer>
                          <GridItem xs={12} sm={3}>
                            <FormControl fullWidth className={classes.selectFormControl} >
                              <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                                Bloque Piso
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
                                  B01 S01
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  B01 P01
                                </MenuItem>
                                <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  B01 P02
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  B01 P03
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </GridItem>
                          <GridItem xs={12} sm={4}>
                            <FormControl fullWidth className={classes.selectFormControl} >
                              <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                                Condicion Física
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
                                  seleccione
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  En construcción
                                </MenuItem>
                                <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Sin modificación
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Reconstrucción
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </GridItem>
                          <GridItem xs={12} sm={4}>
                            <FormControl fullWidth className={classes.selectFormControl} >
                              <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                                Valor Cultural
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
                                  seleccione
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  No tiene
                                </MenuItem>
                                <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Valor histórico
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Valor arquitectónico
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </GridItem>
                          <GridItem xs={12} sm={3}>
                          </GridItem>
                          <GridItem xs={12} sm={4}>
                            <FormControl fullWidth className={classes.selectFormControl} >
                              <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                                Estado de conservación
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
                                  seleccione
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  Malo
                                </MenuItem>
                                <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Regular
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Bueno
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Muy bueno
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </GridItem>
                          <GridItem xs={12} sm={4}>
                            <FormControl fullWidth className={classes.selectFormControl} >
                              <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                                Uso del piso
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
                                  seleccione
                                </MenuItem>
                                <MenuItem classes={{ root: classes.selectMenuItem }}>
                                  Andenes-terminales
                                </MenuItem>
                                <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Asistencia social
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  Bancario financiero
                                </MenuItem>
                                <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                                  ...otros usos
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </GridItem>
                          <GridItem xs={12} sm={3}>
                          </GridItem>
                          <GridItem xs={12} sm={9}>
                            <Table
                              tableHeaderColor="primary"
                              tableHead={["Año de Construcción", "Institución que ocupa", "Construcción", "Número de funcionarios"]}
                              tableData={[
                                ["1985", "Fiscalía...", "Comunal | Exclusiva", 33],
                              ]}
                              coloredColls={[3]}
                              colorsColls={["primary"]}
                            />
                          </GridItem>
                        </GridContainer>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12}>
                    <Card>
                      <CardHeader color="rose" icon>
                        <CardIcon color="rose">
                          <Assignment />
                        </CardIcon>
                        <h4 className={classes.cardIconTitle}>4.5 Obras complementarias y obras adheridas</h4>
                      </CardHeader>
                      <CardBody>
                        <Table
                          tableHeaderColor="primary"
                          tableHead={["Detalle de la obra complementaria", "Unidad", "Largo", "Ancho", "Altura", "Total", "Estado", "Año", "Uso"]}
                          tableData={[
                            ["Baño sauna", "m3", "4", "5", "3", "60", "OK", "1985", "Comunal"],
                            ["Baño turco", "m3", "4", "5", "3", "60", "OK", "1985", "Exclusivo"],
                            ["Piscina", "m2", "10", "3", "", "30", "SIN USO", "1987", "Sin uso"]
                          ]}
                          coloredColls={[3]}
                          colorsColls={["primary"]}
                        />
                      </CardBody>
                    </Card>
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
