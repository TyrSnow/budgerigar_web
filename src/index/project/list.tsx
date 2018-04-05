import * as React from 'react';
import { connect } from 'react-redux';
import * as Immutable from 'immutable';
import {
  // Input,
  Icon,
  Tooltip,
} from 'antd';
// const { Search } = Input;
import CreateForm from './components/createForm';
import { project } from '../../store/actions';

interface ListProps {
  list: Immutable.List<Immutable.Map<string, string>>;
  createVisible: boolean;
  showCreate: any;
  loadProject: any;
  active: any;
}

interface ListState {
  createVisible: boolean;
}

/**
 * 1、图标上区分自己的身份：创建人-管理员-成员
 */
class ProjectList extends React.Component<ListProps, ListState> {
  renderItem(proj?: Immutable.Map<string, any>) {
    if (proj) {
      let _proj = proj.toJS();
      return (
        <div
          onClick={() => this.props.loadProject(_proj._id)}
          className={`proj ${this.props.active ? (_proj._id === this.props.active._id ? 'complete' : '') : '' }`}
          key={_proj._id}
        >
          <p className="title">
            <span className="name">{_proj.name}</span>
            {/* <span className="stat">{proj.ready} / {proj.total}</span> */}
          </p>
          <p className="flags">
            <Tooltip placement="top" title="简体中文">
              <img className="flag" src="/images/dev/cn.jpg" alt="简体中文" />
            </Tooltip>
            <Tooltip placement="top" title="繁体中文">
              <img className="flag" src="/images/dev/cn.jpg" alt="繁体中文" />
            </Tooltip>
          </p>
          <p className="info">{_proj.update_date}</p>
        </div>
      );
    }
    return;
  }
  
  search(value: string) {
    alert(value);
  }

  render() {
    return (
      <div className="m-projList m-content">
        {/* <div className="u-search">
          <Search
            placeholder="input search text"
            onSearch={value => this.search(value)}
            enterButton={true}
          />
        </div> */}
        <div className="u-filter">
          <div className="filters">
            <button className="filtBtn active">全部</button>
            <button className="filtBtn">我管理的</button>
          </div>
          <button className="filtBtn refresh"><Icon type="reload" /></button>
          <button className="filtBtn newBtn" onClick={() => this.props.showCreate()}>+</button>
        </div>
        <div className={`u-create ${this.props.createVisible ? 'active' : ''}`}>
          <CreateForm />
        </div>
        <div className="projList">
          {
            this.props.list ? (
              this.props.list.map(v => this.renderItem(v))
            ) : null
          }
          <div className="projectNull">
            <p className="empty" onClick={() => this.props.showCreate()}>您还没有项目，新建一个吧</p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  // tslint:disable-next-line:no-empty
  (state: Immutable.Map<String, any>) => ({
    list: state.getIn(['project', 'list']),
    active: state.getIn(['project', 'activeProj']),
    createVisible: state.getIn(['project', 'createVisible']),
  }),
  {
    showCreate: project.showCreate,
    loadProject: project.load_project,
  }
)(ProjectList);
