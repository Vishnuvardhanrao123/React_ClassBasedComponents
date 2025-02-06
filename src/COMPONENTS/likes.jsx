import { Component } from "react";

class Likes extends Component{
    constructor(){
        super()
        this.state={
           likes:0
        }
    }    
    
        incrlike=()=>{
            this.setState({likes:this.state.likes+1})
        }
   
    render(){
        return(<>
           <button onClick={this.incrlike}>lik</button>
           <h3>likes:{this.state.likes}</h3>
        </>)
    }
}
export default Likes