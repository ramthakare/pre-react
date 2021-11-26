import React,{Component} from "react";

export default class FromComponent extends Component
{
    state ={
        Name :"",
        Age:0,
    };
    render()
    {
        return(
            <>
            <h1> Person From</h1>
            <form>
                <label>Name:</label>
                <input />
                <br /> 
                <label> Age :</label>
                <input />
                <br />
                <button>Submit</button>

            </form>
            </>
        );
    }
}