import React from "react";

// function AppOne() {
//   const mystyle = { color: "red", backgroundColor: "yellow" };
//   return (
//     <>
//       <div className="myclass">
//         Hello World
//         <span style={mystyle}>new</span>
//       </div>
//     </>
//   );
// }

class AppOne extends React.Component {
  render() {
    return (
      <>
        <div>
          Hello World
          <span>new</span>
        </div>
      </>
    );
  }
}

export default AppOne;
