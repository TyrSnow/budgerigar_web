import * as React from 'react';
import axios from 'axios';
import {
  Table,
  message,
  Modal,
} from 'antd';
import { Pager } from '../../../definition/common';
import { LanguageDetail } from '../../../definition/language';

import ResourceLanguageControlBar from './resourceLanguageControlBar';

interface ResourceLanguageProps {

}

interface ResourceLanguageState {
  loading: boolean;
  data: Array<LanguageDetail>;
  key: string;
  pagination: Pager;
}
export default class ResourceLanguage extends React.Component<ResourceLanguageProps, ResourceLanguageState> {
  state = {
    loading: false,
    data: [],
    key: '',
    pagination: {
      current: 1,
      pageSize: 5,
      total: 0,
    },
  };

  columns = [{
    title: '名字',
    dataIndex: 'name',
  }, {
    title: '编码',
    dataIndex: 'code',
  }, {
    title: '备注',
    dataIndex: 'desc',
  }, {
    title: '创建人',
    dataIndex: 'creator',
    render(column: any) {
      return column.name;
    },
  }, {
    title: '最后更新',
    dataIndex: 'update_date',
  }, {
    title: '操作',
    render: (text: any, record: any) => {
      return (
        <a onClick={() => this.deleteLanguage(record)}>删除</a>
      );
    },
  }];

  componentWillMount() {
    this.loadLanguageList();
  }

  deleteLanguage(record: any) {
    Modal.confirm({
      title: '删除操作将不可恢复',
      onOk: () => {
        axios({
          url: `/api/languages/${record._id}`,
          method: 'delete',
        }).then((resp) => {
          message.success('删除成功！');
          this.loadLanguageList();
        });
      },
    });
  }

  loadLanguageList(page: Pager = this.state.pagination) {
    let { current, pageSize } = page;
    this.setState({
      loading: true,
    });
    axios({
      url: '/api/languages',
      method: 'get',
      params: {
        key: this.state.key,
        current,
        size: pageSize,
      },
    }).then((resp) => {
      this.setState({
        loading: false,
        data: resp.data.list,
        pagination: Object.assign({}, this.state.pagination, {
          current,
          total: resp.data.page.total,
        }),
      });
    });
  }

  handlePageChange(pagination: Pager) {
    this.loadLanguageList(pagination);
  }

  handleKeyChange(key: string) {
    this.setState({
      key,
    }, () => {
      this.loadLanguageList({
        current: 1,
        pageSize: 5,
      });
    });
  }

  render() {
    return (
      <div>
        <ResourceLanguageControlBar
          onChange={(key: string) => this.handleKeyChange(key)}
        />
        <Table
          rowKey="_id"
          loading={this.state.loading}
          dataSource={this.state.data}
          pagination={this.state.pagination}
          columns={this.columns}
          onChange={(pagination: Pager) => this.handlePageChange(pagination)}
        />
      </div>
    );
  }
}
