import * as React from 'react';
import { connect } from 'react-redux';
import { message } from 'antd';
import { project } from '../../store/actions';
import Detail from './detail';
import List from './list';
import './index.css';

interface ProjectProps {
  loadList: any;
}

class Project extends React.Component<ProjectProps> {
  componentWillMount() {
    // 加载项目列表
    this.props.loadList().catch(
      (err: Error) => message.error(err.message),
    );
  }

  render() {
    return (
      <div className="m-project">
        <List />
        <Detail />
      </div>
    );
  }
}

export default connect(
  // tslint:disable-next-line:no-empty
  state => ({}),
  {
    loadList: project.load_list,
  }
)(Project);
