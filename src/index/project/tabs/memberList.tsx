import * as React from 'react';
import { Member } from '../../../definition/member';
import MemberListItem from './memberListItem';

interface MemberListProps {
  members: Array<Member>;
}

export default class MemberList extends React.Component<MemberListProps> {
  renderMember(member: Member) {
    return <MemberListItem key={member._id} {...member} />;
  }
  render() {
    return (
      <div className="u-members">
        {
          this.props.members.length > 0 ? this.props.members.map(this.renderMember) : (
            <p>还没有成员</p>
          )
        }
      </div>
    );
  }
}
