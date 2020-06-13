import React from "react";

class AppOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: "Hello World", // inttial state
      loadingOne: "One",
      name: "pardeep",
      lastname: "kumar"
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  // event button

  clickHandler() {
    
    this.setState({
      loading: false,
      loadingOne: "two",
      name: "Hussain",
      lastname: "Test"
    });
  }

  render() {
    console.log(this.state);
    return (
      <>
        <div style={{ padding: 25 }}>
          <span>{this.state.loading ? "loading" : null}</span>
        </div>
        <input type="text" defaultValue={this.state.name} />
        <input type="text" defaultValue={this.state.lastname} />
        <input type="text" defaultValue={this.state.name} />
        <input type="text" defaultValue={this.state.name} />
        <input type="text" defaultValue={this.state.name} />
        <input type="text" defaultValue={this.state.name} />
        <button onClick={this.clickHandler}> Click Me!</button>
      </>
    );
  }
}

export default AppOne;
// props
// states and setstate
// constructor and 2 ways binding
// rendring inside class
// form event
// life cycle (inbuilt functions)
// this concept
// variable types
