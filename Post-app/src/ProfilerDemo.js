import { Profiler } from "react";



export default () =>{
    const [value,setValue]=useState("");
    const onClickHandler=(event)
=>{
    setValue(event.target.value);
};
return(
    <>
    <h1>In ProfilerDemo</h1>
    <Profiler id={"inputProfiler"} onRender={(...args) =>console.log(args)}>
        <input value={value} onChange={onClickHandler} />
    </Profiler>
    </>
)
}