import * as React from 'react';
import {
  Progress,
  Tooltip,
} from 'antd';

interface OutputPackageStaticticsProps {
  value: number;
  total: number;
  name: string;
}

class OutputPackageStatictics extends React.Component<OutputPackageStaticticsProps> {
  state = {};

  calcPercent() {
    return Math.floor(100 * this.props.value / this.props.total);
  }

  render() {
    return (
      <div>
        <Progress
          type="circle"
          width={40}
          percent={this.calcPercent()}
        />
        <Tooltip placement="topLeft" title={`${this.props.value} / ${this.props.total}`}>
          <p>{this.props.name}</p>
        </Tooltip>
      </div>
    );
  }
}

export default OutputPackageStatictics;
