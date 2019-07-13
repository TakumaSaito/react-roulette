import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../modules';

const enhancer = compose(
  applyMiddleware(thunk),
  // eslint-disable-next-line no-undef
  process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);

export default createStore(rootReducer, enhancer);
