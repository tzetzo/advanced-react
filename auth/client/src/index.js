import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import history from './history';
import reducers from './reducers';
import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import Signout from './components/auth/Signout';
import Feature from './components/Feature';

const store = createStore(reducers,{
  auth: { authenticated: localStorage.getItem('token') } //save JWT into the Store if in localStorage on app boot up/page refresh
}, applyMiddleware(reduxThunk))

ReactDOM.render(
  <Provider store={store}>
		<Router history={history}>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signout" exact component={Signout} />
        <Route path="/feature" exact component={Feature} />
      </App>
    </Router>
  </Provider>,
	document.getElementById('root')
);
