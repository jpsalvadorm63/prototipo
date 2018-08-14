import Main from "./_main";
import AppsIcon from "@material-ui/icons/Apps";
import DomainIcon from "@material-ui/icons/Domain";
import PlanIcon from "@material-ui/icons/DevicesOther";
import BuildIcon from "@material-ui/icons/Build";
import Kogorah from "./duck00_KogoraHigh";
import Fairfield from "./duck00_FairfieldShopping";
import Inmobiliar_UbicacionGeografica from "ducks/cadaster/inmobiliar/_ducks/duck_ubicaciónGeografica";
import Inmobiliar_IdentificacionLegal from "ducks/cadaster/inmobiliar/_ducks/duck_identificacionLegal";
import Catacteristica_Terreno from "ducks/cadaster/inmobiliar/_ducks/duck_caracteristicaTerreno";
import Catacteristica_Construcciones from "ducks/cadaster/inmobiliar/_ducks/duck_construcciones";
import Catacteristica_Planos from "ducks/cadaster/inmobiliar/_ducks/duck_planos"
import Estructuras from "./duck00_Estructuras";
import Acabados from "./duck00_Acabados";
import SSistemas from "./duck00_SSistemas";
import Construcciones from "./duck00_Construcciones";
import OComplementarias from "./duck00_OComplementarias";
import Planificacion from "./duck00_Planificación";
import Mantenimiento from "./duck00_Mantenimiento";

const delayms = 1;

const API = {};

const indexRoutes = [
  { path: "/", name: "Home", component: Main }
];

API.mainMenu = [
  // {
  //   collapse: false,
  //   path: "/bld",
  //   name: "Inmuebles",
  //   icon: AppsIcon,
  //   views: [
  //     {
  //       path: "/bld/kogorah",
  //       name: "Escuela Kogorah",
  //       mini: "KS",
  //       component: Kogorah
  //     },
  //     {
  //       path: "/bld/fairfield",
  //       name: "Fairfield Shoping",
  //       mini: "FS",
  //       component: Fairfield
  //     }
  //   ]
  // },
  {
    collapse: true,
    path: "/bld/srvy",
    name: "Ficha Predial",
    icon: DomainIcon,
    views: [
      {
        path: "/bld/dgen",
        name: "Ubicación Geográfica",
        mini: "UG",
        component: Inmobiliar_UbicacionGeografica
      },
      {
        path: "/bld/ilegal",
        name: "Identificación Legal",
        mini: "IL",
        component: Inmobiliar_IdentificacionLegal
      },
      {
        path: "/bld/cterreno",
        name: "Catecterística Terreno",
        mini: "CT",
        component: Catacteristica_Terreno
      },
      {
        path: "/bld/cconstrucciones",
        name: "Construcciones",
        mini: "CN",
        component: Catacteristica_Construcciones
      },
      {
        path: "/bld/planos",
        name: "Planos",
        mini: "PL",
        component: Catacteristica_Planos
      }
    ]
  },
  {
    path: "/pln",
    name: "Planificación",
    icon: PlanIcon,
    component: Planificacion
  },
  {
    path: "/mnt",
    name: "Mantenimiento",
    icon: BuildIcon,
    component: Mantenimiento
  }
];

API.fetchIndexRoutes = () => {
  return new Promise((res, rej) => {
    setTimeout(function () {
      res(indexRoutes)
    }, delayms)
  })
};

API.fetchMainMenuRoutes = () => {
  return new Promise((res, rej) => {
    setTimeout(function () {
      res(API.mainMenu)
    }, delayms)
  })
};

export default API;
