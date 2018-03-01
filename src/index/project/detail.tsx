import * as React from 'react';
import {
  Icon,
  Tabs,
} from 'antd';
import TranslateTab from './tabs/translate';
import SettingTab from './tabs/setting';
import KeywordTab from './tabs/keyword';
import MemberTab from './tabs/member';
import OutputTab from './tabs/output';

const { TabPane } = Tabs;

class Detail extends React.Component {
  render() {
    return (
      <div className="m-projDetail m-content">
        <div className="title">
          <span className="name">项目名称</span>
          <span className="flags">
            <img className="flag" src="/images/dev/cn.jpg" alt="中文" />
            <img className="flag" src="/images/dev/cn.jpg" alt="中文" />
          </span>
          <Icon type="setting" />
        </div>
        <Tabs tabPosition="right">
          <TabPane tab="翻译" key="translate">
            <TranslateTab />
          </TabPane>
          <TabPane tab="关键词" key="keyword">
            <KeywordTab />
          </TabPane>
          <TabPane tab="导出" key="output">
            <OutputTab />
          </TabPane>
          <TabPane tab="成员" key="member">
            <MemberTab />
          </TabPane>
          <TabPane tab="设置" key="setting">
            <SettingTab />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Detail;
