import { useState } from "react"
import withOrder from "./withOrder";

const OfflinrOrder= (props)=>{
    const status=["orderPlace","Preparing","serving","bill Payment"];
//    const[Value,setValue]= useState(0);
//    const onClickHandler=() =>{
//        setValue(Value+1);
//    };
   return(
       <>
       <h1>Offline Order</h1>
       <div>Current Status:{status[props.value]}</div>
       <button onClick={props.onClickHandler}>next Status</button>
       </>
   );
}
export default withOrder(OfflinrOrder);