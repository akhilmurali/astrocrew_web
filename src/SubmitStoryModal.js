import React from "react";
import { Modal } from "antd";

class SubmitStoryModal extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  state = { visible: false };
  
  showModal() {
    this.setState({
      visible: true,
    });
  }

  handleOk(e) {
    console.log(e);
    this.setState({
      visible: false
    });
  }

  handleCancel(){
    this.setState({
      visible: false
    })
  }
  
  render() {
    return (<div>
      <Modal
        title="Submit Story"
        visible={this.state.visible}
        onOk={this.handleOk.bind(this)}
        onCancel={this.handleCancel.bind(this)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>);
  }

}

export default SubmitStoryModal;