import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { syncHistory } from 'redux-simple-router';
import rootReducer from '../reducers';
import api from '../middlewares/api';

export default function configureStore(initialState, browserHistory) {
  const routerMiddleware = syncHistory(browserHistory);

  const logger = createLogger({
    collapsed: true,
    predicate: () =>
    process.env.NODE_ENV === `development`,
  });

  let middleware = applyMiddleware(thunkMiddleware, api, logger, routerMiddleware);

  const store = middleware(createStore)(rootReducer, initialState);
  
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
