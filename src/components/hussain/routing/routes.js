import React from "react";
import {Route, Switch} from "react-router-dom";

const Home = () => <div>Home Page</div>
const Contact = () => <div>Contact us page</div>
const User = () => <div>User  page</div>
const About = () => <div>About  page</div>
const Service = () => <div>Service  page</div>
const PageNotFound = () => <div>404 page is not found!</div>



const Routes = () => {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/user" exact component={User} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/about" exact component={About} />
            <Route path="/service" exact component={Service} />
            <Route path="*" exact component={PageNotFound} />
        </Switch>
    )
}
export default Routes;