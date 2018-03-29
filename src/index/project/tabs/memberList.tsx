import * as React from 'react';
import { Member } from '../../../definition/member';
import MemberListItem from './memberListItem';

interface MemberListProps {
  members: Array<Member>;
}

export default class MemberList extends React.Component<MemberListProps> {
  render() {
    return (
      <div className="u-members">
        {this.props.members.map((member) => {
          return <MemberListItem key={member._id} {...member} />;
        })}
      </div>
    );
  }
}
