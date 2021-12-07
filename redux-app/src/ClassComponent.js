import React ,{ Component } from "react";


export default class ClassComponent extends Component{
    state={
    classValue:0,
    }
    onClickHandler=() =>{
        this.setState({classValue:this.state.classValue+1})
    }
    onClickHandlerDecrement=() =>{
    
        this.setState({classValue:this.state.classValue-1});
        
    }
    render(){
        return(
            <>
            <h1>Hello I Am I Class Component</h1>
            <h1>classValue:{this.state.classValue}</h1>
            <button onClick={this.onClickHandler}>Submit</button>
            <button onClick={this.onClickHandlerDecrement}>Decrement</button>
            </>
        )
    }
}