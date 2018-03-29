import * as React from 'react';
import {
  Form,
} from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';

class OutputCreateForm extends React.Component<FormComponentProps> {
  render() {
    return (
      <Form>表单</Form>
    );
  }
}

export default Form.create()(OutputCreateForm);