import React from "react";
import {Route, Switch, Link} from "react-router-dom";
import Layout from "../../anirudh/hoc/layout"
import UserComponent from "../../anirudh/components/UserComponent"


const Child = (props) => {
  
    // console.log(props);
    // const childFunction = () => {
    //     props.abs();
    //     console.log("I am child");
    // }

    return (<div>I am child  <button onClick={() => props.abs()}> Click me</button> </div>)
}

const Home = () => {

    const parentFunction = () => {
        console.log("I am test")
    }

    return(
        <div>
            I am home
           

            <Child abs={parentFunction}/>
        </div>
    )
}
const Contact = () => <div>Contact us page</div>
const User = () => <div> <Link to="/about" > Click Me </Link> User  page</div>
const About = () => <div>About  page</div>
const Service = () => <div>Service  page</div>
const PageNotFound = () => <div>404 page is not found!</div>



const Routes = () => {
    return(
        <Layout>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/user" exact component={UserComponent} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/about" exact component={About} />
                <Route path="/service" exact component={Service} />
                <Route path="*" exact component={PageNotFound} />
            </Switch>
        </Layout>
    )
}
export default Routes;

// 1. parent function call 
// 2. API's axios 