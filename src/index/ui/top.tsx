import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Immutable from 'immutable';
import {
  Button,
  Menu,
  Dropdown,
  Icon,
} from 'antd';

interface IndexProps {
  user: string;
}

class Index extends React.Component<IndexProps> {
  renderUserMenu() {
    return (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">修改密码</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">注销登陆</a>
        </Menu.Item>
      </Menu>
    );
  }
  render() {
    return (
      <div className="header">
        <div className="logo">Budgerigar</div>
        <div className="nav">
          <NavLink className="link" to="/" exact={true} strict={true} activeClassName="active">项目</NavLink>
          <NavLink className="link" to="/setting" exact={true} strict={true} activeClassName="active">设置</NavLink>
          <NavLink className="link" to="/system" exact={true} strict={true} activeClassName="active">系统参数</NavLink>
          <NavLink className="link" to="/help" exact={true} strict={true} activeClassName="active">帮助中心</NavLink>
        </div>
        <div className="user">
          {
            true ? (
              <Dropdown overlay={this.renderUserMenu()}>
                <a className="ant-dropdown-link" href="#">
                  <Icon type="user" />{this.props.user}
                </a>
              </Dropdown>
            ) : (
              <Button type="primary">登陆</Button>
            )
          }
        </div>
      </div>
    );
  }
}

export default connect(
  (state: Immutable.Map<String, any>) => {
    return {
      user: state.getIn(['auth', 'name']),
    };
  },
)(Index);
