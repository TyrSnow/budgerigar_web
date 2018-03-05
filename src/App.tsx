import * as React from 'react';
import { Router, Switch, Route } from 'react-router';
import { Provider } from 'react-redux';

// import 'antd/dist/antd.css';

import history from './shared/history';
import store from './store';
import { auth } from './store/actions';

import Index from './index/index';
import Login from './login/index';
import Protocal from './pages/protocal';

class App extends React.Component {
  componentWillMount() {
    let token = sessionStorage.token;
    store.dispatch(auth.solveAuth(token));
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/protocal" component={Protocal} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Index} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
