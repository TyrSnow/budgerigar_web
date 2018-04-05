import * as React from 'react';
import { connect } from 'react-redux';
import * as Immutable from 'immutable';
import {
  Form,
  Input,
  Select,
  Button,
} from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';
import { Language } from '../../../definition/language';

const FormItem = Form.Item;
const { Option } = Select;

interface OutputCreateFormProps {
  onSubmit: any;
  languages: Array<Language>;
}

class OutputCreateForm extends React.Component<OutputCreateFormProps & FormComponentProps> {
  state = {
    loading: false,
  };

  handleSubmit() {
    this.props.form.validateFields((errors, fields) => {
      if (!errors) {
        this.props.onSubmit(fields);
        this.setState({
          loading: true,
        });
      }
    });
  }

  renderLanguages() {
    let options = this.props.languages.map(({_id, name, desc, code}) => {
      return <Option key={_id} value={_id}>{code}({name}-{desc})</Option>;
    });
    return options;
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form layout="inline">
        <FormItem
          label="支持语言"
        >
          {getFieldDecorator('languages', {
            rules: [{ required: true, message: '请至少选择一种支持语言' }],
          })(
            <Select
              mode="multiple"
              style={{ width: 300 }}
              placeholder="支持语言"
            >
              {this.renderLanguages()}
            </Select>
          )}
        </FormItem>
        <FormItem
          label="备注"
        >
          {getFieldDecorator('desc', {
            rules: [{ required: true, message: '请输入备注说明' }],
          })(
            <Input placeholder="备注" />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            onClick={() => this.handleSubmit()}
            loading={this.state.loading}
          >
            新建
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default connect(
  (state: Immutable.Map<String, any>) => {
    return {
      languages: state.getIn(['system', 'languages']),
    };
  },
)(Form.create({})(OutputCreateForm));