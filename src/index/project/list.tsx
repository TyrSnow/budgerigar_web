import * as React from 'react';

interface ProjectInfo {
  id: string;
  name: string;
  last_update: string;
  status: number;
}

const projects = [{
  id: '1',
  name: '项目',
  status: 0,
  last_update: '2017-02-03 17:32:23',

}];
class List extends React.Component {
  renderItem(proj: ProjectInfo) {
    return (
      <div className="proj" key={proj.id}>
        <p>{proj.name}</p>
        <p>{proj.last_update}</p>
      </div>
    );
  }

  render() {
    return (
      <div className="m-projList m-content">
        {
          projects.map(v => this.renderItem(v))
        }
      </div>
    );
  }
}

export default List;
