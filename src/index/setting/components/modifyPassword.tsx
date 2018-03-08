import * as React from 'react';
import {
  Form,
  Input,
  Button,
} from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';

const FormItem = Form.Item;
class ModifyPassword extends React.Component<FormComponentProps> {
  submit() {
    console.debug(this.props.form.getFieldsError());
  }
  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form layout="vertical">
        <FormItem
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
              placeholder="Old Password"
            />
          )
        }
        </FormItem>
        <FormItem
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
              placeholder="New Password"
            />
          )
        }
        </FormItem>
        <FormItem
          label="确认新密码"
        >
        {
          getFieldDecorator('confirmPwd', {
            rules: [{
              required: true,
              message: '请再次输入新密码',
            }],
          })(
            <Input
              placeholder="Confirm Password"
            />
          )
        }
        </FormItem>
        <FormItem
          label=""
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