import Pages from "layouts/Pages.jsx";
import RTL from "layouts/RTL.jsx";
// import Dashboard from "layouts/Dashboard.jsx";

import Template from "ducks/_app/duck";

const indexRoutes = [
  { path: "/rtl", name: "RTL", component: RTL },
  { path: "/pages", name: "Pages", component: Pages },
  { path: "/", name: "Home", component: Template }
];

export default indexRoutes;
