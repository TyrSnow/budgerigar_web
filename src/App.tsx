import * as React from 'react';
import { Router, Switch, Route } from 'react-router';
import 'antd/dist/antd.css';

import history from './shared/history';
import Index from './index/index';
import Login from './login/index';

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Index} />
        </Switch>
      </Router>
    );
  }
}

export default App;
