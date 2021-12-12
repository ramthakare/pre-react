import { render } from "@testing-library/react";
import { useState } from "react"
import NormalProps from "./NormalProps";


export default(props)=>{
    const[value,setNewValue]=useState(1);

    const onClickHandler=()=>{
        
        
        setNewValue(value-1);
        
    }
    
    return props.render(value,onClickHandler);
}