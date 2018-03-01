import * as React from 'react';
import {
  Table,
  Input,
} from 'antd';

const { Search } = Input;

class KeywordTab extends React.Component {
  render() {
    return (
      <div className="m-tabPane m-keywordTab">
        <p>关键字的操作与语句操作差不多</p>
        <div className="create">
          <Search />
        </div>
        <Table />
      </div>
    );
  }
}

export default KeywordTab;
