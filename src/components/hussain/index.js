import React, { Component } from "react";
import MyReactNativeComponent from "../../components/anirudh/styled-component";
import { Title } from "./styled";
class Index extends Component {
  constructor(props) {
    super(props);
  }

  //   handleNameChange(e) {
  //     this.setState({ name: e.target.value });
  //   }
  //   handleLatnameChange(e){

  //     this.setState({ lastname: e.target.value });

  //   }
  onSubmitForm(e) {
    e.preventDefault();
    console.log(this.state);
    if (this.state.name.length < 5) {
      this.setState({ err: true });
    }
  }

  renderInputValues = (data) => {
    return data.map((item, i) => (
      <div key={i}>
        <input type={item.type} name={item.name} defaultValue={item.value} />
      </div>
    ));
  };
  render() {
    const data = [
      {
        type: "text",
        value: "Pardeep",
        name: "firstname",
      },
      {
        type: "text",
        value: "Rajput",
        name: "lastname",
      },
      {
        type: "number",
        value: "28",
        name: "age"
      }
    ];

    return (
      <div>
        <form onSubmit={this.onSubmitForm.bind(this)}>
          {this.renderInputValues(data)}
          {/* <input
            type="email"
            onChange={(e) => this.handleNameChange(e)}
            value={this.state.name}
          />
          <br />
          {this.state.err && (<div style={{color: "red"}}> Name is not valid must be greater then 5 chars. </div>)}           
            
          <br/>
          <input type="text"  onChange={(e) => this.handleLatnameChange(e)} value={this.state.lastname} /> */}

          <br />
          <input type="submit" value="Submit Data"/>

          <Title>This is Title</Title>

          {/* <MyReactNativeComponent/> */}
        </form>
      </div>
    );
  }
}

export default Index;
