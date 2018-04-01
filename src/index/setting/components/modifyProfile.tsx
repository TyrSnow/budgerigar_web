import * as React from 'react';
import { connect } from 'react-redux';
import * as Immutable from 'immutable';
import {
  Form,
  Input,
  Button,
} from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';

import dirty from '../../../shared/dirty';

const FormItem = Form.Item;

interface ModifyProfileProps {
  head: any;
  name: string;
}

const formItemLayout = {
  labelCol: {
    xs: { span: 14 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 14 },
    sm: { span: 16 },
  },
};

class ModifyProfile extends React.Component<ModifyProfileProps & FormComponentProps> {
  state = {
    dirty: false,
    previewVisible: false,
    previewImage: ''
  };

  submit() {
    this.props.form.validateFields((errors, values) => {
      if (!errors) {
        console.debug(values);
      }
    });
  }

  ifNotChange() {
    let fields = this.props.form.getFieldsValue();
    return !dirty(fields, this.props);
  }

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form>
        {/* <FormItem
          {...formItemLayout}
          label="头像"
        >
          {
            getFieldDecorator('head', {
              valuePropName: 'fileList',
            })(
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button>
                  <Icon type="upload" /> Click to upload
                </Button>
              </Upload>
            )
          }
          <Modal
            visible={this.state.previewVisible}
            footer={null}
            onCancel={() => this.setState({previewVisible: true})}
          >
            <img alt="example" style={{ width: '100%' }} src={this.state.previewImage} />
          </Modal>
        </FormItem> */}
        <FormItem
          {...formItemLayout}
          label="用户名"
        >
        {
          getFieldDecorator('name', {
            initialValue: this.props.name,
          })(
            <Input
              disabled={true}
            />
          )
        }
        </FormItem>
        <FormItem
          {...formItemLayout}
          label=" "
          className="none"
        >
          <Button
            disabled={this.ifNotChange()}
            onClick={() => this.submit()}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            提交
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default connect(
  (state: Immutable.Map<String, any>) => {
    return {
      head: [{
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: state.getIn(['auth', 'head'])
      }],
      name: state.getIn(['auth', 'name']),
    };
  },
  {

  }
)(Form.create()(ModifyProfile));
