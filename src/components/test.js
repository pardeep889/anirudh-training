import React from "react";
import "./index.css";

export function App(props) {

  return (
    <>
      <div className="myclass">
        {props.test}
      </div>
    </>
  );
}

export function Test(){
    return (
        <>
          <div className="myclass">
            Hello World
            </div>
        </>
      );
}

export default App;

// props
// state