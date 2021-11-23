import React ,{Component} from "react";
// import TrueComponent from "./TrueComponent";

export default class ConditionalComponet extends Component
{
    state =
    {
       showTest: true,
    };
    onToggleShowTest =() =>
    {
        this.setState({showTest : !this.state.showTest})
    }
    render()
    {
    return (
        <div>
            {this.state.showTest && <h1>I am From Conditional State</h1>}
            {/* { this.state.showTest=true && <button onClick={this.state.showTest}>Hide</button>}  */}
         <button onClick={this.onToggleShowTest}>{this.state.showTest ? "Hide" : "show"}</button> 
        </div> 
         );
    }
}