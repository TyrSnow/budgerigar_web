import * as React from 'react';

class OutputTab extends React.Component {
  render() {
    return (
      <div className="m-tabPane m-outputTab">
        <div className="">这里允许导出全部的语言数据</div>
        <div className="wrapper">
          <h4 className="title">导出名称</h4>
          <p>允许配置名称、文件名</p>
          <p>允许配置文件头内容、文件尾内容</p>
          <p>允许使用下面的模式配置行内容：{'${key}: ${value}'}</p>
          <p>并配置一个连接符如{'\\n'}</p>
          <p>最后显示在线访问地址和下载按钮</p>
        </div>
      </div>
    );
  }
}

export default OutputTab;
