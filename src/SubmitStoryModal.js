import React from "react";
import { Modal, Form, Input, Button, Radio } from "antd";
import TextArea from "antd/lib/input/TextArea";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

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
        onCancel={this.handleCancel.bind(this)}
        footer={[
        ]}>
        <div className="row">
          <div className="col">
            <h6>Title</h6>
            <Form.Item>
              <Input />
            </Form.Item>
            <h6>Description</h6>
            <Form.Item>
              <TextArea style={{height: 170}}/>
            </Form.Item>
            <Button style={{borderRadius: 0, backgroundColor: "#361450", color: "#ffffff"}}>SUBMIT</Button>
          </div>
          <div className="col">
            <h6>Link</h6>
            <Form.Item>
              <Input />
            </Form.Item>
            <h6>Alternate Link</h6>
            <Form.Item>
              <Input />
            </Form.Item>
            <h6>Tags</h6>
            <div>
              <RadioGroup onChange={this.onChange} defaultValue="a">
                <RadioButton value="a" style={{ margin: 5, fontFamily: "Rubik" }}>Blog Post</RadioButton>
                <RadioButton value="b" style={{ margin: 5, fontFamily: "Rubik" }}>News Article</RadioButton>
                <RadioButton value="c" style={{ margin: 5, fontFamily: "Rubik" }}>Press Release</RadioButton>
                <RadioButton value="d" style={{ margin: 5, fontFamily: "Rubik" }}>Research Paper</RadioButton>
                <RadioButton value="e" style={{ margin: 5, fontFamily: "Rubik" }}>Ask Crew</RadioButton>
                <RadioButton value="f" style={{ margin: 5, fontFamily: "Rubik" }}>Show Crew</RadioButton>
              </RadioGroup>
            </div>
          </div>
        </div>     
      </Modal>
    </div>);
  }

}

export default SubmitStoryModal;