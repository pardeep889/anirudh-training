import React, { Component } from "react";

class Practice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "pardeep",
      lastname: "Rajput",
    };
    this.onsubmitForm = this.onsubmitForm.bind(this);
  }

  // handleInputNameChange(e){
  //     this.setState({
  //         name: e.target.value
  //     })
  // }

  // handleLastNameChange(e){
  //     this.setState({
  //         lastname: e.target.value
  //     })
  // }
  onsubmitForm(e) {
    e.preventDefault();
    console.log(e.target.name.value);
  }

  renderFormInputs = (formValues) =>
    formValues.map((item, i) => (
      <span key={i}>
        <input
          type={item.type}
          name={item.name}
          defaultValue={item.value}
        />
        <br />
      </span>
    ));

  render() {
    const formValues = [
        { type: "email", name: "name", value: "Pardeep" },
        { type: "text", name: "lastname", value: "Rajput" },
        { type: "number", name: "age", value: "28" }
    ];
    return (
      <div>
        <form onSubmit={(e) => this.onsubmitForm(e)}>
          {this.renderFormInputs(formValues)}
          {/* <input type="text" onChange={(e) => this.setState({name: e.target.value})} value={this.state.name} />
                    <br/>
                    <input type="text" onChange={(e) => this.setState({lastname: e.target.value})} value={this.state.lastname} />
                    <br/> */}
          <input type="submit" name="submit" />
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
