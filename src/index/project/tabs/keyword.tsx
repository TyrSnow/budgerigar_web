import * as React from 'react';
import { connect } from 'react-redux';
import * as Immutable from 'immutable';
import {
  Table,
  Input,
} from 'antd';

const { Search } = Input;

const langs = [
  {
    name: '英语',
  }, {
    name: '印尼语'
  }
];

const dataSource =  [
  {
    id: '123',
    text: '关键词',
    trans: ['keyword', 'keywords']
  }
];

interface Column {
  title: string;
  dataIndex?: string;
  render?: any;
}
interface KeywordTabProps {
  activeProj: any;
}
/**
 * 1、每个项目最多50个关键词（可以配置）
 * 1、录入关键词
 * 2、录入关键词的翻译
 * 3、编辑关键词的翻译
 * 4、禁用某个关键词
 * 5、启用某个关键词
 */
class KeywordTab extends React.Component<KeywordTabProps> {
  render() {
    console.debug(this.props.activeProj);
    const columns: Array<Column> = [{
      title: '关键词',
      dataIndex: 'text',
    }];

    langs.map((lang, index) => {
      columns.push({
        title: lang.name,
        render: (text: string, record: any) => {
          return record.trans[index];
        },
      });
    });

    return (
      <div className="m-tabPane m-keywordTab">
        <p>关键字的操作与语句操作差不多</p>
        <div className="create">
          <Search />
        </div>
        <Table
          columns={columns}
          dataSource={dataSource}
        />
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

  }
)(KeywordTab);
