
import React,{Component} from "react";
import ChildComponent from "./ChildComponent";
class ParentComponent extends Component
{
    state={
       balance:0,
    };
    balanceIncrement =() =>
    {
        this.setState({balance : this.state.balance+1});
    }
render()
{
    const{name,age}=this.props;
    
    return(
        <>
        <h1> Hello Parent :</h1>
        <button onClick={this.balanceIncrement}>Add Family</button>
        {/* <ChildComponent name={"Ram"} age={23}/>
         <ChildComponent name={"Krushna"} age={24}/> */}
         </>
    );
}

}
export default ParentComponent;