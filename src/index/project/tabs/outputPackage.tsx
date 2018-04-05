import * as React from 'react';
import {
  Tag,
  Icon,
} from 'antd';
import { Language } from '../../../definition/language';

interface OutputPackageProps {
  _id: string;
  name: string;
  desc: string;
  texts: Array<string>;
  languages: Array<Language>;
  onDelete?: any;
  onEdit?: any;
}

class OutputPackage extends React.Component<OutputPackageProps> {
  state = {};

  render() {
    return (
      <div className="u-package">
        <div className="u-info">
          <p className="name">
            {this.props.name}
            {
              this.props.languages.map(
                ({_id, code}) => <Tag key={_id} color="#3eaaaf">{code}</Tag>
              )
            }
          </p>
          {
            this.props.desc ? (
              <p className="desc">{this.props.desc}</p>
            ) : null
          }
        </div>
        <div className="static">{this.props.texts.length}</div>
        <div className="controls">
          {
            this.props.onDelete ? (
              <Icon onClick={() => this.props.onDelete(this.props._id)} type="delete" />
            ) : null
          }
          {
            this.props.onEdit ? (
              <Icon onClick={() => this.props.onEdit(this.props)} type="edit" />
            ) : null
          }
        </div>
      </div>
    );
  }
}

export default OutputPackage;
