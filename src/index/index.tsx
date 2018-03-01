import * as React from 'react';
import { Switch, Route } from 'react-router';
import { Menu } from 'antd';

import './index.css';
import Project from './project/index';

class Index extends React.Component {
  render() {
    return (
      <div className="p-index">
        <div className="header">
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">项目</Menu.Item>
            <Menu.Item key="2">设置</Menu.Item>
            <Menu.Item key="3">帮助</Menu.Item>
          </Menu>
        </div>
        <div className="container">
          <Switch>
            <Route path="/projects" component={Project} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Index;
