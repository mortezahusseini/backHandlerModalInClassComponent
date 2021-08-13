import React, { Component } from "react";
import CustomModal from "../components/custom-modal";

interface IState {
  showModal: boolean;
}

class Home extends Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      showModal: true
    });
  }

  render() {
    return (
      <>
        <button onClick={this.clickHandler}> show modal </button>
        <CustomModal visible={this.state.showModal} />
      </>
    );
  }
}

export default Home;
