import * as React from 'react';
import { connect } from 'react-redux';
import { Form, Input, Icon, message } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';

import { project } from '../../../store/actions';

const FormItem = Form.Item;

interface CreateFormProps {
  createProject: any;
  hideCreate: any;
}

class CreateForm extends React.Component<CreateFormProps & FormComponentProps> {
  createProject() {
    this.props.form.validateFields((errors, fields) => {
      if (!errors) {
        this.props.createProject(fields.name).then(
          () => this.hide(),
        ).catch(
          (err: Error) => message.error(err.message),
        );
      }
    });
  }

  hide() {
    this.props.form.resetFields();
    this.props.hideCreate();
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
              message: '请输入项目名称',
            }],
          })(
            <Input
              suffix={(
                <div>
                  <Icon onClick={() => this.createProject()} type="check" />
                  <Icon onClick={() => this.hide()} type="close" />
                </div>    
              )}
              placeholder="项目名"
            />
          )
        }
        </FormItem>
      </Form>
    );
  }
}

export default connect(
  // tslint:disable-next-line:no-empty
  (state, getState) => { },
  {
    createProject: project.create,
    hideCreate: project.hideCreate,
  },
)(Form.create({})(CreateForm));
