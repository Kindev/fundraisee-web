import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Loader from './components/Loader';
import AppBar from './containers/AppBar';
import Modal from './containers/Modal';
import registerServiceWorker from './registerServiceWorker';
import store, {persistor} from './store';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <BrowserRouter>
        <div>
          <AppBar />
          <Switch>
            <Route exact path="/" component={Loader} />
          </Switch>
          <Modal />
        </div>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
