import React, { Component } from "react";

class Practice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "pardeep",
      lastname: "Rajput",
      err: false,
    };
    this.onsubmitForm = this.onsubmitForm.bind(this);
  }

  handleInputNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleLastNameChange(e) {
    this.setState({
      lastname: e.target.value,
    });
  }
  onsubmitForm(e) {
    e.preventDefault();
    console.log(this.state);
  }
  formSubmitButton() {
    if (this.state.name.length < 5) {
      this.setState({ err: true });
    }
  }

  //   renderFormInputs = (formValues) =>
  //     formValues.map((item, i) => (
  //       <span key={i}>
  //         <input
  //           type={item.type}
  //           name={item.name}
  //           defaultValue={item.value}
  //         />
  //         <br />
  //       </span>
  //     ));

  render() {
    // const formValues = [
    //     { type: "text", name: "name", value: "Pardeep" },
    //     { type: "text", name: "lastname", value: "Rajput" },
    //     { type: "text", name: "age", value: "28" }
    // ];

    // if (condition) {

    // }

    // if (condition) {

    // } else {

    // }
    // {true && a}
    // {true ? a: b}
    const myErrorStyle = {
      padding: "5px",
      color: "red",
    };

    return (
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* {this.renderFormInputs(formValues)} */}
          <input
            type="text"
            onChange={(e) => this.setState({ name: e.target.value })}
            value={this.state.name}
          />
          <br />
          {this.state.err && (
            <span style={myErrorStyle}>
              There will be error inside above input
            </span>
          )}
          <input
            type="text"
            onChange={(e) => this.setState({ lastname: e.target.value })}
            value={this.state.lastname}
          />
          <br />
          {/* <input type="submit" name="submit" /> */}
          <button onClick={this.formSubmitButton.bind(this)}>Click me!</button>
        </form>
      </div>
    );
  }
}

Practice.defaultProps = {
  myarray: ["a", "b", "c"],
  loading: false,
  callme: function (e) {
    return e;
  },
  age: 28,
  name: "Pardeep",
  cars: {
    xuv: "2013",
    celria: "2017",
  },
};

export default Practice;

// default props
// pure component
