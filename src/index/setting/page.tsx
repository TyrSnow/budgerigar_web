import * as React from 'react';
import {
  Tabs,
} from 'antd';
import './index.css';

import ModifyPassword from './components/modifyPassword';
import ModifyProfile from './components/modifyProfile';
import ModifyIdentify from './components/modifyIdentify';

const { TabPane } = Tabs;

class Setting extends React.Component {
  render() {
    return (
      <div className="m-setting">
        <Tabs tabPosition="left">
          <TabPane tab="编辑资料" key="1">
            <div className="m-settingPane">
              <div className="wrapper">
                <h4 className="title">基本信息</h4>
                <div className="inner">
                  <ModifyProfile />
                </div>
              </div>
              <div className="wrapper">
                <h4 className="title">身份认证</h4>
                <div className="inner">
                  <ModifyIdentify />
                </div>
              </div>
              <div className="wrapper">
                <h4 className="title">修改密码</h4>
                <div className="inner">
                  <ModifyPassword />
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="设置" key="2">
            <div className="m-settingPane">
              <div className="wrapper">
                <h4 className="title">语言设置</h4>
                <div className="inner">
                  <p className="setting">翻译可以选择若干主要语言而直接忽略其他语言的显示</p>
                </div>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Setting;
