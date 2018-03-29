import * as React from 'react';
import { Member } from '../../../definition/member';

export default class MemberListItem extends React.Component<Member> {
  static defaultProps = {
    head: '/favicon.ico',
  };

  render() {
    let { props } = this;
    console.debug(props);
    return (
      <div className="member">
        <img src={props.head} className="head" />
        <p className="name">{props.name}</p>
      </div>
    );
  }
}
