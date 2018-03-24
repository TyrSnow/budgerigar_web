import * as React from 'react';
import ResourceLanguage from './resourceLanguage';

export default class Resource extends React.Component {
  render() {
    return (
      <div className="m-settingPane">
        <div className="wrapper">
          <h4 className="title">语言配置</h4>
          <div className="inner">
            <ResourceLanguage />
          </div>
        </div>
        <div className="wrapper">
          <h4 className="title">头像</h4>
          <div className="inner">
            <p className="setting">允许用户设置的头像，只能添加不能删除</p>
          </div>
        </div>
      </div>
    );
  }
}
