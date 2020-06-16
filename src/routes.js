import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";

// const App = () => <div>I am App Route</div>


const User = (props) => {
    props.history.push("/pardeep");
    return (
        <div>I am user Route</div>
    )
}
const NotFound = () => <div>Page Not Found</div>;

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={App} />
      <Route  path="/user" exact component={User} />
      <Route path="*" component={NotFound}/>
    </Switch>
  );
};

export default Routes;



// Styled-component
// Routing