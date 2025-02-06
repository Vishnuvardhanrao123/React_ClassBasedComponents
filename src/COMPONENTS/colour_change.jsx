import { Component } from "react";

class Colour extends Component{
    constructor(){
        super()
        this.state={
           colour:""
        }
    }    
        changecolour=(event)=>{
            this.setState({colour:event.target.value})
        }
   
    render(){
        return(<>
        <h1>type onle one colour</h1>
        <input type="text" placeholder="enter the colour.." value={this.state.colour} onChange={this.changecolour}></input>
        <div style={{width:200,height:300,backgroundColor:this.state.colour}}></div>
         
        </>)
    }
}
export default Colour