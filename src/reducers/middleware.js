import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {logger as logger_init} from 'ducks/_init/_duck';

export default applyMiddleware(
  thunk,
  logger_init
);
