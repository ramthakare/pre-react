import React, {Component} from "react";

class MySecondClassComponent extends Component
{
    state =
    {
        balance:0,
        accountNumber: "anhfj124",
    };
    //  onClickHandler = ()  =>
    //  {
    //      console.log("I am clicked now");
    //      this.setState({
    //          balance: this.
    //      });
    //  };
    balanceIncrement =(value) =>
    {
        this.setState({balance : this.state.balance+value});
    }
    onProfitClickHandler = ()  =>
     {
          console.log("I am clicked now");
         this.balanceIncrement(100);
      };
      onClickHandler = ()  =>
     {
          console.log("double");
         this.balanceIncrement(1);
      };
    render()
    {
        const {name ,age  }=this.props;
        return(
            <>
        <h1>
              Hello I Am  {name}, {age} year old and my balance is and my accountNumber
              { this.state.balance}{this.props.accountNumber}
              
        </h1>
        <button onClick={this.onClickHandler}>
             single Profit
        </button>
        <button onClick={this.onProfitClickHandler}>
              double Profit
        </button>
        </>
        );
    }
}
export default MySecondClassComponent;