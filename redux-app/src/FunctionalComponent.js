import { useState } from "react"


export default () =>{
    //const stateArr=useState(0);
    //const[value,setvalue]=stateArr;
const[Value,setValue] =useState(0);
const [newValue,setNewValue]=useState(0);
// const onClickHandler =() =>{
//     setValue(Value+1);
// };
const onUpdateClickHandler =() =>{
    setValue(Value+1);
};
const onNewUpdateClickHandler =() =>{
    setNewValue(Value+1);
};
// const onClickHandlerDecrement =() =>{
//    if(Value>0)
//    {
//     setValue(Value-1);
//    }
// };
return(
    <>
    <h1>Hello I Am In Functional  Component</h1>
    <h1>Value:{Value}</h1>
    <h1>New Value:{newValue}</h1>
    <button onClick={onUpdateClickHandler}>Submit</button>
    <button onClick={onNewUpdateClickHandler}>update new value state</button>
    {/* <button onClick={onClickHandlerDecrement}>Decrement</button> */}
    </>
);
}