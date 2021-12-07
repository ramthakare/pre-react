import { useState } from "react"


export default () =>{
    //const stateArr=useState(0);
    //const[value,setvalue]=stateArr;
const[Value,setValue] =useState(0);
const onClickHandler =() =>{
    setValue(Value+1);
};
const onClickHandlerDecrement =() =>{
   if(Value>0)
   {
    setValue(Value-1);
   }
};
return(
    <>
    <h1>Hello I Am In Functional  Component</h1>
    <h1>Value:{Value}</h1>
    <button onClick={onClickHandler}>Submit</button>
    <button onClick={onClickHandlerDecrement}>Decrement</button>
    </>
);
}