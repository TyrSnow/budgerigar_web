import * as React from 'react';
import {
  // Icon,
  // Tooltip,
} from 'antd';
import MemberList from './memberList';
import { Member } from '../../../definition/member';

interface MemberTabProps {
  admins: Array<Member>;
  members: Array<Member>;
  auditMembers: Array<Member>;
}

class MemberTab extends React.Component<MemberTabProps> {
  filtOutOnlyMembers() { // 找出只是成员身份的用户
    let admins = this.props.admins.map(member => member._id);
    return this.props.members.filter(member => admins.indexOf(member._id));
  }

  render() {
    console.debug(this.props);
    return (
      <div className="m-tabPane m-memberTab">
        <div className="wrapper">
          <h4 className="title">管理员</h4>
          <MemberList members={this.props.admins} />
        </div>
        <div className="wrapper">
          <h4 className="title">成员</h4>
          <MemberList members={this.filtOutOnlyMembers()} />
        </div>
        <div className="wrapper">
          <h4 className="title">申请加入</h4>
          {
            
          }
          <MemberList members={this.props.auditMembers} />
        </div>
      </div>
    );
  }
}

export default MemberTab;
