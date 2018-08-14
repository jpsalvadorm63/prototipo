import React from "react";
import { Route, Switch } from "react-router-dom";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import { connect } from "react-redux";
import LoginPage from "ducks/_login/_duck";
import API_APP from "./_api";

// Actions
export const LOAD_INDEX_ROUTES = "LOAD_INDEX_ROUTES";
export const LOAD_MAIN_MENU_ROUTES = "LOAD_MAIN_MENU_ROUTES";

// Action creators
const loadIndexRoutes = (indexRoutes) => {
  return {
    type: LOAD_INDEX_ROUTES,
    indexRoutes
  }
};

const loadMainMenuRoutes = (mainMenuRoutes) => {
  return {
    type: LOAD_MAIN_MENU_ROUTES,
    mainMenuRoutes
  }
};

// Reducer
export const reducer = (state = {}, action) => {
  switch(action.type) {
    case LOAD_INDEX_ROUTES :
      return {...state, indexRoutes: action.indexRoutes};
    case LOAD_MAIN_MENU_ROUTES:
      return {...state, mainMenuRoutes: action.mainMenuRoutes};
    default :
      return state;
  }
};

// Thunks
export const handleLoadIndexRoutes = () => {
  return (dispatch) => {
    return Promise.all([
      API_APP.fetchIndexRoutes(),
    ]).then(([indexRoutes]) => {
      dispatch(loadIndexRoutes(indexRoutes));
    })
  }
};

export const handleLoadMainMenuRoutes = () => {
  return (dispatch) => {
    return Promise.all([
      API_APP.fetchMainMenuRoutes(),
    ]).then(([mainMenuRoutes]) => {
      dispatch(loadMainMenuRoutes(mainMenuRoutes));
    })
  }
};

// Middleware

// Widget
class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    if(!this.props.logedIn && nextProps.logedIn) {
      const {dispatch} = this.props;
      dispatch(handleLoadIndexRoutes({}));
      dispatch(handleLoadMainMenuRoutes({}));
    }
  }

  render() {
    const indexRoutes = this.props.app.indexRoutes;
    if(!this.props.logedIn) {
      return <LoginPage/>
    } else {
      if(indexRoutes) {
        return (
          <Switch>
            {indexRoutes.map((prop, key) => {
              return <Route path={prop.path} component={prop.component} key={key} />;
            })}
          </Switch>
        )
      }
      else return <div>Loading main menu ...</div>;
    }
  }

  // componentDidMount() {
  //   const {dispatch} = this.props;
  //   dispatch(handleLoadIndexRoutes({}));
  //   dispatch(handleLoadMainMenuRoutes({}));
  // }
  //
  // render() {
  //   const indexRoutes = this.props.app.indexRoutes;
  //   if(indexRoutes) {
  //     return(
  //       <Switch>
  //         {indexRoutes.map((prop, key) => {
  //           return <Route path={prop.path} component={prop.component} key={key} />;
  //         })}
  //       </Switch>
  //     )
  //   } else {
  //     return(<div>Loading main menu ...</div>)
  //   }
  // }
}

// Connector
export default withRouter(connect((state) => ({...state.logInfo, init: state.init, app: state.app}))(App));
