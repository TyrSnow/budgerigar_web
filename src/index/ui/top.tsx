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
import { AUTH_TYPE } from '../../constant/authType';
import history from '../../shared/history';
import { auth } from '../../store/actions';

interface IndexProps {
  user: string;
  auth: AUTH_TYPE;
  clearAuth: any;
  location: any;
}

class Index extends React.Component<IndexProps> {
  logOut() {
    this.props.clearAuth();
    history.push('/login');
  }

  renderUserMenu() {
    return (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer">修改密码</a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={() => this.logOut()} target="_blank" rel="noopener noreferrer">注销登陆</a>
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
          {
            (this.props.auth === AUTH_TYPE.ADMIN || this.props.auth === AUTH_TYPE.ROOT) ? (
              <NavLink className="link" to="/system" exact={true} strict={true} activeClassName="active">系统参数</NavLink>
            ) : null
          }
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
      auth: state.getIn(['auth', 'auth']),
    };
  },
  {
    clearAuth: auth.clearAuth,
  }
)(Index);
