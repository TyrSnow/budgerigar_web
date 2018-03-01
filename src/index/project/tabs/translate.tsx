import * as React from 'react';
import {
  Input,
  Table,
  Checkbox,
} from 'antd';

const { Search } = Input;
const CheckboxGroup = Checkbox.Group;

const columns = [{
  title: 'ID',
  dataIndex: 'name',
  width: 150,
}, {
  title: '中文',
  dataIndex: 'age',
  width: 150,
}, {
  title: '英文',
  dataIndex: 'address',
}];

const data: Array<object> = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
class TranslateTab extends React.Component {
  search(value: string) {
    alert(value);
  }

  render() {
    const plainOptions = ['Apple', 'Pear', 'Orange'];
    return (
      <div className="m-tabPane m-translateTab">
        <p>在搜索框输入文字，会自动筛选下面的语句，当没有匹配的内容时，会显示创建按钮，按回车直接创建，新创建的内容会被放到一个新的列表里，新的列表可以删除</p>
        <div className="search">
          <Search
            placeholder="input search text"
            onSearch={value => this.search(value)}
            enterButton={true}
          />
        </div>
        <div className="filters">
          <div className="filter">
            <div className="label">语言</div>
            <CheckboxGroup options={plainOptions} defaultValue={['Apple']} />
          </div>
          <div className="filter">
            <div className="label">导出包</div>
            <CheckboxGroup options={plainOptions} defaultValue={['Apple']} />
          </div>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 50 }}
          scroll={{ y: 240 }}
        />
      </div>
    );
  }
}

export default TranslateTab;
