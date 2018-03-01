import * as React from 'react';
import {
  Input,
} from 'antd';
const { Search } = Input;

interface ProjectInfo {
  id: string;
  name: string;
  last_update: string;
  status: number;
  total: number;
  ready: number;
}

const projects = [{
  id: '1',
  name: '项目0',
  status: 0,
  last_update: '2017-02-03 17:32:23',
  total: 100,
  ready: 83,
}, {
  id: '2',
  name: '项目1',
  status: 0,
  last_update: '2017-02-03 17:32:23',
  total: 100,
  ready: 100,
}];
class List extends React.Component {
  renderItem(proj: ProjectInfo) {
    return (
      <div className={`proj ${proj.ready === proj.total ? 'complete' : ''}`} key={proj.id}>
        <p className="title">
          <span className="name">{proj.name}</span>
          <span className="stat">{proj.ready} / {proj.total}</span>
        </p>
        <p className="info">{proj.last_update}</p>
      </div>
    );
  }
  
  search(value: string) {
    alert(value);
  }

  render() {
    return (
      <div className="m-projList m-content">
        <div className="u-search">
          <Search
            placeholder="input search text"
            onSearch={value => this.search(value)}
            enterButton={true}
          />
        </div>
        <div className="u-filter">
          <div className="filters">
            <button className="filtBtn active">全部</button>
            <button className="filtBtn">未完成</button>
          </div>
          <button className="filtBtn newBtn">+</button>
        </div>
        {
          projects.map(v => this.renderItem(v))
        }
      </div>
    );
  }
}

export default List;
