import React, { Component } from 'react';



class Practice extends Component {



    
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
}

Practice.defaultProps = {
    myarray: ["a","b","c"],
    loading: false,
    callme: function(e){return e},
    age: 28,
    name: "Pardeep",

    cars: {
        xuv: "2013",
        celria: "2017"
    }
}


export default Practice;