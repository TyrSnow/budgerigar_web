import * as React from 'react';
import { connect } from 'react-redux';
import * as Immutable from 'immutable';
import {
  Icon,
  Tabs,
  Spin,
} from 'antd';
// import { ProjectListInfo } from '../../definition/project';

import TranslateTab from './tabs/translate';
import SettingTab from './tabs/setting';
import KeywordTab from './tabs/keyword';
import MemberTab from './tabs/member';
import OutputTab from './tabs/output';

const { TabPane } = Tabs;

interface ListProps {
  activeProj: any;
  loadActive: boolean;
}

class Detail extends React.Component<ListProps> {
  render() {
    if (!this.props.activeProj) {
      return (
        <div className="m-projDetail m-content empty">空空如也</div>
      );
    }
    return (
      <Spin spinning={this.props.loadActive} wrapperClassName="m-projDetail m-content">
        <div className="title">
          <span className="name">{this.props.activeProj.name}</span>
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
          <TabPane tab="语言包" key="output">
            <OutputTab />
          </TabPane>
          <TabPane tab="成员" key="member">
            <MemberTab />
          </TabPane>
          <TabPane tab="设置" key="setting">
            <SettingTab />
          </TabPane>
        </Tabs>
      </Spin>
    );
  }
}

export default connect(
  (state: Immutable.Map<String, any>) => {
    return {
      activeProj: state.getIn(['project', 'activeProj']),
      loadActive: state.getIn(['project', 'loadActive']),
    };
  },
  {

  }
)(Detail);
