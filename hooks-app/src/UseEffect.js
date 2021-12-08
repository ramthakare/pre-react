import { useEffect, useState } from "react"
import useMyLog from "./useMyLog";
import useUserStatus from "./useUserStatus";


export default () =>{
    const[value,setValue]=useState(0);
    const[newValue,setNewValue]=useState(0);
    // useMyLog(value);
    const onClickHandler =() =>{
        setValue(value+1);
    };
    const onNewClickHandler =() =>{
        setNewValue(newValue+1);
    };
    const userStatus=
    useUserStatus(value);

    // useEffect(() =>{
    //     console.log("rendered");//execute everytime after component is render/updateed
    // });

    // useEffect(()=>{
    //     console.log("rendered");
    // },[]
    // );//execute only one after component render
    
    // useEffect(()=>{
    //     console.log("Value updated");
    //     return()=>{
    //         console.log("clean up");
            
    //     };
    // },[value] );//execute everytime when value will get updated
     
    return(
        <>
        <useMyLog />
        <h1>Use Effect Example Component</h1>
        <div>Value:{value}</div>
        <div>New Value:{newValue}</div>
        <div>useUserStatus:{userStatus}</div>
        <button onClick={onClickHandler}>Click Me</button>
        <button onClick={onNewClickHandler}>Update new Value</button>
        </>
    )
}