import React,{Component} from "react";


import { UserConsumer } from "./UserContext";

export default class ContextUserFourthChild extends Component{
    render(){
        return(
            <>
              <h1>Hello I am In ContextUserFourthChild</h1>
              <UserConsumer>
              {(value) =>{
                    return(
                        <h2>
                            The latest value in context is name is{value.name} and id is{""}
                            {value.id}{""} and password is{value.password}{""}
                        </h2>
                    );
                }}

              </UserConsumer>
            </>
        )
    }
}