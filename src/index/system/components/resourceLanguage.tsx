import * as React from 'react';
import axios from 'axios';
import {
  Table,
} from 'antd';
import { Pager } from '../../../definition/common';
import { LanguageDetail } from '../../../definition/language';

import ResourceLanguageControlBar from './resourceLanguageControlBar';

const columns = [{
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
}];

interface ResourceLanguageProps {

}

interface ResourceLanguageState {
  loading: boolean;
  data: Array<LanguageDetail>;
  key: string;
  pagination: Pager;
}
export default class ResourceLanguage extends React.Component<ResourceLanguageProps, ResourceLanguageState> {
  constructor(props: ResourceLanguageProps) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      key: '',
      pagination: {
        current: 1,
        pageSize: 5,
        total: 0,
      },
    };
  }

  componentWillMount() {
    this.loadLanguageList();
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

  render() {
    return (
      <div>
        <ResourceLanguageControlBar />
        <Table
          rowKey="_id"
          loading={this.state.loading}
          dataSource={this.state.data}
          pagination={this.state.pagination}
          columns={columns}
          onChange={(pagination: Pager) => this.handlePageChange(pagination)}
        />
      </div>
    );
  }
}
