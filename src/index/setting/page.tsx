import * as React from 'react';
import {
  Tabs,
  Icon,
} from 'antd';
import './index.css';

import ModifyPassword from './components/modifyPassword';
import ModifyProfile from './components/modifyProfile';

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
                  <p className="setting">
                    <span className="key">邮箱</span>
                    <span className="value">未绑定</span>
                    <span className="edit"><Icon className="btnIcon" type="edit" /></span>
                  </p>
                  <p className="setting">
                    <span className="key">手机号</span>
                    <span className="value">未绑定</span>
                    <span className="edit"><Icon className="btnIcon" type="edit" /></span>
                  </p>
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
                  <p className="setting">默认选中语言</p>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="邀请" key="3">
            <div className="m-settingPane">
              <div className="wrapper">
                <h4 className="title">邀请码</h4>
                <div className="inner">
                  <p className="setting">显示用户的邀请码及剩余使用次数</p>
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
