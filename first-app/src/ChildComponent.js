import React, {Component} from "react";

class ChildComponet extends Component
{
    state =
    {
         balance :0,
    };
    onChildProfit=() =>
    {
        this.setState({balance : this.state.balance +1})
    }
    onChildExpense=() =>
    {     
        if(this.state.balance===0)
        {
            return;
        }
        this.setState({balance : this.state.balance -1})
    }
    render()
    
    {
        const {name,onProfit,onExpense}=this.props;
        const onChildclick =() =>
        {
              console.log(onChildclick);
              this.onChildProfit();
              onProfit();
        }
        const onChildLoss =() =>
        {
            console.log(onChildLoss)
            this.onChildExpense();
            onExpense();
        }
        return (
            <>
        
             <div>

            <h1>{name}:{this.state.balance}
            

            </h1>
            {/* <button onClick ={onProfit}>Profit</button> */}
            <button onClick ={onChildclick}>Profit</button>
            <button onClick ={onChildLoss}>Expense</button>

            {/* <button onClick ={onExpense}>Loss</button> */}
    
               
             </div>

         </>
        );
        
    }
}
export default ChildComponet;