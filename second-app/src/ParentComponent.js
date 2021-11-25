import React, {Component} from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component
{
    state =
    {
        balance:0,
        
    };
    balanceIncrement =(value) =>
    {
        this.setState({balance : this.state.balance+1});
    }
    render()
    {
        const {name ,age  }=this.props;
        return(
            <>
        <h1>
            Hello From SM Parent
            </h1>

            <button onClick={this.ba}>
             single Profit
        </button>
        <h1>
              <ChildComponent name={"Ram"} />
              <ChildComponent name={"sham"}/>
              
        </h1>
        
        </>
        );
    }
    
    
   
}
export default ParentComponent;