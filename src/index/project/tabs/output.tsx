import * as React from 'react';
import {
  Collapse,
} from 'antd';

const Panel = Collapse.Panel;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

/**
 * 1、新建一个语言包
 * 1、修改语言包的名字
 * 2、自动分配一个access_key用于调用api进行上传[不可变]
 * 3、允许在页面上上传带有特定格式的文本文件进行上传
 * 3、手动录入语句
 * 4、允许配置输出模板
 * 5、允许配置输出的文件名
 * 6、下载某个语言包
 * 7、下载所有语言包
 */

class OutputTab extends React.Component {
  render() {
    return (
      <div className="m-tabPane m-outputTab">
        <Collapse accordion={true}>
          <Panel className="create" header="新建语言包" key="0">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 1" key="1">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </div>
    );
  }
}

export default OutputTab;
