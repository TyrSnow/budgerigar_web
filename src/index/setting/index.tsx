import * as React from 'react';
import {
  Tabs,
} from 'antd';
import './index.css';

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
                  <p className="setting">用户名</p>
                  <p className="setting">头像</p>
                  <p className="setting">邮箱</p>
                  <p className="setting">手机号</p>
                  <p className="setting">用户名</p>
                </div>
              </div>
              <div className="wrapper">
                <h4 className="title">修改密码</h4>
                <div className="inner">
                  <p className="setting">旧密码</p>
                  <p className="setting">新密码</p>
                  <p className="setting">确认新密码</p>
                  <p className="setting">保存</p>
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
