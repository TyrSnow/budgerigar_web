import * as React from 'react';
import {
  Icon,
} from 'antd';

class SettingTab extends React.Component {
  render() {
    return (
      <div className="m-tabPane m-settingTab">
        <div className="wrapper">
          <h4 className="title">基本配置</h4>
          <div className="inner">
            <p className="setting">
              <span className="key">app_key</span>
              <span className="value">auiewrhfsdfgqawex87123easdfq2aDF2Q439R</span>
              <Icon className="editBtn" type="reload" />
            </p>
            <p className="setting">
              <span className="key">secret_key</span>
              <span className="value">asd2380xcnj2380zdfghjq43</span>
              <Icon className="editBtn" type="reload" />
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
          <h4 className="title">高级</h4>
          <div className="inner">
            <p>删除项目</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SettingTab;
