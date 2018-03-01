import * as React from 'react';
import { Switch, Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import {
  Button,
} from 'antd';

import './index.css';

import Project from './project/index';
import Help from './help/index';
import Setting from './setting/index';
import System from './system/index';

class Index extends React.Component {
  render() {
    return (
      <div className="page p-index">
        <div className="header">
          <div className="logo">Budgerigar</div>
          <div className="nav">
            <NavLink className="link" to="/" exact={true} activeClassName="active">项目</NavLink>
            <NavLink className="link" to="/setting" exact={true} activeClassName="active">设置</NavLink>
            <NavLink className="link" to="/system" exact={true} activeClassName="active">系统参数</NavLink>
            <NavLink className="link" to="/help" exact={true} activeClassName="active">帮助中心</NavLink>
          </div>
          <div className="user">
            <Button type="primary">登陆</Button>
          </div>
        </div>
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
