import React, {Component} from "react";
import ChildComponent from "./ChildComponent";
import SmChildComponent from "./SmChildComponent";

class SmParentComponent extends Component
{
    state =
    {
        balance:0,
        
    };
    balanceIncrement =() =>
    {
        this.setState({balance : this.state.balance + 1});
    }
  render()
  {
      const {name, age }=this.props;
      return <> <h1>
          Hello From SM Parent
          {this.state.balance}

         
      </h1>
      <button onClick={this.balanceIncrement}>
             Family Profit
        </button>
        <SmChildComponent name={"Ram"}  balanceIncrement={this.balanceIncrement}/>
          <SmChildComponent name={"Krushan"} balanceIncrement={this.balanceIncrement}/>
      </>
  }
}
export default SmParentComponent;