import * as React from 'react';
import { Switch, Route } from 'react-router';

import './index.css';

import Top from './ui/top';
import Project from './project/index';
import Help from './help/index';
import Setting from './setting/index';
import System from './system/index';

class Index extends React.Component {
  render() {
    return (
      <div className="page p-index">
        <Top />
        <div className="container">
          <Switch>
            <Route path="/system" component={System} />
            <Route path="/setting" component={Setting} />
            <Route path="/help" component={Help} />
            <Route path="/" component={Project} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Index;
