import * as React from 'react';
import { Router, Switch, Route } from 'react-router';
import { Provider } from 'react-redux';

// import 'antd/dist/antd.css';

import history from './shared/history';
import store from './store';
import { auth } from './store/actions';

import Index from './index/index';
import Login from './login/index';
import Page500 from './pages/500';

class App extends React.Component {
  componentWillMount() {
    let token = sessionStorage.token;
    auth.solveAuth(token);
  }

  render() {
    console.debug('App will render: ', this.props);
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/500" component={Page500} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Index} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
