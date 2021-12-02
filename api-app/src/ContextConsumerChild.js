import React,{Component} from "react";
import {PersoConsumer} from "./PersonContext";



export default class ContextConsumerChild extends Component{
    render(){
        return(
            <>
            <h1>in ContextConsumerChild</h1>
            <PersoConsumer>
                {(value) =>{
                    return(
                        <h2>
                            The latest value in context is name is{value.name} and age is{""}
                            {value.age}{""}
                        </h2>
                    );
                }}
            </PersoConsumer>
            </>
        )
    }
}