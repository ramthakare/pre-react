import React,{Component} from "react";
import ContextUserSecondChild from "./ContextUserSecondChild";
export default class ContextUserFirstChild extends Component{
    render(){
        return(
            <>
            <h1>Hello I am In ContextUserFirstChild</h1>
             <ContextUserSecondChild /> 
            </>
        )
    }
}