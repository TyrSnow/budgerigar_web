import * as React from 'react';
import axios from 'axios';
import {
  Form,
  Input,
  Button,
  message,
} from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';

const FormItem = Form.Item;

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

class ModifyPassword extends React.Component<FormComponentProps> {
  submit() {
    this.props.form.validateFields((errors, values) => {
      if (!errors) {
        axios({
          url: '/api/users/password',
          method: 'put',
          data: {
            oldPwd: values.oldPwd,
            newPwd: values.newPwd,
          },
        }).then(
          () => {
            message.success('密码已修改');
            this.props.form.resetFields();
          },
        ).catch((err) => {
          message.error(err.message);
        });
      }
    });
  }

  checkConfirm = (rule: object, value: string, callback: any) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('newPwd')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form>
        <FormItem
          {...formItemLayout}
          label="旧密码"
        >
        {
          getFieldDecorator('oldPwd', {
            rules: [{
              required: true,
              message: '请输入原始密码',
            }],
          })(
            <Input
              type="password"
              placeholder="Old Password"
            />
          )
        }
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="新密码"
        >
        {
          getFieldDecorator('newPwd', {
            rules: [{
              required: true,
              message: '请输入新密码',
            }],
          })(
            <Input
              type="password"
              placeholder="New Password"
            />
          )
        }
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="确认新密码"
        >
        {
          getFieldDecorator('confirm', {
            rules: [{
              required: true,
              message: '请再次输入新密码',
            }, {
              validator: this.checkConfirm,
            }],
          })(
            <Input
              type="password"
              placeholder="Confirm Password"
            />
          )
        }
        </FormItem>
        <FormItem
          {...formItemLayout}
          className="none"
          label=" "
        >
          <Button onClick={() => this.submit()} type="primary" htmlType="submit" className="login-form-button">
            提交
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(ModifyPassword);