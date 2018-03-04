import * as React from 'react';
import {
  Icon,
  Tooltip,
} from 'antd';

class MemberTab extends React.Component {
  render() {
    return (
      <div className="m-tabPane m-memberTab">
        <div className="wrapper">
          <h4 className="title">邀请加入</h4>
          <div className="inner">
            <p className="setting">
              <span className="key">
                <Tooltip
                  placement="topLeft"
                  title="其他用户需要正确输入项目共享码才能加入项目"
                >
                  共享码<Icon type="question-circle" />
                </Tooltip>
              </span>
              <span className="value">asd2380xcnj2380zdfghjq43</span>
              <Icon className="editBtn" type="refresh" />
              <Icon className="editBtn" type="copy" />
            </p>
            <p className="setting">
              <span className="key">邀请用户</span>
              <span className="value">是的方式发</span>
            </p>
          </div>
          <p>复制项目共享码邀请一个用户的加入或者输入用户的分享码来让一个用户进入项目</p>
        </div>
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
