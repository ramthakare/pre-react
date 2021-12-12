

export default(props)=>{
    return(
        <>
        <h1>New Increment</h1>
        value:{props.value}
       <button  onClick={props.onClickHandler}>New Increment:</button>
        </>
    );
}