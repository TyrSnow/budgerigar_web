import * as React from 'react';

class SettingTab extends React.Component {
  render() {
    return (
      <div className="m-tabPane m-settingTab">
        <div className="wrapper">
          <h4 className="title">插件</h4>
          <p>配置appkey以及secretKey用于IDE插件上传文本</p>
        </div>
        <div className="wrapper">
          <h4 className="title">语言</h4>
          <p>配置项目支持的语言</p>
        </div>
        <div className="wrapper">
          <h4 className="title">功能</h4>
          <p>配置在线访问语言包功能的开启</p>
        </div>
      </div>
    );
  }
}

export default SettingTab;
