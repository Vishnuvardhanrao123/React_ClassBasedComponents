import { Component } from "react";

const arr = ["rahul", "vamish", "rinku", "pinku"];

class States extends Component{
    constructor(){
        super()
        this.state={
            count:0,
            name:arr[0]
        }
        console.log("constructor",this.state)
    }
    increment = () =>{
        console.log(this.setState({count:this.state.count+1,name:arr[this.state.count+1]}))
        
        
        
    }
    decrement=()=>{
       console.log(this.setState({count:this.state.count-1,name:arr[this.state.count-1]}))
    }
    reset=()=>{
        console.log(this.setState({count:0,name:arr[0]}))

    }
    
    
    render(){
        console.log("render",this.state)
        return(<>
           <h1>count:{this.state.count}</h1>
           <button onClick={this.increment}>+</button>
           <button onClick={this.decrement}>-</button>
           <button onClick={this.reset}>reset</button>
           <h1 >{this.state.name}</h1>
        </>)
    }
}
export default States