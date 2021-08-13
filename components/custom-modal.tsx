import React, { Component, ReactNode } from "react";

interface IProps {
  name: string;
  hideModal: () => void;
  visible: boolean;
  children: ReactNode;
}
interface IState {
  showModal: boolean;
}

class CustomModal extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = { showModal: this.props.visible || false };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.visible !== this.state.showModal) {
      this.setState({
        showModal: prevProps.visible
      });
    }
  }

  render() {
    return <div> {this.state.showModal && "CustomModal"} </div>;
  }
}

export default CustomModal;
