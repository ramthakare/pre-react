import NormalProps from "./NormalProps"




export default(props) =>{
    // const [value,setValue]=useState(0);
    // const onClickHandler=()=>{
    //     setValue(value+1);
    // };
return(
    <>
    <h1>In INcrement</h1>
    value:{props.value}
    <button onClick={props.onClickHandler}>INcrement</button>
    </>
);

}