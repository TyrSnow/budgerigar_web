import * as React from 'react';

import './index.css';

class Protocal extends React.Component {
  render() {
    return (
      <div className="page p-protocal" style={{ padding: '20px'}}>
        <h1>用户协议</h1>
        <p>1、本站点使用开源项目进行搭建，本站点仅对开源项目的实际运行情况做出展示，<b>任何注册用户都将在注册30天后被禁用</b>;</p>
        <p>2、被禁用后，用户依然可以使用本站功能导出在本站中留存的数据，但将不能在站点上对数据做出任何的修改;</p>
        <p>3、您可以访问帮助文档，搭建自己的服务环境，并将数据导入到自己的服务环境;</p>
        <p>4、您一旦注册、登录、使用或以任何方式使用本站点，将视为对本《用户协议》的接受，即表示您同意接受本《用户协议》各项条款的约束;</p>
        <p>5、如果您不同意以上条款，请不要注册、登录或使用本站点。</p>
      </div>
    );
  }
}

export default Protocal;
