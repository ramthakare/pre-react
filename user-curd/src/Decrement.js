 export default(props)=>{

    return(
        <>
        <h1>In Decrementer</h1>
        value:{props.value}
        <button onClick={props.onClickHandler} >Decrement</button>
        </>
    )

 }