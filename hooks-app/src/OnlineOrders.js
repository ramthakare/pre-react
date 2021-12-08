import { useState } from "react";
import OnlineOrderChild from "./OnlineOrderChild";



const OnlineOrders =(props) =>{
    console.log(props);

    const status=[
        "order Palce",
        "pending",
        "preparing",
        "out of delivered",
        "delivered",
    ];

    const [value,setValue]=useState(0);
    const [newValue,setNewValue]=useState(0);
    const onClickUpdateHandler=() =>{
        setValue=(value+1);
    }
    const onClickNweUpdateHandler=() =>{
        setNewValue=(value+1);
    }
    const onClickHandler=()=>{
        setValue(value+1);
    };
    return(
        <>
        <h1>Online order Parent</h1>
        <div>Current Status:{status[value]}</div>
        <button onClick={onClickHandler}>Next Status</button>
        <OnlineOrderChild onClickHandler={onClickHandler} />
        </>
    )
}
export default OnlineOrders;