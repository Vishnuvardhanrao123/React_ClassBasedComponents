import { Component } from "react";
import Secondcomponent from "./Secondcomponent";

class Classbasedcomponent extends Component{
    constructor(){
        super()
    }
    render(){
        const names="vishnu"
        return(
            <>
            <Secondcomponent  name={names}/>
            </>
        )
    }
}

export default Classbasedcomponent