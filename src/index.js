import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { menuAll } from './constants/Menu';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Header from './components/Header';

import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Students from './pages/Students';
import Staffs from './pages/Staffs';
import Liked from './pages/Liked';
import Login from './pages/Login';
import Profile from './pages/Profile';
import ProductDetails from './pages/ProductDetails';
import Error from './pages/Error';
import MyToast from './components/MyToast';
import PrivateRoute from './components/PrivateRoute';
import rootReducer from './store/reducers';

import './index.css';
import './app.css';

const Root = () => {
  //
  const initialState = {};

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
        compose,
    ),
  );
  return (
    <Router>
      <Provider store={store}>
        <Header nav={menuAll} />
        <div className="pageContainer">
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/students" exact component={Students} />
            <Route path="/staffs" exact component={Staffs} />
            <Route path="/liked" exact component={Liked} />
            <Route
              path="/product-details/:id"
              exact
              component={ProductDetails}
            />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/profile" component={Profile} />
            <Route path="/error" component={Error} />
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Redirect to="/error" />
          </Switch>
        </div>
        <Footer nav={menuAll} />
        <MyToast />
      </Provider>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
