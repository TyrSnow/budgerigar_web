import * as React from 'react';
import {
  Input,
  Button,
} from 'antd';

const Search = Input.Search;

interface ResourceLanguageControlBarProps {
  onChange: any;
}
export default class ResourceLanguageControlBar extends React.Component<ResourceLanguageControlBarProps> {
  state = {
    key: '',
  };
  timeout: any;

  onChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      key: e.target.value,
    });
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      delete this.timeout;
      this.props.onChange(this.state.key);
    }, 300);
  }

  render() {
    return (
      <div className="m-controlBar">
        <div className="u-panel">
          <div className="controls">
            <Button>新建</Button>
          </div>
          <div className="search">
            <Search value={this.state.key} onChange={e => this.onChange(e)} />
          </div>
        </div>
        <div className="u-createForm">
          123
        </div>
      </div>
    );
  }
}
