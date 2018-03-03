import * as React from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';
import { auth } from '../../store/actions';
import history from '../../shared/history';

const FormItem = Form.Item;

interface RegistProps {
  regist: any;
}

class RegistForm extends React.Component<RegistProps & FormComponentProps> {
  regist() {
    this.props.form.validateFields((errors, fields) => {
      if (!errors) {
        this.props.regist(fields.name, fields.password).then(
          () => history.push('/')
        ).catch(
          (err: Error) => {
            message.error(err.message);
          },
        );
      }
    });
  }

  checkConfirm(rule: object, value: string, callback: any) {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
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
              placeholder="Username"
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
          getFieldDecorator('confirm', {
            rules: [{
              required: true,
              message: 'Please confirm your password',
            }, {
              validator: this.checkConfirm.bind(this),
            }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Confirm Password"
            />
          )
        }
        </FormItem>
        <FormItem>
          <Checkbox>我已阅读并同意</Checkbox>
          <a className="login-form-forgot" href="/protocal" target="__blank">用户许可协议</a>
          <Button onClick={() => this.regist()} type="primary" htmlType="submit" className="login-form-button">
            注册
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default connect(
  // tslint:disable-next-line:no-empty
  (state) => {},
  {
    regist: auth.regist,
  }
)(Form.create({})(RegistForm));
