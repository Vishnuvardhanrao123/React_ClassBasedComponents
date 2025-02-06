import { Component } from "react";

class Creation extends Component{
    constructor(){
        super()
        this.state={
            data:{},
            count:1,
            products:[]
        }
    }
    handlenext=()=>{
        if(this.state.count<this.state.products.length){
        this.setState({count:this.state.count +1})}
    }
    handlePrivouse=()=>{
        if(this.state.count > 1){
        this.setState({count:this.state.count -1})}
    }
    componentDidMount(){
    //    const id=this.state.count
       fetch(`https://fakestoreapi.com/products/`)
       .then((res)=>res.json())
       .then((data)=>this.setState({products:data,data:data[0]}))
       
    }
    componentDidUpdate(preivprobs,preivstate){
        // console.log(preivprobs,preivstate)
        if(preivstate.count !== this.state.count){
        fetch(`https://fakestoreapi.com/products/${this.state.count}`)
       .then((res)=>res.json())
       .then((data)=>this.setState({data}))}
    }

    render(){
        // console.log(this.state.data)
        return(<>
          <div>
            <div>
                <div>
                    <img height={100} width={100} src={this.state.data.image}/>
                </div>
                <div>
                    <h2>{this.state.data.title}</h2>
                    <p>{this.state.data.description}</p>
                    <strong>{this.state.data.price}</strong>
                </div>
            </div>
            <h4>{this.state.count}-{this.state.data.id}</h4>
            <button onClick={this.handlenext} style={{height:"50px",width:"100px",padding:"10px",margin:"50px"}}>Next</button>
            <button onClick={this.handlePrivouse} style={{height:"50px",width:"100px",padding:"10px",margin:"50px"}}>Privouse</button>
            
            
          </div>
        </>)
    }
}
export default Creation

