import * as React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class RegistForm extends React.Component {
  render() {
    return (
      <Form className="login-form">
        <FormItem>
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />
        </FormItem>
        <FormItem>
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />
        </FormItem>
        <FormItem>
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Confirm Password"
          />
        </FormItem>
        <FormItem>
          <Checkbox>我已阅读并同意</Checkbox>
          <a className="login-form-forgot" href="/protocal" target="__blank">用户许可协议</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            注册
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default RegistForm;
