import * as React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class LoginForm extends React.Component {
  render() {
    return (
      <Form className="login-form">
        <FormItem>
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username | Email | Phone"
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
          <Checkbox>Remember me</Checkbox>
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default LoginForm;
