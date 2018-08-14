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
                <h4 className={classes.cardTitle}>3. Características del Terreno</h4>
              </CardText>
            </CardHeader>
            <CardBody>
              <form>
                <GridContainer>
                  <GridItem xs={12} sm={5}>
                    <FormControl fullWidth className={classes.selectFormControl} >
                      <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                        Uso del bien inmueble (3.1)
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
                          Residencial
                        </MenuItem>
                        <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Múltipes Usos
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Comercial y de servicios
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Industrial
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Equipamiento
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          ... otros
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={1}>
                  </GridItem>
                  <GridItem xs={12} sm={4}>
                    <FormControl fullWidth className={classes.selectFormControl} >
                      <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                        Categoría de equipamiento (3.1)
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
                          seleccione categoría
                        </MenuItem>
                        <MenuItem classes={{ root: classes.selectMenuItem }}>
                          Educación
                        </MenuItem>
                        <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Cultura
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Salud
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Bienestar Social
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Recreación y Deportes
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          ... otros
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem xs={12} sm={6}>
                    <FormControl fullWidth className={classes.selectFormControl} >
                      <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                        Tipología
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
                          seleccione tipología
                        </MenuItem>
                        <MenuItem classes={{ root: classes.selectMenuItem }}>
                          Escolar (nivel básico), Escuela de Educación General Básic
                        </MenuItem>
                        <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Colegios secundarios, Colegio de Bachillerato
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Unidades educativas (niveles básico y bachillerato)
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Institutos de educación especial
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Centros de capacitación laboral
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          ... otros
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={1}>
                  </GridItem>
                  <GridItem xs={12} sm={4}>
                    <FormControl fullWidth className={classes.selectFormControl} >
                      <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                        Categoría de equipamiento (3.1)
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
                          seleccione categoría
                        </MenuItem>
                        <MenuItem classes={{ root: classes.selectMenuItem }}>
                          Educación
                        </MenuItem>
                        <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Cultura
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Salud
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Bienestar Social
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Recreación y Deportes
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          ... otros
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem xs={12} sm={6}>
                    <FormControl fullWidth className={classes.selectFormControl} >
                      <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                        Tipología
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
                          seleccione tipología
                        </MenuItem>
                        <MenuItem classes={{ root: classes.selectMenuItem }}>
                          Escolar (nivel básico), Escuela de Educación General Básic
                        </MenuItem>
                        <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Colegios secundarios, Colegio de Bachillerato
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Unidades educativas (niveles básico y bachillerato)
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Institutos de educación especial
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Centros de capacitación laboral
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          ... otros
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={1}>
                  </GridItem>
                  <GridItem xs={12} sm={4}>
                    <FormControl fullWidth className={classes.selectFormControl} >
                      <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                        Categoría de equipamiento (3.1)
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
                          seleccione categoría
                        </MenuItem>
                        <MenuItem classes={{ root: classes.selectMenuItem }}>
                          Educación
                        </MenuItem>
                        <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Cultura
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Salud
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Bienestar Social
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Recreación y Deportes
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          ... otros
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem xs={12} sm={6}>
                    <FormControl fullWidth className={classes.selectFormControl} >
                      <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                        Tipología
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
                          seleccione tipología
                        </MenuItem>
                        <MenuItem classes={{ root: classes.selectMenuItem }}>
                          Escolar (nivel básico), Escuela de Educación General Básic
                        </MenuItem>
                        <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Colegios secundarios, Colegio de Bachillerato
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Unidades educativas (niveles básico y bachillerato)
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Institutos de educación especial
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Centros de capacitación laboral
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          ... otros
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <h3 className={classes.title}>
                    Servicios (3.2)
                  </h3>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={1}>
                  </GridItem>
                  <GridItem xs={12} sm={4}>
                    <FormControl fullWidth className={classes.selectFormControl} >
                      <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                        Servicios
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
                          Red de agua
                        </MenuItem>
                        <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Red de energía eléctrica subterranea
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Red telefónica subterránea
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Red telefónica aérea
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Recolección de basura
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          ... otros
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem xs={12} sm={4}>
                    <FormControl fullWidth className={classes.selectFormControl} >
                      <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                        Servicios
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
                          Red de agua
                        </MenuItem>
                        <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Red de energía eléctrica subterranea
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Red telefónica subterránea
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Red telefónica aérea
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Recolección de basura
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          ... otros
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={1}>
                  </GridItem>
                  <GridItem xs={12} sm={4}>
                    <FormControl fullWidth className={classes.selectFormControl} >
                      <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                        Servicios
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
                          Red de agua
                        </MenuItem>
                        <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Red de energía eléctrica subterranea
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Red telefónica subterránea
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Red telefónica aérea
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Recolección de basura
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          ... otros
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem xs={12} sm={4}>
                    <FormControl fullWidth className={classes.selectFormControl} >
                      <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                        Servicios
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
                          Red de agua
                        </MenuItem>
                        <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Red de energía eléctrica subterranea
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Red telefónica subterránea
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Red telefónica aérea
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Recolección de basura
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          ... otros
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <h3 className={classes.title}>
                    Nombres de vías (3.3)
                  </h3>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={9}>
                      <CustomInput
                        id="help-text"
                        labelText="Vía"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text"
                        }}
                        helpText="Nombre de la Vía"
                      />
                  </GridItem>
                  <GridItem xs={12} sm={2}>
                    <CustomInput
                      id="help-text"
                      labelText="Frente (m)"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text"
                      }}
                      helpText="Longitud del frente en metros"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={2}>
                  </GridItem>
                  <GridItem xs={12} sm={3}>
                    <FormControl fullWidth className={classes.selectFormControl} >
                      <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                        Tipo de vía
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
                          Autopista
                        </MenuItem>
                        <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Avenida
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Calle
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Pasaje
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Escalianata
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Callejón
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem xs={12} sm={3}>
                    <FormControl fullWidth className={classes.selectFormControl} >
                      <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                        Capa de rodadura
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
                          lastre
                        </MenuItem>
                        <MenuItem classes={{ root: classes.selectMenuItem }}>
                          Empedrado
                        </MenuItem>
                        <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Adoquinado
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Hormigón rígido
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Asfalto
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Tierra
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem xs={12} sm={1}>
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
                        label="Acera"
                      />
                    </div>
                  </GridItem>
                  <GridItem xs={12} sm={1}>
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
                        label="Bordillo"
                      />
                    </div>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={9}>
                    <CustomInput
                      id="help-text"
                      labelText="Vía"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text"
                      }}
                      helpText="Nombre de la Vía"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={2}>
                    <CustomInput
                      id="help-text"
                      labelText="Frente (m)"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text"
                      }}
                      helpText="Longitud del frente en metros"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={2}>
                  </GridItem>
                  <GridItem xs={12} sm={3}>
                    <FormControl fullWidth className={classes.selectFormControl} >
                      <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                        Tipo de vía
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
                          Autopista
                        </MenuItem>
                        <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Avenida
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Calle
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Pasaje
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Escalianata
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Callejón
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem xs={12} sm={3}>
                    <FormControl fullWidth className={classes.selectFormControl} >
                      <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                        Capa de rodadura
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
                          lastre
                        </MenuItem>
                        <MenuItem classes={{ root: classes.selectMenuItem }}>
                          Empedrado
                        </MenuItem>
                        <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Adoquinado
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Hormigón rígido
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Asfalto
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Tierra
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem xs={12} sm={1}>
                    <div className={classes.checkboxAndRadio}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            tabIndex={-1}
                            onClick={() => this.handleToggle(2)}
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
                        label="Acera"
                      />
                    </div>
                  </GridItem>
                  <GridItem xs={12} sm={1}>
                    <div className={classes.checkboxAndRadio}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            tabIndex={-1}
                            onClick={() => this.handleToggle(2)}
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
                        label="Bordillo"
                      />
                    </div>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <h3 className={classes.title}>
                    Área total del lote y fondo relativo (3.3)
                  </h3>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={1}>
                  </GridItem>
                  <GridItem xs={12} sm={2}>
                    <CustomInput
                      id="help-text"
                      labelText="según escritura"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text"
                      }}
                      helpText="Área según escritura"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={2}>
                    <CustomInput
                      id="help-text"
                      labelText="Fecha"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text"
                      }}
                      helpText="fecha"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={1}>
                  </GridItem>
                  <GridItem xs={12} sm={2}>
                    <CustomInput
                      id="help-text"
                      labelText="medida en campo"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text"
                      }}
                      helpText="Área medida en campo"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={2}>
                    <CustomInput
                      id="help-text"
                      labelText="Fecha"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text"
                      }}
                      helpText="fecha"
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={1}>
                  </GridItem>
                  <GridItem xs={12} sm={2}>
                    <CustomInput
                      id="help-text"
                      labelText="según gravámen"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text"
                      }}
                      helpText="Según certificado de gravámen"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={2}>
                    <CustomInput
                      id="help-text"
                      labelText="Fecha"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text"
                      }}
                      helpText="fecha"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={1}>
                  </GridItem>
                  <GridItem xs={12} sm={2}>
                    <CustomInput
                      id="help-text"
                      labelText="según avalúo"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text"
                      }}
                      helpText="Según certificado de avalúo"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={2}>
                    <CustomInput
                      id="help-text"
                      labelText="Fecha"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text"
                      }}
                      helpText="fecha"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={2}>
                    <CustomInput
                      id="help-text"
                      labelText="Fodo relativo"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text"
                      }}
                      helpText="Fodo relativo"
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <h3 className={classes.title}>
                    Localización en Manzana y Topografía (3.5)
                  </h3>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={1}>
                  </GridItem>
                  <GridItem xs={12} sm={3}>
                    <FormControl fullWidth className={classes.selectFormControl} >
                      <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                        Localización
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
                          Esquinero (1)
                        </MenuItem>
                        <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          En cabecera (2)
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Entremedio (3)
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          En L (4)
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          En T (5)
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          ... otros
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem xs={12} sm={3}>
                    <FormControl fullWidth className={classes.selectFormControl} >
                      <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                        Topografía
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
                          Plano (1)
                        </MenuItem>
                        <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Suave (2)
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Moderada (3)
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Fuerte (4)
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Muy fuerte (5)
                        </MenuItem>
                        <MenuItem value="urbana" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          ... otros
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem xs={12} sm={3}>
                    <FormControl fullWidth className={classes.selectFormControl} >
                      <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                        Lote
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
                          Regular
                        </MenuItem>
                        <MenuItem value="rural" classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected}} >
                          Irregular
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <h3 className={classes.title}>
                    Propiedad Horizontal (3.6)
                  </h3>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={3}>
                    <CustomInput
                      id="help-text"
                      labelText="Alícuota total"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text"
                      }}
                      helpText="Alícuota total"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={3}>
                    <CustomInput
                      id="help-text"
                      labelText="Area de construcción declarada"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text"
                      }}
                      helpText="Area de construcción declarada"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={3}>
                    <CustomInput
                      id="help-text"
                      labelText="Area de construcción"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text"
                      }}
                      helpText="Area de construcción"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={3}>
                    <CustomInput
                      id="help-text"
                      labelText="Caso de propiedad horizontal"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        value: "caso1, caso 2, caso 3"
                      }}
                      helpText="Area de construcción"
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12}>
                    <Card>
                      <CardHeader color="rose" icon>
                        <CardIcon color="rose">
                          <Assignment />
                        </CardIcon>
                        <h4 className={classes.cardIconTitle}>Caso 1</h4>
                      </CardHeader>
                      <CardBody>
                        <Table
                          tableHeaderColor="primary"
                          tableHead={["Deominación", "Area Cnstruida", "Alícuotas parciales", "Ubicación"]}
                          tableData={[
                            ["Departamento 4C",          "115",  "1.2556",    "B1 P12"],
                            ["Parqueasero 15",           "12",   "0.0464",    "B1 S3"],
                            ["Bodega 8",                 "3,70", "0.0256",    "B1 S3"],
                            ["Lavandería y secadora 12", "8",    "1,366P", "B1 S1"]
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
                        <h4 className={classes.cardIconTitle}>Caso 2</h4>
                      </CardHeader>
                      <CardBody>
                        <Table
                          tableHeaderColor="primary"
                          tableHead={["Deominación", "Area Cnstruida", "Alícuotas Total", "Ubicación"]}
                          tableData={[
                            ["Departamento 4C",          "115",  "",    "B1 P12"],
                            ["Parqueasero 15",           "12",   "",    "B1 S3"],
                            ["Bodega 8",                 "3,70", "",    "B1 S3"],
                            ["Lavandería y secadora 12", "8",    "1,26", "B1 S1"]
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
                        <h4 className={classes.cardIconTitle}>Caso 3</h4>
                      </CardHeader>
                      <CardBody>
                        <Table
                          tableHeaderColor="primary"
                          tableHead={["Denominación", "Area Cnstruida", "Alícuotas parciales", "Ubicación"]}
                          tableData={[
                            ["Departamento 4C",          "115",  "1.544",  "B1 P12"],
                            ["Departamento 4D",          "115",  "1.234",  "B1 P12"],
                            ["Parqueasero 15",           "12",   "0.0341", "B1 S03"],
                            ["Parqueasero 16",           "12",   "0.034",  "B1 S03"],
                            ["Bodega 8",                 "3,70", "0.032",  "B1 S03"],
                            ["Bodega 9",                 "3,70", "0.031",  "B1 S03"],
                            ["Lavandería y secadora 12", "8",    "1,26",   "B1 S01"]
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
