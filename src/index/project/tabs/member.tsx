import * as React from 'react';

class MemberTab extends React.Component {
  render() {
    return (
      <div className="m-tabPane m-memberTab">
        <div className="wrapper">
          <h4 className="title">管理员</h4>
          <p>显示管理员的头像和名字，创建者会标记出来，并可以将创建者身份转给另外一个人</p>
        </div>
        <div className="wrapper">
          <h4 className="title">成员</h4>
          <p>显示成员的头像和名字，创建者可以将一名成员提到管理员</p>
        </div>
      </div>
    );
  }
}

export default MemberTab;
