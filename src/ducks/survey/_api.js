const delayms = 1;

const API = {};

API.T_roadType = [
  "Calle",  "Avenida", "Predio ocupado", "Terreno baldío", "Rio",   "Quebrada",
  "Estero", "Acequia", "Canal",          "Lago",           "Playa", "Mar",
  "Otro"
];

API.T_LandUse = [
  "Sin uso",   "Residencial",    "Educación", "Salud",
  "Comercial", "Administrativo", "Servicios privados",
  "Servicios públicos",
  "Cultural",
  "Conservación",
  "Comunitario",
  "Espacio público",
  "Jardines",
  "Parqueadero",
  "Parques",
  "Religioso",
  "Patrimonial",
  "Turismo",
  "Hospedaje",
  "Deportivo",
  "Entretenimiento",
  "Industrial",
  "Talleres",
  "Laboratorios",
  "Agroindustrial",
  "Agrícola",
  "Acuacultura",
  "Hidrocarburos",
  "Artesanal",
  "Bodega y almacenamiento",
  "Transporte y carga aérea",
  "Transporte y carga terrestre",
  "Transporte y carga fluvial",
  "Instalación Militar",
  "Camposanto",
  "Uso reservado (el uso de suelo es información reservada)",
  "Otro"
];

API.T_landType = ["Un solo bloque", "Varios bloques", "Sin bloques"];

API.landInfo = {
  landName     : {caption: "Nombre del Predio", value:"Kogorah School" },
  landCadaster : {caption: "Clave catastral", value:"170101219862" },
  landAddress  : {
    roadType     : {caption: "Tipo de Vía", value:"Calle", selection: API.T_roadType},
    nameStreet   : {caption: "Calle principal", value:"Av. República"},
    streetNumber : {caption: "Número", value:"N33-187"},
    postalCode   : {caption: "Código Postal", value:"170121"},
  },
  landType     : {caption  : "Tipo de infraestructura", value:"Varios bloques", selection: API.T_landType},
  landZone     : {caption  : "Zona", value: "Urbana", selection: ["Urbana", "Rural", "Otro"]},
  landProperty : {caption  : "Propiedad", value: "Privada", selection: ["Público", "Privado", "Otro"]},
  landUse      : {caption  : "Uso de suelo", value: "Servicios públicos", selection: API.T_LandUse},
  landManager  : {
    name         : {caption  : "Administrador", value: "Cynthia Cobo"},
    phones       : {caption  : "Phones", value: "0974837655, 0936404288"},
    email        : {caption  : "E-mail", value: "cynthia.cobo.201@gmail.com"}
  },
  landRepresentative  : {
    name         : {caption  : "Representante", value: "Myrian Hernández"},
    phones       : {caption  : "Phones", value: "0974011655, 0936401188"},
    email        : {caption  : "E-mail", value: "myrian.hernandez.102@gmail.com"}
  }
};

API.fetchLandInfo = () => {
  return new Promise((res, rej) => {
    setTimeout(function () {
      res(API.landInfo)
    }, delayms)
  })
};

export default API;
