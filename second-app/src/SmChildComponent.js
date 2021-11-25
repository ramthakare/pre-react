import React, {Component} from "react";

class SmChildComponent extends Component
{
  render()
  {
      const{name,balanceIncrement}=this.props;
      return <> <h1>
          {name}
      </h1>
      <button onClick={balanceIncrement}>
              Profit
        </button>
      </>
  }
}
export default SmChildComponent;