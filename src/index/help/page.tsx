import * as React from 'react';
import { Anchor } from 'antd';
import './index.css';

const { Link } = Anchor;

class Project extends React.Component {
  render() {
    return (
      <div className="m-help m-container">
        <div className="content">
          <h4 className="title">说明书</h4>
          <p className="setence">此处用项目readme渲染出来</p>
        </div>
        <Anchor className="anchor">
          <Link href="#components-anchor-demo-basic" title="快速入门">
            <Link href="#Anchor-Props" title="创建项目" />
            <Link href="#Link-Props" title="输入语句" />
            <Link href="#Link-Props" title="导入语句" />
            <Link href="#Link-Props" title="配置输出参数" />
          </Link>
          <Link href="#components-anchor-demo-fixed" title="团队写作">
            <Link href="#Link-Props" title="邀请成员" />
            <Link href="#Link-Props" title="设置管理员" />
          </Link>
          <Link href="#components-anchor-demo-fixed" title="搭建自己的服务器">
            <Link href="#Link-Props" title="部署服务器" />
            <Link href="#Link-Props" title="部署静态页面" />
            <Link href="#Link-Props" title="配置系统级参数" />
          </Link>
        </Anchor>
      </div>
    );
  }
}

export default Project;
