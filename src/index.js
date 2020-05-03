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
import {
  IdentityModal,
  useIdentityContext,
  IdentityContextProvider,
} from 'react-netlify-identity-widget';
import 'react-netlify-identity-widget/styles.css';
import '@reach/tabs/styles.css';

import Header from './components/Header';

import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Students from './pages/Students';
import Staffs from './pages/Staffs';
import Page from './pages/Page';
import NewsEvents from './pages/NewsEvents';
import Article from './pages/Article';

import Liked from './pages/Liked';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Error from './pages/Error';
import MyToast from './components/MyToast';
import PrivateRoute from './components/PrivateRoute';
import ScrollToTop from './components/Common/ScrollToTop';
import rootReducer from './store/reducers';

import './index.css';
import './app.css';

const Root = () => {
  //
  const initialState = {};
  const url = 'https://revit08.netlify.app/' || 'http://localhost:3002/'; // should look something like "https://foo.netlify.com"
  if (!url)
    throw new Error(
      'process.env.REACT_APP_NETLIFY_IDENTITY_URL is blank2, which means you probably forgot to set it in your Netlify environment variables',
    );
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
    <IdentityContextProvider url={url}>
      <Router>
        <Provider store={store}>
          <ScrollToTop />

          <AuthStatusView />
          <div className="pageContainer">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/students" exact component={Students} />
              <Route path="/staffs" exact component={Staffs} />

              <Route path="/page/:id" exact component={Page} />
              <Route path="/news-events" exact component={NewsEvents} />
              <Route path="/article/:id" exact component={Article} />
              <Route path="/liked" exact component={Liked} />

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
    </IdentityContextProvider>
  );
};

function AuthStatusView() {
  const identity = useIdentityContext();
  const [dialog, setDialog] = React.useState(false);
  const name =
    (identity &&
      identity.user &&
      identity.user.user_metadata &&
      identity.user.user_metadata.full_name) ||
    'NoName';
  const avatar_url =
    identity &&
    identity.user &&
    identity.user.user_metadata &&
    identity.user.user_metadata.avatar_url;
  return (
    <div className="App">
      <Header
        nav={menuAll}
        identity={identity}
        avatar_url={avatar_url}
        name={name}
        setDialog={setDialog}
      />

      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={(user) => console.log('hello ', user)}
        onSignup={(user) => console.log('welcome ', user)}
        onLogout={() => console.log('bye ', name)}
      />
    </div>
  );
}
ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
