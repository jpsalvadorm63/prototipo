import { combineReducers } from 'redux';
import {reducer as reducer_init} from "ducks/_init/_duck";
import {reducer as reducer_login} from "ducks/_login/_duck";
import {reducer as reducer_app} from "ducks/_app/_duck";

export default combineReducers({
  init: reducer_init,
  logInfo: reducer_login,
  app: reducer_app,
});
