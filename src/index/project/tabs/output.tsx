import * as React from 'react';
import axios from 'axios';
import {
  message,
  Input,
} from 'antd';
import OutputPackage from './outputPackage';
import OutputCreateForm from './outputCreate';

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

interface OutputTabProps {
  project: any;
}

class OutputTab extends React.Component<OutputTabProps> {
  state = {
    key: '',
    data: [],
    filted: [],
    loading: false,
  };

  timeout: any;

  componentWillMount() {
    this.fetch();
  }

  componentWillReceiveProps(nextProps: OutputTabProps) {
    if (nextProps.project._id !== this.props.project._id) {
      this.fetch(nextProps.project._id);
    }
  }

  fetch(id: string = this.props.project._id) {
    this.setState({
      loading: true,
    });
    axios({
      url: '/api/packages',
      params: {
        project: id,
      }
    }).then(
      (resp) => {
        this.setState({
          key: '',
          data: resp.data.data,
          filted: resp.data.data,
          loading: false,
        });
      }
    ).catch((err) => {
      message.error(err.message);
      this.setState({
        loading: false,
      });
    });
  }

  filtList() {
    const { data, key } = this.state;
    const reg = new RegExp(key);
    this.setState({
      filted: data.filter((pack: any) => pack.name.match(reg)),
    });
  }

  handleKeyChange(e: any) {
    this.setState(
      {
        key: e.target.value,
      },
      () => {
        if (this.timeout) {
          clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(
          () => {
            delete this.timeout;
            this.filtList();
          },
          300,
        );
      }
    );
  }

  handleCreate(fields: any) {
    let pack = {
      project: this.props.project._id,
      name: this.state.key,
      ...fields,
    };
    axios({
      url: '/api/packages',
      method: 'POST',
      data: pack,
    }).then((resp: any) => {
      const list = [resp.data.data, ...this.state.data];
      this.setState({
        data: list,
        filted: list,
        key: '',
      });
    });
  }

  deletePackage(id: string) {
    axios({
      url: `/api/packages/${id}`,
      method: 'delete',
    }).then(
      (resp) => {
        message.success('语言包已删除');
      },
    ).catch(err => message.error(err.message));
  }

  editPackage(item: any) {
    console.debug(item);
  }

  render() {
    return (
      <div className="m-tabPane m-outputTab">
        <div className="u-controls">
          <Input value={this.state.key} onChange={e => this.handleKeyChange(e)} />
        </div>
        {
          this.state.filted.map(
            (pack: any) => (
              <OutputPackage
                onDelete={(id: string) => this.deletePackage(id)}
                onEdit={(item: any) => this.editPackage(item)}
                key={pack._id}
                {...pack}
              />
            )
          )
        }
        {
          this.state.filted.length === 0 ? (
            <div className="noResult">
              <OutputCreateForm onSubmit={(fields: any) => this.handleCreate(fields)} />
              {
                this.state.data.map(
                  (pack: any) => (
                    <OutputPackage
                      key={pack._id}
                      {...pack}
                    />
                  )
                )
              }
            </div>
          ) : (null)
        }
        {
          this.state.data.length === 0 ? (
            <div className="empty">还没有语言包</div>
          ) : null
        }
      </div>
    );
  }
}

export default OutputTab;
