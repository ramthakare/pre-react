import { useEffect } from "react"

export default (value)=>{
    //useEffecrt

    useEffect(() =>{
        console.log(value);
    },[value]);
    //Api Call to  lig it at server side
}