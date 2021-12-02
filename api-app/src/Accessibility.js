import React,{Component} from "react";


export default class Accessibility extends Component{

    buttonOnClickHandler =() =>{
        console.log("Button Clicked");
    }
    render()
    {
        return(
            <>
            <h1>I am Inside Accessibility</h1>
            <label htmlFor="name">Name</label>
            <input
            id="name"
            name={"name"}
            placeholder="please enter your name"
            aria-label="name"
            aria-required="true"

            
            />
            <br />
            <button onClick={this.buttonOnClickHandler}>Click me</button>

            <table>
                <tbody>
                    <tr>
                        <td>Ram</td>
                        <td>Krushna</td>
                    </tr>
                </tbody>
            </table>
          

            </>
        )
    }
}