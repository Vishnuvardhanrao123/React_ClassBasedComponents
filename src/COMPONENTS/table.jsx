import { Component } from "react";
import {data} from "../COMPONENTS/cardsdata"

class Table extends Component{
    constructor(){
        super()
        console.log(this.props)
    }
    render(){
        console.log(this.props)
        return( 
        <>
        <h1>Table</h1>
        <table border={1} cellSpacing={0}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>desc</th>
                    <th>price</th>
                </tr>
            </thead>
            <tbody>
                { data.length>0 ?( <>
                    {data.map((data,index)=>{
                        return (
                            <>
                            <tr key={index}>
                                  <td>{data.id}</td>
                                  <td>{data.name}</td>
                                  <td>{data.desc ?? "_"}</td>
                                  <td>{data.price}</td>
                            </tr>
                            </>
                        )
                    })}
                </>) : (<h1>error</h1>)
                }
                
            </tbody>
        </table>
        </>)
    }
}
export default Table