import * as React from 'react';
import {
  Tabs,
} from 'antd';
import './index.css';

import LoginForm from './components/loginForm';
import RegistForm from './components/registForm';

const TabPane = Tabs.TabPane;

class Login extends React.Component {
  render() {
    return (
      <div className="page p-login">
        <div className="inner">
          <Tabs>
            <TabPane tab="登陆" key="login">
              <LoginForm />
            </TabPane>
            <TabPane tab="注册" key="regist">
              <RegistForm />
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Login;