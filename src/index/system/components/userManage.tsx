import * as React from 'react';
import {
  Table,
} from 'antd';
import axios from 'axios';
import { Pager } from '../../../definition/common';
import { UserListInfo } from '../../../definition/user';
import { AUTH_TYPE, AUTH_TYPE_MAP } from '../../../constant/authType';

interface UserManageProps {

}

interface UserManageState {
  data: Array<UserListInfo>;
  pagination: Pager;
}

export default class UserManage extends React.Component<UserManageProps, UserManageState> {
  columns: Array<any>;
  constructor(props: UserManageProps) {
    super(props);
    this.columns = [{
      title: '用户名',
      dataIndex: 'name',
    }, {
      title: '身份',
      dataIndex: 'auth',
      render(text: string) {
        return AUTH_TYPE_MAP[text];
      },
    }, {
      title: '注册时间',
      dataIndex: 'create_date',
    }, {
      title: '操作',
      render: (text: any, record: UserListInfo) => {
        if (record.auth !== AUTH_TYPE.USER) {
          return '-';
        }
        if (record.block) {
          return <a onClick={() => this.unBlockUser(record)}>解禁</a>;
        }
        return <a onClick={() => this.blockUser(record)}>禁用</a>;
      },
    }];
    this.state = {
      data: [],
      pagination: {
        current: 1,
        pageSize: 10,
      },
    };
  }

  componentWillMount() {
    this.fetch();
  }

  fetch(page: Pager = this.state.pagination) {
    let { current, pageSize } = page;
    axios({
      url: '/api/users',
      params: {
        current,
        size: pageSize,
      }
    }).then((resp) => {
      this.setState({
        data: resp.data.list,
        pagination: Object.assign({}, this.state.pagination, {
          current,
          total: resp.data.page.total,
        }),
      });
    });
  }

  unBlockUser(record: any) {
    axios({
      url: `/api/users/${record._id}/block`,
      method: 'delete'
    }).then(resp => {
      this.fetch();
    });
  }

  blockUser(record: any) {
    axios({
      url: `/api/users/${record._id}/block`,
      method: 'put'
    }).then(resp => {
      this.fetch();
    });
  }

  render() {
    return (
      <div className="m-settingPane">
        <div className="wrapper">
          <h4 className="title">用户列表</h4>
          <div className="inner">
            <Table
              rowKey="_id"
              dataSource={this.state.data}
              columns={this.columns}
              pagination={this.state.pagination}
            />
          </div>
        </div>
      </div>
    );
  }
}