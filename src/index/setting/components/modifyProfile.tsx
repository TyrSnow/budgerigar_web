import * as React from 'react';
import { connect } from 'react-redux';
import * as Immutable from 'immutable';
import {
  Form,
  Input,
  Button,
  Upload,
  Modal,
} from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';

const FormItem = Form.Item;

interface ModifyProfileProps {
  head: any;
  name: string;
}

class ModifyProfile extends React.Component<ModifyProfileProps & FormComponentProps> {
  state = {
    previewVisible: false,
    previewImage: ''
  };

  submit() {
    console.debug(this.props.form.getFieldsError());
  }
  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    console.debug(this.props);
    return (
      <Form layout="vertical">
        <FormItem
          label="头像"
        >
          {
            getFieldDecorator('head', {
              valuePropName: 'fileList',
            })(
              <Upload
                action="/api/upload/head"
                listType="picture-card"
                onPreview={(file) => this.setState({previewVisible: true, previewImage: file.url || file.thumbUrl})}
                onChange={({ fileList }) => this.setState({ fileList })}
              />
            )
          }
          <Modal
            visible={this.state.previewVisible}
            footer={null}
            onCancel={() => this.setState({previewVisible: true})}
          >
            <img alt="example" style={{ width: '100%' }} src={this.state.previewImage} />
          </Modal>
        </FormItem>
        <FormItem
          label="用户名"
        >
        {
          getFieldDecorator('name')(
            <Input
              disabled={true}
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

export default connect(
  (state: Immutable.Map<String, any>) => {
    return {
      head: [{
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: state.getIn(['auth', 'head'])
      }],
      name: state.getIn(['auth', 'name']),
    };
  },
  {

  }
)(Form.create()(ModifyProfile));