import * as React from 'react';
import Detail from './detail';
import List from './list';
import './index.css';

class Project extends React.Component {
  render() {
    return (
      <div className="m-project">
        <List />
        <Detail />
      </div>
    );
  }
}

export default Project;
