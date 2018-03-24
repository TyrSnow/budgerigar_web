import * as React from 'react';
import {
  Input,
} from 'antd';

const Search = Input.Search;

export default class ResourceLanguageControlBar extends React.Component {
  render() {
    return (
      <div>
        <Search />
      </div>
    );
  }
}
