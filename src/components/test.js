import React from "react";
import "./index.css";

export function App() {
    const mystyle = {color: "red", backgroundColor: "yellow"}
  return (
    <>
      <div className="myclass">
        Hello World
        <span style={mystyle}>new</span>
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