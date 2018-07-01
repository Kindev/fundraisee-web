// @flow
import {compose, createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

// Redux dev tool extension during development
const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
export const persistor = persistStore(store);
export default store;
