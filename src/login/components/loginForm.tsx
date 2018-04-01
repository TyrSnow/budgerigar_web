import * as React from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';
import { auth } from '../../store/actions';
import history from '../../shared/history';

const FormItem = Form.Item;

interface LoginProps {
  logIn: any;
}

class LoginForm extends React.Component<LoginProps & FormComponentProps> {
  submit() {
    this.props.form.validateFields((errors, fields) => {
      if (!errors) {
        this.props.logIn(fields.name, fields.password, fields.remember).then(
          () => history.push('/')
        ).catch(
          (err: Error) => {
            message.error(err.message);
          },
        );
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className="login-form">
        <FormItem>
        {
          getFieldDecorator('name', {
            rules: [{
              required: true,
              message: 'Please input your name',
            }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username | Email | Phone"
            />
          )
        }
        </FormItem>
        <FormItem>
        {
          getFieldDecorator('password', {
            rules: [{
              required: true,
              message: 'Please input your password',
            }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )
        }
        </FormItem>
        <FormItem>
        {
          getFieldDecorator('remember', {
            rules: [{
              required: false,
            }],
          })(
            <Checkbox>Remember me</Checkbox>
          )
        }
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button onClick={() => this.submit()} type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default connect(
  // tslint:disable-next-line:no-empty
  state => ({}),
  {
    logIn: auth.logIn,
  }
)(Form.create({})(LoginForm));
