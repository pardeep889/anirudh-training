import React, { Component } from 'react';
import axios from "axios";

class UserComponent extends Component {

    state = {
        loading: false,
        user: null
    }
    componentDidMount(){
        this.setState({loading: true});
        axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {     
               
            this.setState({user: response.data, loading: false})
        }).catch((err) => console.error(err));
    }

    renderUsers = (users) => {
        if(typeof(users) === "undefined"){
            return <>No user </>
        }
        return  users.map((item, i) => {
            return <div key={i}>{item.title}</div>
        })
    }



    render() {
        const {user, loading} = this.state;
       
        return (
            <div>
                {loading && <h2>Loading</h2>}
                {user  && <h1> {this.renderUsers(user)} </h1>}
            </div>
        );
    }
}

export default UserComponent;


// api axios ,
// revised hoc
// parent component function call from child
// generators and iterators in javascript