import * as React from 'react';
import { connect } from 'react-redux';
import * as Immutable from 'immutable';
import {
  Form,
  Input,
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

interface ModifyIdentifyProps extends FormComponentProps {
  phone: string;
  email: string;
}

class ModifyIdentify extends React.Component<ModifyIdentifyProps> {
  state = {
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form>
        <FormItem
          {...formItemLayout}
          label="手机号"
        >
        {
          getFieldDecorator('phone', {
            initialValue: this.props.phone,
          })(
            <Input
            />
          )
        }
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="邮箱"
        >
        {
          getFieldDecorator('email', {
            initialValue: this.props.email,
          })(
            <Input
            />
          )
        }
        </FormItem>
      </Form>
    );
  }
}

export default connect(
  (state: Immutable.Map<String, any>) => {
    return {
      phone: state.getIn(['auth', 'phone']),
      email: state.getIn(['auth', 'email']),
    };
  },
  {

  }
)(Form.create()(ModifyIdentify));
