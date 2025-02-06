import { Component } from "react";

class Login extends Component{
    constructor(){
        super()
        this .state={
            username:"",
            email:"",
            password:"",
            submittedData:null
        }
    }
    handlesubmit=(e)=>{
        e.preventDefault()
        const{username,email,password}=this.state
        this.setState({submittedData:{username,email,password}},
            ()=>{
            console.log('submittedData',this.state.submittedData)
        }
    );
       
    }
    handleInput=(event)=>{

       this.setState({[event.target.name]:event.target.value})
    }
    render(){
   
        return(<>
             <form onSubmit={this.handlesubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" placeholder="username..."  onChange={this.handleInput}></input><br/>
                <label htmlFor="email">email</label>
                <input type="email" name="email" id="email" placeholder="email..." onChange={this.handleInput}></input><br/>
                <label htmlFor="password">password</label>
                <input type="password" name="password" id="password" placeholder="password..." onChange={this.handleInput}></input><br/>
                <button type="Submit">Submit</button>
             </form>
             <div>
                {
                
                (this.state.submittedData !==null)?
                <><h3>{this.state.submittedData.username}</h3>
                <h3>{this.state.submittedData.email}</h3>
                <h4>{this.state.submittedData.password}</h4></>:"Loading......"
                
                }
             </div>

        </>)
    }
}
export default Login