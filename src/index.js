import React from "react";
import ReactDOM from "react-dom";
import "assets/scss/material-dashboard-pro-react.css?v=1.2.0";
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {Router} from "react-router-dom";
import {createBrowserHistory} from "history";

// app
import reducers from "reducers/reducers";
import middleware from "reducers/middleware";
import App from "ducks/_app/_duck";

// handlers
import {handleTestLocalSignal} from "ducks/_init/_duck";
import {handleLogout} from "./ducks/_login/_duck";
import {handleLoadIndexRoutes} from "./ducks/_app/_duck";

const history = createBrowserHistory();
const store = createStore(reducers, middleware);
store.dispatch(handleTestLocalSignal());
store.dispatch(handleLogout({}));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
