import { Component } from "react";

class Secondcomponent extends Component{
    constructor(){
        super()
    }
    render(){
        console.log(this.props)
        const person=this.props.name
        return(
            <>
            <h1>Hello</h1>
            <h1>{this.props.name}</h1>
            </>
        )
    }
}

export default Secondcomponent