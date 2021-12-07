import { useState } from "react"
import withOrder from "./withOrder";

const OnlineOrder=(props)=>{
    const status =[
        "order placed",
        "pending",
        "preparing",
        "out of delivery",
        "deliverd",
    ];
    // const[Value,setvalue] =useState(0);

    // const onClickHandler=()=>{
    //     setvalue(Value+1);
    // };

    return(
        <>
        <h1>Online Order</h1>
        <div>
            Current Status:{status[props.value]}</div>
            <button onClick={props.onClickHandler}>Next Satus</button>
        
        </>
    )
}
export default withOrder(OnlineOrder);