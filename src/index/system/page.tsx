import * as React from 'react';
import {
  Tabs,
  Icon,
} from 'antd';
import './index.css';
import Resource from './components/resource';
import UserManage from './components/userManage';

const { TabPane } = Tabs;

class System extends React.Component {
  state = {
    activeKey: 'media',
  };

  render() {
    return (
      <div className="m-setting">
        <Tabs
          tabPosition="left"
          onChange={activeKey => this.setState({ activeKey })}
          activeKey={this.state.activeKey}
        >
          <TabPane tab="统计" key="analysis">
            <div className="m-settingPane">
              <div className="wrapper">
                <div className="inner">
                  <div className="chart">显示当天注册数、登陆数</div>
                </div>
              </div>
              <div className="wrapper">
                <div className="inner">
                  <div className="chart">显示项目总数、用户总数</div>
                </div>
              </div>
              <div className="wrapper">
                <h4 className="title">用户注册</h4>
                <div className="inner">
                  <div className="chart">用户注册按天统计</div>
                </div>
              </div>
              <div className="wrapper">
                <h4 className="title">日活跃</h4>
                <div className="inner">
                  <div className="chart">显示新用户、老用户、活跃用户、整体折线图</div>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="限额" key="maxStorage">
            <div className="m-settingPane">
              <div className="wrapper">
                <h4 className="title">用户</h4>
                <div className="inner">
                  <p className="setting">
                    <span className="key">项目数</span>
                    <span className="value">10</span>
                    <span className="edit"><Icon className="btnIcon" type="edit" /></span>
                  </p>
                  <p className="setting">
                    <span className="key">项目成员数</span>
                    <span className="value">20</span>
                    <span className="edit"><Icon className="btnIcon" type="edit" /></span>
                  </p>
                  <p className="setting">
                    <span className="key">项目关键字数</span>
                    <span className="value">50</span>
                    <span className="edit"><Icon className="btnIcon" type="edit" /></span>
                  </p>
                  <p className="setting">
                    <span className="key">项目输出模板</span>
                    <span className="value">10</span>
                    <span className="edit"><Icon className="btnIcon" type="edit" /></span>
                  </p>
                </div>
              </div>
              <div className="wrapper">
                <h4 className="title">排队设置</h4>
                <div className="inner">
                  <p className="setting">
                    <span className="key">最大同时在线数</span>
                    <span className="value">50</span>
                    <span className="edit"><Icon className="btnIcon" type="edit" /></span>
                  </p>
                  <p className="setting">
                    <span className="key">白名单</span>
                    <span className="value">50</span>
                    <span className="edit"><Icon className="btnIcon" type="edit" /></span>
                  </p>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="用户管理" key="userManage">
            <UserManage />
          </TabPane>
          <TabPane tab="素材管理" key="media">
            <Resource />
          </TabPane>
          <TabPane tab="字典管理" key="dict">
            <div className="m-settingPane">
              <p>方便未来扩展使用</p>
              <p>思考把头像当成一种特殊的字典来处理</p>
            </div>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default System;
