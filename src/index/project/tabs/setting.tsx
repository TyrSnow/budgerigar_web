import * as React from 'react';
import { connect } from 'react-redux';
import * as Immutable from 'immutable';
import {
  Icon,
  Button,
  Modal,
  message,
} from 'antd';

import { project } from '../../../store/actions';

interface SettingTabProps {
  deleteProj: any;
  activeProj: any;
}
class SettingTab extends React.Component<SettingTabProps> {
  deleteProj() {
    Modal.confirm({
      title: '删除操作将不可逆',
      content: `确定要删除项目${this.props.activeProj.name}吗?`,
      onOk: () => {
        this.props.deleteProj(this.props.activeProj._id).catch(
          (err: Error) => message.error(err.message),
        );
      }
    });
  }
  render() {
    return (
      <div className="m-tabPane m-settingTab">
        <div className="wrapper">
          <h4 className="title">基本配置</h4>
          <div className="inner">
            <p className="setting">
              <span className="key">项目名</span>
              <span className="value">{this.props.activeProj.name}</span>
              <Icon className="editBtn" type="copy" />
            </p>
            <p className="setting">
              <span className="key">共享码</span>
              <span className="value">asd2380xcnj2380zdfghjq43</span>
              <Icon className="editBtn" type="refresh" />
              <Icon className="editBtn" type="copy" />
            </p>
          </div>
        </div>
        <div className="wrapper">
          <h4 className="title">支持语言</h4>
          <div className="inner">
            <p>配置项目支持的语言</p>
          </div>
        </div>
        <div className="wrapper">
          <h4 className="title">功能</h4>
          <div className="inner">
            <p>配置在线访问语言包功能的开启</p>
          </div>
        </div>
        <div className="wrapper">
          <h4 className="title">API调用</h4>
          <div className="inner">
            <p className="setting">
              <span className="key">app_key</span>
              <span className="value">auiewrhfsdfgqawex87123easdfq2aDF2Q439R</span>
              <Icon className="editBtn" type="copy" />
              <Icon className="editBtn" type="reload" />
            </p>
            <p className="setting">
              <span className="key">secret_key</span>
              <span className="value">asd2380xcnj2380zdfghjq43</span>
              <Icon className="editBtn" type="copy" />
              <Icon className="editBtn" type="reload" />
            </p>
          </div>
        </div>
        <div className="wrapper">
          <h4 className="title">删除项目</h4>
          <div className="inner">
            <Button type="danger" onClick={() => this.deleteProj()}>删除项目</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state: Immutable.Map<String, any>) => {
    return {
      activeProj: state.getIn(['project', 'activeProj']),
    };
  },
  {
    deleteProj: project.deleteProj,
  }
)(SettingTab);
