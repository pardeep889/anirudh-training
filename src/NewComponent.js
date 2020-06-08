import React, { Component } from "react";

class NewComponent extends Component {
  state = {
    status: 1,
  };

  clickHandle(){
      this.setState({
          status: "two"
      })
  }
  clickHandleOne(){
      this.setState({
          status: "one"
      })
  }

  render() {
    return (
        <>
            <div>{this.state.status}</div>
            <button onClick={this.clickHandleOne.bind(this)}>Increement</button>

            <button onClick={this.clickHandle.bind(this)}>Decreement</button>
        </>
    );
  }
}

export default NewComponent;

// state
