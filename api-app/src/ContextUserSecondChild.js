import React,{Component} from "react";
import ContextUserThirdChild from "./ContextUserThirdChild";

export default class ContextUserSecondChild extends Component{
    render()
    {
        return(
            <>
            <h1>Hello I am In ContextUserSecondChild</h1>
            <ContextUserThirdChild />
            </>
        )
    }
} 