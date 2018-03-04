import * as React from 'react';
import {
  Tabs,
  Icon,
} from 'antd';
import './index.css';

const { TabPane } = Tabs;

class System extends React.Component {
  render() {
    return (
      <div className="m-setting">
        <Tabs tabPosition="left">
          <TabPane tab="统计" key="1">
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
          <TabPane tab="限额" key="2">
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
                    <span className="value">200</span>
                    <span className="edit"><Icon className="btnIcon" type="edit" /></span>
                  </p>
                  <p className="setting">
                    <span className="key">项目输出模板</span>
                    <span className="value">5</span>
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
          <TabPane tab="用户管理" key="3">
            <div className="m-settingPane">
              <div className="wrapper">
                <h4 className="title">用户列表</h4>
                <div className="inner">
                  <p className="setting">用列表显示，可以将用户加入黑名单，或者设为系统管理员（需要Root权限）</p>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="素材管理" key="4">
            <div className="m-settingPane">
              <div className="wrapper">
                <h4 className="title">语言配置</h4>
                <div className="inner">
                  <p className="setting">设置国家名，语言代码，国旗，同一个国家可以有多个语言</p>
                </div>
              </div>
              <div className="wrapper">
                <h4 className="title">头像</h4>
                <div className="inner">
                  <p className="setting">允许用户设置的头像，只能添加不能删除</p>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="字典管理" key="4">
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
