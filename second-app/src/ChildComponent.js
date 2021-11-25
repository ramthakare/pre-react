import React, {Component} from "react";

class ChildComponent extends Component
{

    render()
    
       {
        const {name}=this.props;
        
        return(
            <>
        <h1>
              Child
            
              
        </h1>
        <button onClick={this.onClickHandler}>
             Profit
        </button>
       
        </>
        );
    }
    

}
export default ChildComponent;