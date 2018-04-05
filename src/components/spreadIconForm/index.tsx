import * as React from 'react';
import {
  Icon,
} from 'antd';

import './index.css';

interface SpreadIconFormProps {
  icon?: any;
}

class SpreadIconForm extends React.Component<SpreadIconFormProps> {
  static defaultProps = {
    icon: <Icon type="plus-circle-o" />
  };

  state = {
    active: false,
  };

  toggleActive() {
    const { active } = this.state;
    this.setState({
      active: !active,
    });
  }

  renderIcon() {
    const { icon } = this.props;
    return React.cloneElement(icon, {
      className: 'u-icon',
      onClick: () => this.toggleActive(),
    });
  }

  render() {
    return (
      <div className={`m-spreadIconForm ${this.state.active ? 'active' : ''}`}>
        {this.renderIcon()}
        <div className="inner">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default SpreadIconForm;
