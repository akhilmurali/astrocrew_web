import React from "react";
import { Modal, Form, Input, Button, Radio } from "antd";
import TextArea from "antd/lib/input/TextArea";

class SubmitStoryModal extends React.Component {

  constructor(props) {
    super(props);
  }
  
  state = { visible: false };

  state = {
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false
      });
    }, 2000);
  }

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }
  onChange(e) {
    console.log(`radio checked:${e.target.value}`);
  }
 //Adjust the length of the modal by somehow manipulating div.antd-modal
  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    const RadioButton = Radio.Button;
    const RadioGroup = Radio.Group;
    return (<div>
      <Modal id="submitStory"
        title="Submit New Story"
        visible={visible}
        onOk={this.handleOk.bind(this)}
        confirmLoading={confirmLoading}
        onCancel={this.handleCancel.bind(this)} >
        <div>
          <Form.Item label="Title">
            <Input />
          </Form.Item>
          <Form.Item label="Description">
            <TextArea />
          </Form.Item>
        </div>
        <div>
          <Form.Item label="Link">
            <Input />
          </Form.Item>
          <Form.Item label="Alternate Link">
            <Input />
          </Form.Item>
          <h4>Tags</h4>
          <div>
            <RadioGroup onChange={this.onChange} defaultValue="a">
              <RadioButton value="b" style={{ margin: 5 }}>Blog Post</RadioButton>
              <RadioButton value="a" style={{ margin: 5 }}>News Article</RadioButton>
              <RadioButton value="c" style={{ margin: 5 }}>Press Release</RadioButton>
              <RadioButton value="d" style={{ margin: 5 }}>Research Paper</RadioButton>
              <RadioButton value="e" style={{ margin: 5 }}>Ask Crew</RadioButton>
              <RadioButton value="f" style={{ margin: 5 }}>Show Crew</RadioButton>
            </RadioGroup>
          </div>
        </div>
      </Modal>
    </div>);
  }

}

export default SubmitStoryModal;